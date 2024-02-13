<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full px-2 sm:px-0 lg:w-1/3 mx-auto">
        <div class="space-y-2 prose">
          <h1>Have you been diagnosed with any of these medical conditions?</h1>
          <div class="px-3">
            <ol class="list-disc">
              <li>Type 2 diabetes</li>
              <li>High blood pressure</li>
              <li>High cholesterol</li>
              <li>Erectile dysfunction</li>
              <li>Sleep apnoea</li>
              <li>Asthma</li>
              <li>Gallbladder disease</li>
              <li>Osteoarthritis</li>
              <li>Chronic back pain</li>
              <li>Depression</li>
              <li>PCOS</li>
              <li>Fatty liver disease</li>
              <li>Chronic malabsorption syndrome</li>
            </ol>
            <div class="flex flex-col items-center w-full space-y-4">
              <div class="flex flex-col items-center w-full">
                <label
                  class="flex items-center space-x-2 shadow border w-full border-gray-400 p-2 cursor-pointer rounded-md"
                >
                  <input
                    type="radio"
                    id="radioYes"
                    name="answer"
                    class="hidden"
                    @change="selectOption(true)"
                  />
                  <span
                    class="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
                    :class="{ 'bg-orange-700': selected === true }"
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
                  class="flex items-center space-x-2 w-full shadow border border-gray-400 p-2 cursor-pointer rounded-md"
                >
                  <input
                    type="radio"
                    id="radioNo"
                    name="answer"
                    class="hidden"
                    @change="selectOption(false)"
                  />
                  <span
                    class="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
                    :class="{ 'bg-orange-700': selected === false }"
                  >
                    <span
                      v-if="selected === false"
                      class="inner-circle w-3 h-3 rounded-full bg-white"
                    ></span>
                  </span>
                  <span class="text-xl">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { recommneded, toggleRecommned } from "../scripts/Recommnded";

export default {
  name: "MedicalConditions",
  setup() {
    const routes = useRouter();
    const selected = ref(null);

    const selectOption = function (option) {
      selected.value = option;

      if (selected.value) {
        console.log(selected.value, "pop");
        routes.push({ name: "quiz16" });
        console.log(recommneded.value);
      } else {
        toggleRecommned();
      }
    };

    return {
      selected,
      selectOption,
    };
  },
};
</script>

<style>
</style>
