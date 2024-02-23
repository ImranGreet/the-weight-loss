<template>
  <section class="w-full bg-inherit rounded-lg shadow-sm">
    <div
      class="w-full flex flex-col sm:flex-row justify-center items-center gap-x-5"
    >
      <div class="w-full flex justify-center items-center">
        <img :src="evonyHome" alt="" />
      </div>
      <div class="prose max-w-none self-start">
        <h2>
          Congratulations on choosing to enhance your health and well-being with
          evony.
        </h2>
      </div>
    </div>
    <div
      class="w-full flex items-center"
      :class="{
        'justify-end': renderCompo === 0,
        'justify-between': renderCompo > 0,
      }"
    >
      <button
        @click="compoOperationInBack()"
        class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
        :class="{ hidden: renderCompo === 0, inline: renderCompo > 0 }"
      >
        Back
      </button>
      <div class="flex gap-x-7">
        <button
          class="px-5 py-1 lg:px-10 lg:py-3 hover:bg-gray-600 hover:text-white rounded-lg"
        >
          Save
        </button>
        <button
          @click="compoOperationInNext()"
          class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import evonyHome from "../../assets/Stesps/evony.png";
import {
  compoOperationInNext,
  compoOperationInBack,
  renderCompo,
} from "../../scripts/functional_quiz/renderCompos";

export default {
  name: "Greeting",
  setup() {
    return {
      evonyHome,
      compoOperationInNext,
      compoOperationInBack,
      renderCompo,
    };
  },
};
</script>

<style>
</style>