import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/boards/free/list",
  },
  {
    path: "/boards/free/list",
    name: "list",
    component: () => import("@/view/BoardList.vue"),
  },
  {
    path: "/board/free/view/:id",
    name: "view",
    component: () => import("@/view/BoardArticle.vue"),
  },
  {
    path: "/board/free/modify/:id",
    name: "modify",
    component: () => import("@/view/ModifyArticle.vue"),
  },
  {
    path: "/board/free/delete/:id",
    name: "delete",
    component: () => import("@/view/BoardDelete.vue"),
  },
  {
    path: "/board/free/write",
    name: "write",
    component: () => import("@/view/BoardWrite.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
