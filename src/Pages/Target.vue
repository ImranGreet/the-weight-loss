<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full px-2 sm:px-0 lg:w-1/2 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose">
          <h1>{{ question }}</h1>
          <div class="flex flex-col items-start cursor-pointer p-4">
            <label for="height" class="text-lg sr-only">weight</label>
            <input
              type="number"
              class="w-full rounded-lg p-3 bg-inherit border focus:outline-none"
              placeholder="kgs"
              v-model="weight"
              @change="validateHeight"
            />
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
  name: "Target",
  setup() {
    const routes = useRouter();

    let question = "What is Your Target  weight?";

    let weight = ref("");

    //calculate BMI

    const naviagteToPage = function () {};

    return {
      naviagteToPage,
      weight,
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
