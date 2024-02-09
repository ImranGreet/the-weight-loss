<template>
  <div class="w-full flex justify-center items-center">
    <div
      class="w-full max-w-full lg:max-w-sm p-10 bg-white border-l border-y border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <i v-html="icon" class="w-36 h-36 my-4 inline-block"></i>
      <div class="px-5 pb-5 space-y-4">
        <div class="space-y-2">
          <h5
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {{ title }}
          </h5>
          <small>{{ motto }}</small>
        </div>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeightlossJourney",
  props: {
    weightLossStep: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let { title, description, icon, motto } = props.weightLossStep;
    return {
      title,
      description,
      icon,
      motto,
    };
  },
};
</script>

<style>
</style>