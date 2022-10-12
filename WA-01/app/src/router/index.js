import { createRouter, createWebHistory } from "vue-router";
import PočetnaStranica from "../views/PočetnaStranica.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PočetnaStranica,
  },
  {
    path: "/SecondPage",
    name: "Second Page",
    component: () => import("../views/SecondPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
