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
        path: "/greet",
        name: "greet",
        component: () => import("../Pages/Greet.vue"),
      },
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
        component: () => import("../Pages/Goal.vue"),
      },
      {
        path: "/n/weight-loss/quiz/6",
        name: "quizSix",
        component: () => import("../Pages/QuizeSix.vue"),
      },
      {
        path: "/n/weight-loss/quiz/7",
        name: "quizSeven",
        component: () => import("../Pages/Quize7.vue"),
      },
      {
        path: "/n/weight-loss/quiz/8",
        name: "quizEight",
        component: () => import("../Pages/Quize8.vue"),
      },
      {
        path: "/n/weight-loss/quiz/9",
        name: "quizNine",
        component: () => import("../Pages/Quize9.vue"),
      },
      {
        path: "/n/weight-loss/quiz/11",
        name: "quizEleven",
        component: () => import("../Pages/QuizEleven.vue"),
      },
      {
        path: "/n/weight-loss/quiz/10",
        name: "quizeTen",
        component: () => import("../Pages/Quiz10.vue"),
      },
      {
        path: "/n/weight-loss/quiz/12",
        name: "quiz12",
        component: () => import("../Pages/Quiz12.vue"),
      },
      {
        path: "/n/weight-loss/quiz/13",
        name: "quiz13",
        component: () => import("../Pages/QuizeThirteen.vue"),
      },
      {
        path: "/n/weight-loss/quiz/14",
        name: "quiz14",
        component: () => import("../Pages/QuizFourteen.vue"),
      },
      {
        path: "/n/weight-loss/quiz/15",
        name: "quiz15",
        component: () => import("../Pages/QuizFifteen.vue"),
      },
      {
        path: "/n/weight-loss/quiz/16",
        name: "quiz16",
        component: () => import("../Pages/Quiz16.vue"),
      },
      {
        path: "/n/weight-loss/quiz/17",
        name: "quiz17",
        component: () => import("../Pages/QuizSeventeen.vue"),
      },
      {
        path: "/n/weight-loss/quiz/18",
        name: "quiz18",
        component: () => import("../Pages/QuizeEighteen.vue"),
      },
      {
        path: "/n/weight-loss/quiz/19",
        name: "quiz19",
        component: () => import("../Pages/QuizeNinteen.vue"),
      },
      {
        path: "/n/weight-loss/quiz/20",
        name: "quiz20",
        component: () => import("../Pages/QuizeTwenty.vue"),
      },
      {
        path: "/n/weight-loss/quiz/21",
        name: "quiz21",
        component: () => import("../Pages/QuizeTwentyOne.vue"),
      },
      {
        path: "/n/weight-loss/quiz/22",
        name: "quiz22",
        component: () => import("../Pages/Quiz22.vue"),
      },
      {
        path: "/n/weight-loss/quiz/23",
        name: "quiz23",
        component: () => import("../Pages/Quiz23.vue"),
      },

      {
        path: "/n/weight-loss/assesment",
        name: "assesment",
        component: () => import("../Pages/Assesment.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
