import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",

    component: () => import("../Layouts/Client.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../Pages/Home.vue"),
      },
      {
        path: "/how_works",
        name: "how",
        component: () => import("../Pages/HowWorks.vue"),
      },
    ],
  },

  {
    path: "/n/weight-loss/quiz/1",
    component: () => import("../Layouts/Quiz.vue"),
    children: [
      {
        path: "/n/weight-loss/quiz/1",
        name: "quiz",
        component: () => import("../Pages/Agreement.vue"),
      },
      {
        path: "/n/weight-loss/quiz/2",
        component: () => import("../Pages/QuizOne.vue"),
      },
      {
        path: "/n/weight-loss/quiz/3",
        component: () => import("../Pages/QuizeThree.vue"),
      },
      {
        path: "/n/weight-loss/quiz/4",
        component: () => import("../Pages/QuizeFour.vue"),
      },
      {
        path: "/n/weight-loss/quiz/5",
        component: () => import("../Pages/FiveQuiz.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
