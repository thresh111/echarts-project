import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/page",
    name: "page",
    component: () => import("../views/HomePage.vue"),
  },
  // 设置路由重定向
  {
    path: "/",
    redirect: "/page",
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
