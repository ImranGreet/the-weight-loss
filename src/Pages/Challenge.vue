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
            @click="continueToNextStep()"
            class="bg-orange-700 w-full text-white py-2 px-4 rounded"
            :class="{ 'cursor-not-allowed': isContinueButtonDisabled }"
            :disabled="isContinueButtonDisabled"
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
    const questions = ref([
      {
        id: 1,
        text: "What challenges have you faced with exercise or trying to be more active?",
        reasons: [
          { id: 1, text: "I do not have enough time", selected: ref(false) },
          { id: 2, text: "I lose motivation", selected: ref(false) },
          {
            id: 3,
            text: "Injury / illness makes it difficult",
            selected: ref(false),
          },
          { id: 4, text: "I do not find it enjoyable", selected: ref(false) },
          {
            id: 5,
            text: "I feel uncomfortable exercising in front of others",
            selected: ref(false),
          },
          {
            id: 6,
            text: "I haven’t tried to be more active",
            selected: ref(false),
          },
          { id: 7, text: "Other", selected: ref(false) },
        ],
      },
    ]);

    const currentQuestionIndex = ref(0);
    const isContinueButtonDisabled = ref(true);

    const toggleCheckbox = (reason) => {
      reason.selected = !reason.selected;
      updateContinueButtonState();
    };

    const updateContinueButtonState = () => {
      isContinueButtonDisabled.value = questions.value[
        currentQuestionIndex.value
      ].reasons.every((reason) => !reason.selected);
    };

    const continueToNextStep = () => {
      const selectedReasons = questions.value[
        currentQuestionIndex.value
      ].reasons.filter((reason) => reason.selected);
      console.log("Selected Reasons:", selectedReasons);

      if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;

        isContinueButtonDisabled.value = true;
      } else {
        routes.push({ name: "quizThree" });
      }
    };

    return {
      currentQuestion: questions.value[currentQuestionIndex.value],
      isContinueButtonDisabled,
      toggleCheckbox,
      continueToNextStep,
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
