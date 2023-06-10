import api from "@/store/apiUtil";

export default {
  state: {
    category: [],
  },
  getters: {
    getCategory: (state) => state.category,
  },
  mutations: {
    setCategory(state, data) {
      state.category = data;
    },
  },
  actions: {
    async getCategory(context) {
      // 상태값 초기화
      context.commit("clearError");
      context.commit("setLoading", true);

      /* RestApi 호출 */
      await api
        .get(`${api.config.baseUrl}/category`)
        .then((response) => {
          context.commit("setCategory", response.data.category);
          console.log(`getCategory : ${response.data.category}`);
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
