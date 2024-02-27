<template>
  <section>
    <p>{{ quizComps[renderCompo] }}</p>
    <component :is="quizComps[renderCompo]"></component>
  </section>
</template>

<script>
import Greeting from "../components/Steps/Greeting.vue";
import Requirments from "../components/Steps/Requirments.vue";
import StepOne from "../components/Steps/Step1.vue";
import StepTwo from "../components/Steps/PreviusQuizForm/HeightWeight.vue";
import StepThree from "../components/Steps/PreviusQuizForm/GoalWeightOption.vue";
import StepFour from "../components/Steps/PreviusQuizForm/Gola.vue";
import StepFive from "../components/Steps/PreviusQuizForm/BiologicalSex.vue";
import StepSix from "../components/Steps/Step6.vue";
import StepSeven from "../components/Steps/Step7.vue";
import StepEight from "../components/Steps/Step8.vue";
import StepNine from "../components/Steps/Step9.vue";
import StepTen from "../components/Steps/Step10.vue";
import StepEleven from "../components/Steps/Step11.vue";

/*steps*/
// import StepTwo from "../components/Steps/Step2.vue";
// import StepThree from "../components/Steps/Step3.vue";
// import StepFour from "../components/Steps/Step4.vue";
// import StepFive from "../components/Steps/Step5.vue";
/*script*/
import { renderCompo } from "../scripts/functional_quiz/renderCompos";

export default {
  name: "QuizAndAnswer",
  components: {
    Greeting,
    Requirments,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    StepSix,
    StepSeven,
    StepEight,
    StepNine,
    StepTen,
    StepEleven,
  },
  setup() {
    const quizComps = [
      "Greeting",
      "Requirments",
      "StepOne",
      "StepTwo",
      "StepThree",
      "StepFour",
      "StepFive",
      "StepSix",
      "StepSeven",
      "StepEight",
      "StepNine",
      "StepTen",
      "StepEleven",
    ];

    return {
      quizComps,
      renderCompo,
    };
  },
};
</script>

<style>
</style>