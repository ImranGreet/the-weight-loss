<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <form
        @submit.prevent="submitData()"
        class="w-full px-2 sm:px-0 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose">
          <h1>{{ currentQuestion.text }}</h1>
          <div
            v-for="option in currentQuestion.options"
            :key="option.id"
            class="flex items-center space-x-2 cursor-pointer p-4 rounded-lg"
            :class="{
              'border-orange-500': option.selected,
              'bg-white': !option.selected,
            }"
            @click="toggleOption(option)"
          >
            <input
              type="radio"
              :id="`option-${option.id}`"
              :name="`question-${currentQuestion.id}`"
              v-model="selectedOption"
              :value="option.id"
              class="bg-red-599 w-5 h-5"
            />
            <label :for="`option-${option.id}`" class="text-lg">
              {{ option.text }}
            </label>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { compoOperationInNext } from "../../../scripts/functional_quiz/renderCompos";

export default {
  name: "QuizeNine",
  setup() {
    const routes = useRouter();
    const questions = ref([
      {
        id: 1,
        text: "How long have you struggled with your weight?",
        options: [
          { id: 1, text: "Last 12 months" },
          { id: 2, text: "Last 5 years" },
          { id: 3, text: "Last 10 years" },
          { id: 4, text: "Most of my life" },
          {
            id: 5,
            text: "I’ve never struggled with my weight",
          },
        ],
        selectedOption: null,
      },
    ]);

    const currentQuestionIndex = ref(0);

    const toggleOption = (option) => {
      questions.value[currentQuestionIndex.value].selectedOption = option.id;
      continueToNextStep();
    };

    const continueToNextStep = () => {
      const selectedOptionId =
        questions.value[currentQuestionIndex.value].selectedOption;

      if (selectedOptionId !== null) {
        routes.push({ name: "quizeTen" });
      } else {
        console.error("Please select an option before continuing.");
      }
    };

    onMounted(() => {
      questions.value[currentQuestionIndex.value].selectedOption =
        questions.value[currentQuestionIndex.value].options[0].id;
    });

    const submitData = function () {
      compoOperationInNext();
    };

    return {
      currentQuestion: questions.value[currentQuestionIndex.value],
      toggleOption,
      submitData,
    };
  },
};
</script>

<style>
/* Your existing styles */

/* Add these styles for the selected and unselected states */
.prose .cursor-pointer {
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.prose .cursor-pointer:hover {
  background-color: #f0f0f0; /* Change to the desired hover background color */
}

.prose .cursor-pointer input[type="radio"]:checked + label {
  background-color: #fff;
  border-color: #f36c3d; /* Change to the desired selected border color */
  color: #f36c3d; /* Change to the desired selected text color */
}
</style>
