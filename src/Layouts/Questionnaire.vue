<template>
  <section
    class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-fuchsia-500 to-indigo-500"
  >
    <div
      class="container xl:w-2/5 bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700"
    >
      <div class="bg-gray-400 h-2.5 rounded-r-lg" style="width: 50%"></div>
    </div>
    <div
      class="container px-3 xl:px-8 py-5 xl:w-2/5 flex flex-col justify-between gap-y-4 bg-white rounded-lg"
    >
      <router-view></router-view>
      <div class="w-full flex justify-between items-center">
        <button
          class="px-10 py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
        >
          Back
        </button>
        <div class="flex gap-x-7">
          <button
            class="px-10 py-3 hover:bg-gray-600 hover:text-white rounded-lg"
          >
            Save
          </button>
          <button
            class="px-10 py-3 rounded-lg bg-gray-400 hover:bg-gray-600 text-white shadow-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Questionnaire",
};
</script>

<style>
</style>