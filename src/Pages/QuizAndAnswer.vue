<template>
  <section>
    <Greeting />
    <!-- <Requirments/> -->
    <!-- <StepOne/> -->
    <!-- <StepTwo/> -->
    <!-- <StepThree/> -->
    <!-- <StepFour/> -->
    <!-- <StepFive/> -->
    <!-- <StepSix/> -->
    <!-- <StepSeven/> -->
    <!-- <StepEight/> -->
    <!-- <StepNine/> -->
    <!-- <StepTen/> -->
    <!-- <StepEleven/> -->
  </section>
</template>

<script>
import Greeting from "../components/Steps/Greeting.vue";
import Requirments from "../components/Steps/Requirments.vue";
import StepOne from "../components/Steps/Step1.vue";
import StepTwo from "../components/Steps/Step2.vue";
// import StepThree from "../components/Steps/step3.vue";
import StepFour from "../components/Steps/Step4.vue";
import StepFive from "../components/Steps/Step5.vue";
import StepSix from "../components/Steps/Step6.vue";
import StepSeven from "../components/Steps/Step7.vue";
import StepEight from "../components/Steps/Step8.vue";
import StepNine from "../components/Steps/Step9.vue";
import StepTen from "../components/Steps/Step10.vue";
import StepEleven from "../components/Steps/Step11.vue";

export default {
  name: "QuizAndAnswer",
  components: {
    Greeting,
    Requirments,
    StepOne,
    StepTwo,
    StepFour,
    StepFive,
    StepSix,
    StepSeven,
    StepEight,
    StepNine,
    StepTen,
    StepEleven,
  },
};
</script>

<style>
</style>Ste