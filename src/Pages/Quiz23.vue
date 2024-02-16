<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full px-2 sm:px-0 lg:w-1/2 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose">
          <h1>{{ currentQuestion.text }}</h1>
          <div
            v-for="reason in currentQuestion.reasons"
            :key="reason.id"
            class="flex items-center space-x-2 cursor-pointer border p-4 rounded-lg"
            @click="toggleCheckbox(reason)"
          >
            <input
              type="checkbox"
              :id="`reason-${reason.id}`"
              v-model="reason.selected"
              class="form-checkbox text-primary focus:ring-2 focus:ring-primary-dark w-5 h-5 accent-orange-500"
            />
            <label
              :for="`reason-${reason.id}`"
              class="text-lg"
              @click="toggleCheckbox(reason)"
            >
              {{ reason.text }}
            </label>
          </div>
          <button
            @click="continueToNextStep"
            class="bg-orange-700 w-full text-white py-2 px-4 rounded"
            :disabled="!anyReasonSelected"
            :class="{ 'cursor-not-allowed': !anyReasonSelected }"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "WeightLossQuestionnaire",
  setup() {
    const routes = useRouter();
    const questions = ref([
      {
        id: 1,
        text: "When considering treatment options, which of the following are important to you?",
        reasons: [
          {
            id: 1,
            text: "I want to minimise the risk of common side effects, e.g., nausea",
            selected: ref(false),
          },
          {
            id: 2,
            text: "I want to maximise my results",
            selected: ref(false),
          },
          {
            id: 3,
            text: "I want an easy and convenient option",
            selected: ref(false),
          },
          {
            id: 4,
            text: "I want something that helps me stay consistent",
            selected: ref(false),
          },
          { id: 5, text: "None of the above", selected: ref(false) },
        ],
      },
    ]);

    const currentQuestionIndex = ref(0);

    const toggleCheckbox = (reason) => {
      reason.selected = !reason.selected;
    };

    const continueToNextStep = () => {
      routes.push({ name: "agree" });
      if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
      }
    };

    const anyReasonSelected = computed(() => {
      return questions.value[currentQuestionIndex.value].reasons.some(
        (reason) => reason.selected
      );
    });

    return {
      currentQuestion: questions.value[currentQuestionIndex.value],
      continueToNextStep,
      toggleCheckbox,
      anyReasonSelected,
    };
  },
};
</script>

<style>
.form-checkbox:checked {
  color: #f76d57; /* Customize the color of the checkmark when checked */
}
.focus\:ring-primary-dark:focus {
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5); /* Customize the focus ring color */
}
</style>
