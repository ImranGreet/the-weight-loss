<template>
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
        type="submit"
        class="px-5 py-1 lg:px-10 lg:py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import {
  compoOperationInBack,
  renderCompo,
} from "../../scripts/functional_quiz/renderCompos";

export default {
  name: "GlobalForm",
  setup() {
    return {
      compoOperationInBack,
      renderCompo,
    };
  },
};
</script>

<style>
</style>