<template>
  <section class="w-full">
    <form
      @submit.prevent="submitData()"
      class="w-full h-full flex flex-col justify-center items-start"
    >
      <div
        class="w-full px-2 sm:px-0 flex flex-col justify-center items-start mx-auto rounded-md"
        :class="{ 'bg-red-200': toggleSelection }"
      >
        <div class="w-full prose max-w-none p-2">
          <h3>Have you set a target weight that you aim to reach?*</h3>

          <div class="w-full flex flex-col justify-between items-start">
            <div class="flex flex-col items-center w-full">
              <label
                class="flex items-center space-x-3 w-full p-2 cursor-pointer rounded-md"
              >
                <input
                  type="radio"
                  id="radioYes"
                  name="answer"
                  class="hidden"
                  @change="store.toggleSelected('yes')"
                />
                <span
                  class="w-6 h-6 rounded-full flex border border-gray-100 items-center justify-center"
                  :class="{
                    'bg-gray-300 border-2 border-blue-400': selected === 'yes',
                    'bg-white border-2 border-gray-800': selected === 'no',
                  }"
                >
                  <span
                    v-if="selected === true"
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
                  id="radioYes"
                  name="answer"
                  class="hidden"
                  @change="store.toggleSelected('no')"
                />
                <span
                  class="w-6 h-6 rounded-full border border-inherit flex items-center justify-center"
                  :class="{
                    'bg-gray-300 border-2 border-blue-400': selected === 'no',
                    'bg-white border-2 border-gray-800': selected === 'yes',
                  }"
                >
                  <span
                    v-if="selected === true"
                    class="inner-circle w-3 h-3 rounded-full bg-white"
                  ></span>
                </span>
                <span class="text-xl">No</span>
              </label>
            </div>
            <p
              v-if="toggleSelection"
              class="bg-red-400 inline-block px-3 py-0.5 text-white rounded-lg"
            >
              <span
                class="w-3 h-3 text-gray-800 inline-flex justify-center items-center rounded-full bg-white"
                >!</span
              >
              This is field is required
            </p>
               
          </div>
          <globalForm />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { computed, ref, watch } from "vue";
import { compoOperationInNext } from "../../scripts/functional_quiz/renderCompos";
import { useHeightWeightSet } from "../../store/stepTwo";
import { storeToRefs } from "pinia";

export default {
  name: "Step2",

  setup() {
    const store = useHeightWeightSet();
    const { selected } = storeToRefs(useHeightWeightSet());
    const toggleSelection = ref(false);

    watch(selected, () => {
      toggleSelection.value = false;
    });

    const submitData = function () {
      if (selected.value === null) {
        toggleSelection.value = true;
        return;
      }
      compoOperationInNext();
    };

    return {
      store,
      selected,
      submitData,
      compoOperationInNext,
      toggleSelection,
    };
  },
};
</script>
