<template>
    <section class="w-full space-y-16">
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
        <div class="prose max-w-none w-full">
         <h3>What are your main challenges when it comes to losing weight?</h3>
         <div class="w-full">
            <label for="answer" class="sr-only"></label>
            <textarea class=" border w-full rounded-md"></textarea>
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
          text: "What methods or approaches have you previously tried in your attempts to lose weight?",
          reasons: [
            { id: 1, text: "Exercising", selected: ref(false) },
            {
              id: 2,
              text: "Dieting",
              selected: ref(false),
            },
            { id: 3, text: "Calorie counting", selected: ref(false) },
            { id: 4, text: "Weight loss programmes", selected: ref(false) },
            {
              id: 5,
              text: "Weight loss medications",
              selected: ref(false),
            },
            {
              id: 6,
              text: "I haven't tried to lose weight",
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