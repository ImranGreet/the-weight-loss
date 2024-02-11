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
              class="w-full rounded-lg p-3 bg-inherit border focus:outline-none"
              placeholder="cms"
              v-model="height"
              @change="validateHeight"
            />
            <p v-if="heightError" class="text-red-500">{{ heightError }}</p>
          </div>
          <div class="flex flex-col items-start cursor-pointer p-4">
            <label for="weight" class="text-lg">Weight</label>
            <input
              type="number"
              class="w-full p-3 rounded-lg bg-inherit border focus:outline-none"
              placeholder="kgs"
              v-model="weight"
              @change="validateWeight"
            />
            <p v-if="weightError" class="text-red-500">{{ weightError }}</p>
          </div>
          <button
            @click="naviagteToPage"
            :disabled="hasErrors"
            class="bg-orange-700 w-full text-white py-2 px-4 rounded"
            :class="{ 'cursor-not-allowed': hasErrors }"
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
import { useRouter } from "vue-router";

export default {
  name: "WeightLossQuestionnaire",
  setup() {
    const routes = useRouter();

    let question = "What is your height and weight?";
    let height = ref("");
    let weight = ref("");
    let heightError = ref("");
    let weightError = ref("");
    let hasErrors = ref(false);

    let validateHeight = function () {
      let parsedHeight = parseFloat(height.value);
      if (isNaN(parsedHeight) || parsedHeight < 90 || parsedHeight > 230) {
        heightError.value = "This doesn't look right, enter your height in cm.";
      } else {
        heightError.value = "";
      }

      hasErrors.value = Boolean(heightError.value || weightError.value);
    };

    let validateWeight = function () {
      let parsedWeight = parseFloat(weight.value);
      if (isNaN(parsedWeight) || parsedWeight < 22 || parsedWeight > 444) {
        weightError.value = "This doesn't look right, enter your weight in kg.";
      } else {
        weightError.value = "";
      }

      hasErrors.value = Boolean(heightError.value || weightError.value);
    };

    let isAllowedToAdmin = function () {
      validateHeight();
      validateWeight();

      hasErrors.value = Boolean(heightError.value || weightError.value);

      if (!hasErrors.value) {
        alert("All inputs are valid. Proceeding...");
        return true;
      }

      return false;
    };

    const naviagteToPage = function () {
      if (isAllowedToAdmin()) {
      }
    };

    return {
      question,
      naviagteToPage,
      height,
      weight,
      heightError,
      weightError,
      hasErrors,
      validateHeight,
      validateWeight,
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
