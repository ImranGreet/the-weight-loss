<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full px-2 sm:px-0 lg:w-1/2 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose">
          <h1>{{ question }}</h1>
          <div class="flex flex-col items-start cursor-pointer p-4">
            <label for="weight" class="text-lg"
              >What is your goal weight?</label
            >
            <input
              type="number"
              class="w-full p-3 rounded-lg bg-inherit border focus:outline-none"
              placeholder="Kg"
              v-model="goalWeight"
              @input="validateGoalWeight"
            />
            <p v-if="goalWeightError" class="text-red-500">
              {{ goalWeightError }}
            </p>
          </div>

          <button
            @click="navigateToPage"
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "WeightLossQuestionnaire",
  setup() {
    const routes = useRouter();

    let question = "What is your goal weight?";
    let goalWeight = ref("");
    let goalWeightError = ref("");
    let switchToStone = ref(false);
    let hasErrors = ref(false);

    // Initial validation on component mount
    const mounted = ref(false);
    onMounted(() => {
      mounted.value = true;
      validateGoalWeight();
    });

    // Modify validateGoalWeight to update hasErrors and goalWeightError immediately
    let validateGoalWeight = function () {
      let parsedGoalWeight = parseFloat(goalWeight.value);
      if (
        isNaN(parsedGoalWeight) ||
        parsedGoalWeight < 0 ||
        parsedGoalWeight > 444
      ) {
        goalWeightError.value =
          "This doesn't look right, enter your goal weight in kg.";
      } else {
        goalWeightError.value = "";
      }

      hasErrors.value = Boolean(goalWeightError.value);

      // If component is mounted, trigger reactivity
      if (mounted.value) {
        goalWeightError.value = goalWeightError.value;
        hasErrors.value = hasErrors.value;
      }
    };

    let isAllowedToAdmin = function () {
      validateGoalWeight();

      if (!hasErrors.value) {
        return true;
      }

      return false;
    };

    const navigateToPage = function () {
      if (isAllowedToAdmin()) {
        routes.push({ name: "quizSix" });
      }
    };

    return {
      question,
      navigateToPage,
      goalWeight,
      goalWeightError,
      switchToStone,
      hasErrors,
      validateGoalWeight,
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
