<template>
  <section class="w-full">
    <div
      class="w-full lg:w-2/5 mx-auto mt-6 flex flex-col justify-center items-center"
    >
      <div>
        <h1 class="flex flex-col justify-center items-center">
          <span class="rounded-full p-1 border-2 border-gray-400"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </h1>
        <h2 class="text-2xl tracking-widest font-black">
          No recommended treatment
        </h2>
      </div>
      <div class="w-full h-5"></div>
      <div class="w-full py-2">
        <p>
          Based on your answers there is no treatment suitable for you. If you
          think you have made an error in your responses, please click below to
          review your answers
        </p>
        <small
          >Warning: Giving inaccurate information in a clinical consultation,
          could put your health at risk.
        </small>
      </div>
      <div class="w-full h-5"></div>
      <div class="space-y-5">
        <div class="flex items-center">
          <input
            v-model="agreed"
            id="link-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 accent-orange-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="link-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >I agree only to provide accurate responses .</label
          >
        </div>
        <button
          @click="naviagteToPage()"
          :disabled="!agreed"
          class="bg-orange-700 w-full py-2 px-4 rounded"
          :class="{ 'cursor-not-allowed': !agreed }"
        >
          Review Your answers
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onBeforeUnmount, ref } from "vue";
import { recommneded, toggleRecommned } from "../scripts/Recommnded";
export default {
  name: "notrecommended ",
  setup() {
    onBeforeUnmount(() => toggleRecommned());
    const agreed = ref(false);
    const naviagteToPage = function () {
      toggleRecommned();
    };
    return {
      agreed,
      naviagteToPage,
    };
  },
};
</script>

<style>
</style>