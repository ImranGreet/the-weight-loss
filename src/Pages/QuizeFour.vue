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

          <button
            class="p-4 rounded-lg"
            @click="naviagteToPage()"
            :class="[
              'radio-button',
              {
                'bg-orange-700': selectedOption !== '',
                'bg-gray-400': selectedOption === '',
              },
            ]"
            :disabled="selectedOption === ''"
          >
            Continue
          </button>
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
        toggleRecommned();
      }
    };

    const toggleRadio = (value) => {
      selectedOption.value = value;
    };

    return {
      selectedOption,
      naviagteToPage,
      toggleRadio,
      toggleRecommned,
    };
  },
};
</script>

<style>
.checkmark {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
}

.checkmark.checked {
  background-color: #60a5fa;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path fill="%23ffffff" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  border: 2px solid #60a5fa; /* Add border color for the selected state */
}

.radio-button {
  width: 100%;
  text-align: center;
  color: #fff;
  cursor: pointer;
}

.radio-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
