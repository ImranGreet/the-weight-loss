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
      {
        path: "/medications",
        name: "medications",
        component: () => import("../Pages/Medication.vue"),
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
        name: "quizTwo",
        component: () => import("../Pages/QuizOne.vue"),
      },
      {
        path: "/n/weight-loss/quiz/3",
        name: "quizThree",
        component: () => import("../Pages/QuizeThree.vue"),
      },
      {
        path: "/n/weight-loss/quiz/4",
        name: "quizFour",
        component: () => import("../Pages/QuizeFour.vue"),
      },
      {
        path: "/n/weight-loss/quiz/5",
        name: "quizFive",
        component: () => import("../Pages/FiveQuiz.vue"),
      },
      {
        path: "/n/weight-loss/quiz/6",
        name: "quizSix",
        component: () => import("../Pages/QuizeSix.vue"),
      },
      {
        path: "/n/weight-loss/quiz/7",
        name: "quizSeven",
        component: () => import("../Pages/QuizeSeven.vue"),
      },
      {
        path: "/n/weight-loss/quiz/8",
        name: "quizEight",
        component: () => import("../Pages/QuizeEight.vue"),
      },
      {
        path: "/n/weight-loss/quiz/9",
        name: "quizNine",
        component: () => import("../Pages/QuizNine.vue"),
      },
      {
        path: "/n/weight-loss/quiz/10",
        name: "quizTen",
        component: () => import("../Pages/QuizTen.vue"),
      },
      {
        path: "/n/weight-loss/quiz/11",
        name: "quiz11",
        component: () => import("../Pages/Quiz11.vue"),
      },
      {
        path: "/n/weight-loss/quiz/12",
        name: "quiz12",
        component: () => import("../Pages/Quiz12.vue"),
      },
      {
        path: "/n/weight-loss/quiz/13",
        name: "quiz13",
        component: () => import("../Pages/Quiz13.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
