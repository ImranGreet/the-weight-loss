<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full px-2 sm:px-0 lg:w-1/2 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose">
          <h1>{{ currentQuestion.text }}</h1>
          <div
            v-for="option in currentQuestion.options"
            :key="option.id"
            class="flex items-center space-x-2 cursor-pointer border-2 p-4 rounded-lg border-gray-700"
            @click="selectOption(option)"
          >
            <span
              :class="['radio-button', { checked: option.selected }]"
            ></span>
            <label
              :for="`option-${option.id}`"
              class="text-lg"
              @click="selectOption(option)"
            >
              {{ option.text }}
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
        text: "How long have you struggled with your weight?",
        options: [
          { id: 1, text: "Last 12 months", selected: ref(false) },
          { id: 2, text: "Last 5 years", selected: ref(false) },
          { id: 3, text: "Last 10 years", selected: ref(false) },
          { id: 4, text: "Most of my life", selected: ref(false) },
          {
            id: 5,
            text: "I’ve never struggled with my weight",
            selected: ref(false),
          },
        ],
      },
      // Add more questions as needed
    ]);

    const currentQuestionIndex = ref(0);

    const selectOption = (selectedOption) => {
      questions.value[currentQuestionIndex.value].options.forEach(
        (option) => (option.selected = option === selectedOption)
      );
    };

    const continueToNextStep = () => {
      // Add logic to handle navigation to the next question or submit the form

      // Move to the next question
      if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
      }
      routes.push({ name: "quizEight" });
    };

    return {
      currentQuestion: questions.value[currentQuestionIndex.value],
      continueToNextStep,
      selectOption,
    };
  },
};
</script>

<style>
.radio-button {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, border-width 0.3s, border-color 0.3s;
}

.radio-button.checked {
  background-color: #fff;
  border-width: 5px;
  border-color: #f76d57;
}
</style>
