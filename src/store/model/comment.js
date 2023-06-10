import api from "@/store/apiUtil";

export default {
  state: {
    comment: [],
  },
  getters: {
    getComment: (state) => state.comment,
  },
  mutations: {
    setComment(state, data) {
      state.comment = data;
    },
  },
  actions: {
    async postComment(context, payload) {
      // 상태값 초기화
      context.commit("clearError");
      context.commit("setLoading", true);

      /* RestApi 호출 */
      await api
        .post(`${api.config.baseUrl}/comment/${payload.id}`, payload.comment)
        .then((response) => {
          console.log(`postComment : ${response.data}`);
          context.commit("setLoading", false);
        })
        .catch((error) => {
          // 에러인 경우 처리
          context.commit("setLoading", false);
          context.commit("setArticle", []);
          context.commit("setComment", {});
          context.commit("setError", error);
        });
    },
  },
};
