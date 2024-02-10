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
import { useRouter, useRoute } from "vue-router";

export default {
  name: "WeightLossQuestionnaire",
  setup() {
    const routes = useRouter();
    const questions = ref([
      {
        id: 1,
        text: "What are your main reasons for wanting to lose weight?",
        reasons: [
          { id: 1, text: "Improving my overall health", selected: ref(false) },
          {
            id: 2,
            text: "Avoiding or managing a specific health condition",
            selected: ref(false),
          },
          { id: 3, text: "Looking and feeling better", selected: ref(false) },
          { id: 4, text: "Becoming more active", selected: ref(false) },
          {
            id: 5,
            text: "Improving my mood or mental wellbeing",
            selected: ref(false),
          },
          {
            id: 6,
            text: "Improving my sleep or energy levels",
            selected: ref(false),
          },
          { id: 7, text: "Other", selected: ref(false) },
        ],
      },
      {
        id: 2,
        text: "How long have you struggled with your weight?",
        reasons: [
          { id: 8, text: "Last 12 months", selected: ref(false) },
          { id: 9, text: "Last 5 years", selected: ref(false) },
          { id: 10, text: "Last 10 years", selected: ref(false) },
          { id: 11, text: "Most of my life", selected: ref(false) },
          {
            id: 12,
            text: "I’ve never struggled with my weight",
            selected: ref(false),
          },
        ],
      },
      {
        id: 3,
        text: "What have you tried in the past to lose weight?",
        reasons: [
          {
            id: 13,
            text: "Exercise or being more active",
            selected: ref(false),
          },
          { id: 14, text: "Dieting", selected: ref(false) },
          { id: 15, text: "Calorie counting", selected: ref(false) },
          { id: 16, text: "Weight loss programs", selected: ref(false) },
          { id: 17, text: "Weight loss supplements", selected: ref(false) },
          {
            id: 18,
            text: "Meal replacements and shakes",
            selected: ref(false),
          },
          { id: 19, text: "Other", selected: ref(false) },
          {
            id: 20,
            text: "I haven't tried to lose weight",
            selected: ref(false),
          },
        ],
      },
      // Add more questions as needed
    ]);

    const currentQuestionIndex = ref(0);

    const toggleCheckbox = (reason) => {
      reason.selected = !reason.selected;
    };

    const continueToNextStep = () => {
      routes.push({ name: "quizNine" });
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
        routes.push({ name: "quizNine" });
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
