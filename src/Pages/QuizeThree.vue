<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full px-2 sm:px-0 lg:w-1/2 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose">
          <h1>{{ question }}</h1>
          <div class="flex flex-col items-start cursor-pointer p-4">
            <label for="height" class="text-lg">Height</label>
            <input
              type="number"
              class="w-full rounded-lg p-3 bg-inherit"
              placeholder="cm"
            />
          </div>
          <div class="flex flex-col items-start cursor-pointer p-4">
            <label for="height" class="text-lg">Height</label>
            <input
              type="number"
              class="w-full p-3 rounded-lg bg-inherit"
              placeholder="kg"
            />
          </div>
          <button class="bg-orange-700 w-full text-white py-2 px-4 rounded">
            Continue
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "WeightLossQuestionnaire",
  setup() {
    let question = "What is your height and weight?s";
    return {
      question,
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
