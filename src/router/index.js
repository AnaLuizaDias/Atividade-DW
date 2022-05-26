import { createRouter, createWebHistory } from "vue-router";
import PrincipalView from "../views/homeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: PrincipalView,
    },
    {
      path: "/jogadores",
      name: "jogadores",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/jogadoresView.vue"),
    },
    {
      path: "/home",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/homeView.vue"),
    },
    {
      path: "/Times",
      name: "Times",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/timesView.vue"),
    },
  ],
});

export default router;
