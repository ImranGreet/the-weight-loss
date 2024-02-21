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
         <h3>If 'no' please list any other allergies you have or write 'none'</h3>
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
    name: "StepEleven",
    setup() {
      const routes = useRouter();
      const questions = ref([
        {
          id: 1,
          text: "Are you allergic to any of the following?",
          reasons: [
            { id: 1, text: "GLP-1 Medication including Rybelsus ,Saxenda,Ozempic,Trulicity or Victoza", selected: ref(false) },
            {
              id: 2,
              text: "Salcaprozate sodium",
              selected: ref(false),
            },
            { id: 3, text: "Povidone K90", selected: ref(false) },
            { id: 4, text: "Cellulose,microcrystalline", selected: ref(false) },
            {
              id: 5,
              text: "Magnesium stearate",
              selected: ref(false),
            },
            {
              id: 6,
              text: "No",
              selected: ref(false),
            },
           
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