<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-start items-start">
      <form
        @submit.prevent="submitData()"
        class="w-full px-2 sm:p-5 rounded-lg flex flex-col justify-start items-start mx-auto"
        :class="{
          'bg-red-100': pageErrorMarking,
          'bg-blue-50': selectedReasons.length > 0,
        }"
      >
        <div class="space-y-6 prose">
          <h3 class="after:content-['*'] after:text-red-600 after:pl-2">
            {{ currentQuestion.text }}
          </h3>
          <div
            v-for="reason in currentQuestion.reasons"
            :key="reason.id"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              :id="`reason-${reason.id}`"
              v-model="reason.selected"
              class="text-primary focus:ring-2 focus:ring-primary w-4 h-4 accent-gray-500/50 checked:text-white checked:bg-white checked:ring-1"
              @click="store.toggleCheckbox(reason)"
            />
            <label
              :for="`reason-${reason.id}`"
              class="text-base"
              @click="store.toggleCheckbox(reason)"
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
              id=""
              v-model="othersInfo"
              class="w-full px-4 py-2 rounded-md placeholder:text-blue-700 placeholder:font-semibold focus:outline-none border border-gray-100"
              placeholder="Please type another option here"
            />
            <p
              v-if="otherSelection && othersInfo.trim() === ''"
              class="bg-red-400 inline-block px-3 py-0.5 text-white rounded-lg"
            >
              <span
                class="w-5 h-5 text-gray-800 inline-flex justify-center items-center rounded-full bg-white"
                >!</span
              >
              This is field is required
            </p>
          </div>
          <globalForm />
        </div>
      </form>
    </div>
  </section>
</template>
  
  <script>
import { storeToRefs } from "pinia";
import {
  compoOperationInNext,
  validationError,
} from "../../scripts/functional_quiz/renderCompos";
import { usePrimaryMotives } from "../../store/stepOne";
import { ref } from "vue";

export default {
  name: "Step1",

  setup() {
    const store = usePrimaryMotives();
    const pageErrorMarking = ref(false);

    const {
      questions,
      selectedReasons,
      otherSelection,
      errorSign,
      currentQuestionIndex,
      toggleCheckbox,
      othersInfo,
    } = storeToRefs(usePrimaryMotives());

    const submitData = function () {
      console.log(selectedReasons.value.length, "len");
      if (selectedReasons.value.length === 0 || otherSelection.value === true) {
        pageErrorMarking.value = true;
        return;
      }
      compoOperationInNext();
    };

    return {
      currentQuestion: questions.value[currentQuestionIndex.value],
      toggleCheckbox,
      validationError,
      selectedReasons,
      otherSelection,
      errorSign,
      store,
      othersInfo,
      pageErrorMarking,
      submitData,
      compoOperationInNext,
    };
  },
};
</script>
  
  <style>
.focus\:ring-primary-dark:focus {
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5);
}
</style>
  