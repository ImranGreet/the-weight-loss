<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full px-2 sm:px-0 lg:w-1/2 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose">
          <h1>Are you pregnant, breastfeeding, or trying to conceive?</h1>

          <div
            class="flex items-center space-x-2 cursor-pointer border p-4 w-full rounded-xl"
            @click="toggleRadio('yes')"
          >
            <div
              :class="['checkmark', { checked: selectedOption === 'yes' }]"
            ></div>
            <label for="radioYes" class="text-lg">Yes</label>
          </div>

          <div
            class="flex items-center space-x-2 cursor-pointer border p-4 rounded-xl"
            @click="toggleRadio('no')"
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

export default {
  name: "GoalWeightQuestion",

  setup() {
    const selectedOption = ref(
      "Are you pregnant, breastfeeding, or trying to conceive?"
    );

    const toggleRadio = (value) => {
      selectedOption.value = value;
    };

    return {
      selectedOption,
      toggleRadio,
    };
  },
};
</script>

<style>
.checkmark {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #f76d57; /* Orange border color */
}

.checkmark.checked {
  background-color: #f76d57; /* Orange background color when checked */
}

.radio-button {
  width: 100%;
  text-align: center;
}
</style>
