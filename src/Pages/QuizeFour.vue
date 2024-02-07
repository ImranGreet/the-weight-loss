<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full px-2 sm:px-0 lg:w-1/2 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose">
          <h1>{{ selectedOption }}</h1>

          <div class="flex items-center space-x-2 cursor-pointer border p-4">
            <input
              type="radio"
              id="radioYes"
              v-model="selectedOption"
              value="yes"
              class="form-radio text-primary focus:ring-2 focus:ring-primary-dark"
            />
            <label for="radioYes" class="text-lg">Yes</label>
          </div>
          <div class="flex items-center space-x-2 cursor-pointer border p-4">
            <input
              type="radio"
              id="radioNo"
              v-model="selectedOption"
              value="no"
              class="form-radio text-primary focus:ring-2 focus:ring-primary-dark"
            />
            <label for="radioNo" class="text-lg">No</label>
          </div>
          <button
            @click="continueToNextStep()"
            class="bg-orange-700 w-full text-white py-2 px-4 rounded"
          >
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
  name: "GoalWeightQuestion",

  setup() {
    const selectedOption = ref(
      "Do you have a goal weight you would like to achieve?"
    );

    return {
      selectedOption,
    };
  },
};
</script>

<style>
.form-radio:checked {
  color: #60a5fa; /* Customize the color of the selected radio button */
}
.focus\:ring-primary-dark:focus {
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5); /* Customize the focus ring color */
}
</style>
