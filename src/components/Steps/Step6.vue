<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-start">
        <div
          class="w-full px-2 sm:px-0  flex flex-col justify-center items-start mx-auto"
        >
          <div class="space-y-6 prose">
            <h3>{{ currentQuestion.text }}</h3>
            <div
              v-for="reason in currentQuestion.reasons"
              :key="reason.id"
              class="flex items-center space-x-2 cursor-pointer "
              :class="{ 'border-orange-500': reason.selected }"
              @click="toggleCheckbox(reason)"
            >
              <input
                type="checkbox"
                :id="`reason-${reason.id}`"
                v-model="reason.selected"
                class="form-checkbox text-primary focus:ring-2 focus:ring-primary-dark w-5 h-5 accent-gray-500"
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
  import { useRouter } from "vue-router";
  
  export default {
    name: "StepSix",
    setup() {
      const routes = useRouter();
      const questions = ref([
        {
          id: 1,
          text: "Do you suffer from any of the following",
          reasons: [
            { id: 1, text: "Liver,Kidney or heart failure", selected: ref(false) },
            {
              id: 2,
              text: "Multiple endocrine neoplasia type 2",
              selected: ref(false),
            },
            { id: 3, text: "Type 1 diabetes or diabetic retinopathy", selected: ref(false) },
            {
              id: 4,
              text: "Type 2 Diabetes on any injectable medication or insulin",
              selected: ref(false),
            },
            { id: 5, text: "Pancreatis", selected: ref(false) },
            { id: 6, text: "History of cancer", selected: ref(false) },
            {
              id: 7,
              text: "A current eating disorder or a history of an eating disorder? (e.g., anorexia, bulimia, binge eating disorder)",
              selected: ref(false),
            },
            { id: 8, text: "Personal or family of medullary thyroid cancer", selected: ref(false) },
            {
              id: 9,
              text: "History of inflmmatory bowel disease or gastroparesis",
              selected: ref(false),
            },
            { id: 10, text: "Galstones", selected: ref(false) },
            {
              id: 11,
              text: "None",
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
  
      const continueToNextStep = () => {
        const selectedReasons = questions.value[
          currentQuestionIndex.value
        ].reasons.filter((reason) => reason.selected);
        console.log("Selected Reasons:", selectedReasons);
  
        if (currentQuestionIndex.value < questions.value.length - 1) {
          currentQuestionIndex.value++;
  
          isContinueButtonDisabled.value = true;
        } else {
          routes.push({ name: "quiz14" });
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
  