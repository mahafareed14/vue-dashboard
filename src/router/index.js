import { createRouter, createWebHashHistory } from "vue-router";
import DashBoardView from "../views/DashBoardView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashBoardView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
