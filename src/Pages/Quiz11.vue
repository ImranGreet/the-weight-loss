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
      {
        id: 2,
        text: "What challenges have you faced when changing your eating habits?",
        reasons: [
          { id: 8, text: "I get hungry", selected: ref(false) },
          { id: 9, text: "I get cravings", selected: ref(false) },
          { id: 10, text: "I snack a lot", selected: ref(false) },
          {
            id: 11,
            text: "I eat too much when I’m stressed",
            selected: ref(false),
          },
          {
            id: 12,
            text: "I swing between being disciplined and binge eating",
            selected: ref(false),
          },
          {
            id: 13,
            text: "I’m not sure what I should be eating",
            selected: ref(false),
          },
          { id: 14, text: "Other", selected: ref(false) },
        ],
      },
      // Add more questions as needed
    ]);

    const currentQuestionIndex = ref(1); // Change the initial question index if needed

    const toggleCheckbox = (reason) => {
      reason.selected = !reason.selected;
    };

    const continueToNextStep = () => {
      const selectedReasons = questions.value[
        currentQuestionIndex.value
      ].reasons.filter((reason) => reason.selected);
      console.log("Selected Reasons:", selectedReasons);

      // Add logic to handle navigation to the next question or submit the form

      // Move to the next question
      if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
      } else {
        // If it's the last question, navigate to the next route
        routes.push({ name: "quizThree" });
      }
    };

    return {
      currentQuestion: questions.value[currentQuestionIndex.value],
      continueToNextStep,
      toggleCheckbox,
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
