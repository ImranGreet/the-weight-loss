<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full px-2 sm:px-0 lg:w-1/2 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose w-full">
          <h1>Do you have a goal weight you would like to achieve?</h1>

          <div
            class="flex items-center space-x-2 cursor-pointer border p-4 w-full rounded-xl"
            @click="toggleRadio('yes')"
            :class="{ 'border-blue-500': selectedOption === 'yes' }"
          >
            <div
              :class="['checkmark', { checked: selectedOption === 'yes' }]"
            ></div>
            <label for="radioYes" class="text-lg">Yes</label>
          </div>

          <div
            class="flex items-center space-x-2 cursor-pointer border p-4 rounded-xl"
            @click="toggleRadio('no')"
            :class="{ 'border-blue-500': selectedOption === 'no' }"
          >
            <div
              :class="['checkmark', { checked: selectedOption === 'no' }]"
            ></div>
            <label for="radioNo" class="text-lg">No</label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toggleRecommned } from "../scripts/Recommnded";

export default {
  name: "GoalWeightQuestion",

  setup() {
    const routes = useRouter();
    const selectedOption = ref("");

    const naviagteToPage = function () {
      console.log(selectedOption.value, "select");
      if (selectedOption.value === "yes") {
        routes.push({ name: "quizFive" });
      } else {
        routes.push({ name: "quizSix" });
      }
    };

    const toggleRadio = (value) => {
      selectedOption.value = value;
      // Automatically navigate when an option is selected
      naviagteToPage();
    };

    return {
      selectedOption,
      toggleRadio,
      toggleRecommned,
    };
  },
};
</script>
