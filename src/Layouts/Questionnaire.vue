<template>
  <section
    class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-fuchsia-500 to-indigo-500"
  >
    <div
      class="container xl:w-2/5 bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700"
    >
      <div class="bg-gray-400 h-2.5 rounded-r-lg" style="width: 50%"></div>
    </div>
    <div
      class="container px-5 xl:px-8 py-5 xl:w-2/5 flex flex-col justify-between gap-y-4 bg-white rounded-lg"
    >
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import {
  compoOperationInBack,
  compoOperationInNext,
  renderCompo,
} from "../scripts/functional_quiz/renderCompos";

export default {
  name: "Questionnaire",
  setup() {
    const renderNextCompo = function () {
      compoOperationInNext();
    };
    return {
      compoOperationInBack,
      compoOperationInNext,
      renderCompo,
      renderNextCompo,
    };
  },
};
</script>

<style>
</style>