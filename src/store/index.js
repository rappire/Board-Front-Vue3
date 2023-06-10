import { createStore } from "vuex";
import article from "@/store/model/article";
import comment from "./model/comment";
import category from "./model/category";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    article,
    comment,
    category,
  },
});
