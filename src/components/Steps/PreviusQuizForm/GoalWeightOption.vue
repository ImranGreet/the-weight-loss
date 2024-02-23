<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <form
        @submit.prevent="submitData()"
        class="w-full px-2 sm:px-0 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose max-w-none w-full">
          <h3 class="after-content">
            Do you have a goal weight you would like to achieve?
          </h3>

          <div class="flex flex-col items-center w-full">
            <label
              class="flex items-center space-x-3 w-full p-2 cursor-pointer rounded-md"
            >
              <input
                type="radio"
                class="hidden"
                @change="store.toggleRadio('yes')"
              />
              <span
                class="w-6 h-6 rounded-full border border-inherit flex items-center justify-center"
                :class="{
                  'bg-gray-300 border-2 border-blue-400':
                    selectedOption === 'no',
                  'bg-white border-2 border-gray-800': selectedOption === 'yes',
                }"
              >
                <span
                  v-if="selectedOption === true"
                  class="inner-circle w-3 h-3 rounded-full bg-white"
                ></span>
              </span>
              <span class="text-xl">Yes</span>
            </label>
          </div>

          <div class="flex flex-col items-center w-full">
            <label
              class="flex items-center space-x-3 w-full p-2 cursor-pointer rounded-md"
            >
              <input
                type="radio"
                class="hidden"
                @change="store.toggleRadio('no')"
              />
              <span
                class="w-6 h-6 rounded-full border border-inherit flex items-center justify-center"
                :class="{
                  'bg-gray-300 border-2 border-blue-400':
                    selectedOption === 'no',
                  'bg-white border-2 border-gray-800': selectedOption === 'yes',
                }"
              >
                <span
                  v-if="selectedOption === true"
                  class="inner-circle w-3 h-3 rounded-full bg-white"
                ></span>
              </span>
              <span class="text-xl">No</span>
            </label>
          </div>
        </div>
        <globalForm />
      </form>
    </div>
  </section>
</template>

<script>
import { ref ,watch} from "vue";
import { compoOperationInNext } from "../../../scripts/functional_quiz/renderCompos";
import { useGoalWeight } from "../../../store/stepFour";

export default {
  name: "GoalWeightQuestion",

  setup() {
    const store = useGoalWeight();
    const { selectedOption } = useGoalWeight();
    const toggleSelection = ref(false);

    watch(selectedOption, () => {
      toggleSelection.value = false;
    });

    const submitData = function () {
      compoOperationInNext();
    };
    return {
      selectedOption,
      submitData,
      store,
    };
  },
};
</script>
