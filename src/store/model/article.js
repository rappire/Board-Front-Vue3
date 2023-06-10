import api from "@/store/apiUtil";
import router from "@/router/index";
// 기본 설정

export default {
  state: {
    articleList: [],
    displayedArticleList: [],
    article: {},
    pageNum: 1,
    articleNum: 0,
    displayOffset: 5,
    displayedPages: [],
  },
  getters: {
    getArticleList: (state) => state.articleList,
    getDisplayedArticleList: (state) => state.displayedArticleList,
    getArticle: (state) => state.article,
    getPageNum: (state) => state.pageNum,
    getArticleNum: (state) => state.articleNum,
  },
  mutations: {
    setArticleList(state, data) {
      state.articleList = data;
    },
    setArticle(state, data) {
      state.article = data;
    },
    setPageNum(state, data) {
      state.pageNum = data;
    },
    setArticleNum(state, data) {
      state.articleNum = data;
    },
    setDisplayedArticleList(state, data) {
      state.displayedArticleList = data;
    },
    setLoading(state, data) {
      state.Loading = data;
      state.Error = null;
    },
    setError(state, data) {
      state.Loading = false;
      state.Error = data;
    },
    clearError(state) {
      state.Error = null;
    },
  },
  actions: {
    async getArticleList(context) {
      // 상태값 초기화
      context.commit("clearError");
      context.commit("setLoading", true);

      /* RestApi 호출 */
      await api
        .get(`${api.config.baseUrl}/article/list`)
        .then((response) => {
          const articleList = response.data.articleList;
          console.log(`getArticleList : ${response.data}`);
          context.commit("setDisplayedArticleList", articleList);
          context.commit("setArticleNum", articleList.length);
          context.commit("setLoading", false);
        })
        .catch((error) => {
          // 에러인 경우 처리
          context.commit("setLoading", false);
          context.commit("setArticleList", []);
          context.commit("setError", error);
        });
    },
    async getArticle(context, payload) {
      // 상태값 초기화
      context.commit("clearError");
      context.commit("setLoading", true);

      /* RestApi 호출 */
      await api
        .get(`${api.config.baseUrl}/article/${payload}`)
        .then((response) => {
          const article = response.data.article;
          const comment = response.data.comment;
          console.log(`getArticle : ${response.data}`);
          context.commit("setArticle", article);
          context.commit("setComment", comment);
          context.commit("setLoading", false);
          return true;
        })
        .catch((error) => {
          // 에러인 경우 처리
          context.commit("setLoading", false);
          context.commit("setArticle", []);
          context.commit("setComment", {});
          context.commit("setError", error);
          return false;
        });
    },
    async postArticle(context, payload) {
      // 상태값 초기화
      context.commit("clearError");
      context.commit("setLoading", true);

      /* RestApi 호출 */
      await api
        .post(`${api.config.baseUrl}/article`, payload)
        .then((response) => {
          // 정상인 경우 처리
          console.log(`postArticle : ${response.data}`);
          context.commit("setLoading", false);
          router.push("/boards/free/list");
        })
        .catch((error) => {
          // 에러인 경우 처리
          context.commit("setLoading", false);
          context.commit("setError", error);
        });
    },
    async putArticle(context, payload) {
      // 상태값 초기화
      context.commit("clearError");
      context.commit("setLoading", true);

      /* RestApi 호출 */
      await api
        .put(`${api.config.baseUrl}/article/${payload.id}`, payload)
        .then((response) => {
          // 정상인 경우 처리
          console.log(`putArticle : ${response.data}`);
          context.commit("setLoading", false);
          router.push("/boards/free/list");
        })
        .catch((error) => {
          // 에러인 경우 처리
          context.commit("setLoading", false);
          context.commit("setError", error);
        });
    },
    async deleteArticle(context, payload) {
      // 상태값 초기화
      context.commit("clearError");
      context.commit("setLoading", true);

      /* RestApi 호출 */
      await api
        .post(`${api.config.baseUrl}/article/delete/${payload.id}`, { password: payload.password })
        .then((response) => {
          // 정상인 경우 처리
          console.log(`deleteArticle : ${response.data}`);
          context.commit("setLoading", false);
          router.push("/boards/free/list");
        })
        .catch((error) => {
          // 에러인 경우 처리
          context.commit("setLoading", false);
          context.commit("setError", error);
        });
    },
  },
};
