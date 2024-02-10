<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full px-2 sm:px-0 lg:w-1/3 mx-auto">
        <div class="space-y-2 prose">
          <h1>What is your biological sex?</h1>
          <div class="px-3 space-y-6">
            <label
              class="flex items-center space-x-2 shadow border border-gray-400 p-2 cursor-pointer rounded-md"
              @click="toggleSelected()"
            >
              <input
                @input="toggleSelected()"
                type="radio"
                id="radioYes"
                name="biologicalSex"
                class="hidden"
              />
              <span
                class="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
                :class="{ 'bg-white border-4 border-orange-500': !selected }"
              >
                <!-- The space in the center, orange in the border -->
              </span>
              <span class="text-xl">Male</span>
            </label>
            <label
              class="flex items-center space-x-2 shadow border border-gray-400 p-2 cursor-pointer rounded-md"
              @click="toggleSelected()"
            >
              <input
                @input="toggleSelected()"
                type="radio"
                id="radioNo"
                name="biologicalSex"
                class="hidden"
              />
              <span
                class="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
                :class="{ 'bg-white border-4 border-orange-500': selected }"
              >
                <!-- The space in the center, orange in the border -->
              </span>
              <span class="text-xl">Female</span>
            </label>
            <button
              @click="naviagteToPage()"
              class="bg-orange-700 w-full py-2 px-4 rounded"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "QuizSix",
  setup() {
    const selected = ref(false);

    const toggleSelected = () => {
      selected.value = !selected.value;
    };

    const naviagteToPage = function () {};

    return {
      selected,
      toggleSelected,
    };
  },
};
</script>

<style>
</style>
