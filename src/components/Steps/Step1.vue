<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-start items-start">
      <div
        class="w-full px-2 sm:p-5 rounded-lg flex flex-col justify-start items-start mx-auto"
      >
        <form class="space-y-6 prose">
          <h3>{{ currentQuestion.text }}</h3>
          <div
            v-for="reason in currentQuestion.reasons"
            :key="reason.id"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              :id="`reason-${reason.id}`"
              v-model="reason.selected"
              class="text-primary focus:ring-2 focus:ring-primary w-5 h-5 accent-gray-500/50 checked:text-white checked:bg-white checked:ring-1"
              @click="toggleCheckbox(reason)"
            />
            <label
              :for="`reason-${reason.id}`"
              class="text-lg"
              @click="toggleCheckbox(reason)"
            >
              {{ reason.text }}
            </label>
          </div>
          <div
            :class="{
              hidden: !otherSelection,
              block: otherSelection,
            }"
          >
            <input
              type="text"
              name=""
              id=""
              class="w-full px-4 py-2 rounded-md placeholder:text-blue-700 placeholder:font-semibold focus:outline-none border border-gray-100"
              placeholder="Please type another option here"
            />
            <p class="text-red-500"><span></span></p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
  
  <script>
import { computed, ref, watch } from "vue";

import { validationError } from "../../scripts/functional_quiz/renderCompos";

export default {
  name: "Step1",
  setup() {
    const questions = ref([
      {
        id: 1,
        text: "What are the primary motivations behind your desire to shed excess weight?",
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
          { id: 7, text: "other", selected: ref(false) },
        ],
      },
    ]);

    const currentQuestionIndex = ref(0);
    const selectedReasons = ref([]);
    const otherSelection = ref(false);
    let errorSign = ref(false);

    const toggleCheckbox = (reason) => {
      reason.selected = !reason.selected;

      if (!selectedReasons.value.includes(reason.text)) {
        selectedReasons.value.push(reason.text);
      } else if (selectedReasons.value.includes(reason.text)) {
        selectedReasons.value = selectedReasons.value.filter(
          (item) => item !== reason.text
        );
      }
      if (selectedReasons.value.includes("other")) {
        otherSelection.value = true;
      } else {
        otherSelection.value = false;
      }
    };

    return {
      currentQuestion: questions.value[currentQuestionIndex.value],
      toggleCheckbox,
      validationError,
      selectedReasons,
      otherSelection,
      errorSign,
    };
  },
};
</script>
  
  <style>
.focus\:ring-primary-dark:focus {
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5);
}
</style>
  