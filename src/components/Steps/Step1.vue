<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-start items-start">
        <div
          class="w-full px-2 sm:px-0  flex flex-col justify-start items-start mx-auto"
        >
          <div class="space-y-6 prose">
            <h3>{{ currentQuestion.text }}</h3>
            <div
              v-for="reason in currentQuestion.reasons"
              :key="reason.id"
              class="flex items-center space-x-2 cursor-pointer "
              
            >
              <input
                type="checkbox"
                :id="`reason-${reason.id}`"
                v-model="reason.selected"
                class="form-checkbox text-primary focus:ring-2 focus:ring-primary-dark w-5 h-5 accent-gray-200 checked:text-white"
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
           
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter, useRoute } from "vue-router";
  
  export default {
    name: "Step1",
    setup() {
      const routes = useRouter();
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
  
      
  
      return {
        currentQuestion: questions.value[currentQuestionIndex.value],
        isContinueButtonDisabled,
        toggleCheckbox,
        
      };
    },
  };
  </script>
  
  <style>
  
  .focus\:ring-primary-dark:focus {
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5); /* Customize the focus ring color */
  }
  </style>
  