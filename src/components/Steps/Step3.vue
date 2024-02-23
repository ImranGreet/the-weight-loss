<template>
  <section class="w-full">
    <form
      @submit.prevent="submitData()"
      class="w-full h-full flex flex-col justify-start items-start"
    >
      <div
        class="w-full px-2 sm:px-0 flex flex-col justify-start items-start mx-auto"
      >
        <div class="space-y-3 prose">
          <h3>{{ question }}</h3>
          <div class="flex flex-col items-start cursor-pointer p-4">
            <label for="weight" class="text-lg w-full"
              >What is your goal weight?</label
            >
            <input
              type="number"
              class="w-full p-2 rounded-lg bg-inherit border focus:outline-none"
              placeholder="Kg"
              v-model="goalWeight"
            />
          </div>
        </div>
      </div>
      <globalForm />
    </form>
  </section>
</template>
  
  <script>
import { ref, onMounted } from "vue";
import { compoOperationInNext } from "../../scripts/functional_quiz/renderCompos";

export default {
  name: "StepThree",
  setup() {
    let question = "What is your goal weight?";
    let goalWeight = ref("");
    let goalWeightError = ref("");
    let switchToStone = ref(false);
    let hasErrors = ref(false);

    const submitData = function () {
      compoOperationInNext();
    };
    return {
      question,
      goalWeight,
      goalWeightError,
      switchToStone,
      hasErrors,
      submitData,
    };
  },
};
</script>
  
  <style>
.form-checkbox:checked {
  color: #60a5fa; /* Customize the color of the selected checkbox */
}
.focus\:ring-primary-dark:focus {
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5); /* Customize the focus ring color */
}
</style>
  