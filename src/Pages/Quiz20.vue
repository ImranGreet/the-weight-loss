<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full px-2 sm:px-0 lg:w-1/3 mx-auto">
        <div class="space-y-2 prose">
          <h1>Do you have any allergies?</h1>
          <div class="px-3 space-y-6">
            <label
              class="flex items-center space-x-2 shadow border border-gray-400 p-2 cursor-pointer rounded-md"
            >
              <input
                v-model="selected"
                type="radio"
                id="radioYes"
                name="allergies"
                class="hidden"
                value="true"
              />
              <span
                class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                :class="{
                  'bg-white border-orange-500': selected === 'true',
                }"
              >
                <!-- The space in the center, orange in the border -->
              </span>
              <span class="text-xl">Yes</span>
            </label>
            <label
              class="flex items-center space-x-2 shadow border border-gray-400 p-2 cursor-pointer rounded-md"
            >
              <input
                v-model="selected"
                type="radio"
                id="radioNo"
                name="allergies"
                class="hidden"
                value="false"
              />
              <span
                class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                :class="{
                  'bg-white border-orange-500': selected === 'false',
                }"
              >
              </span>
              <span class="text-xl">No</span>
            </label>
            <button
              @click="handleButtonClick"
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
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { toggleRecommned, recommneded } from "../scripts/Recommnded";

export default {
  name: "AllergiesQuestion",
  setup() {
    onUnmounted(() => {
      if (recommneded.value) {
        toggleRecommned();
      }
    });

    const routes = useRouter();
    const selected = ref("true");

    const handleButtonClick = function () {
      if (selected.value === "true") {
        toggleRecommned();
      } else {
        navigateToPage();
      }
    };

    const navigateToPage = function () {
      routes.push({ name: "quiz21" });
    };

    return {
      selected,
      handleButtonClick,
      recommneded,
    };
  },
};
</script>

<style>
</style>
