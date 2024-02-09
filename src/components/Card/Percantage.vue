<template>
  <div
    class="relative flex flex-col text-gray-700 bg-white shadow-md border border-gray-500/35 rounded-2xl max-w-full lg:max-w-sm"
  >
    <div class="p-8">
      <h5
        class="block mb-2 font-sans text-4xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900"
      >
        {{ score }} <span>%</span>
      </h5>
      <p
        class="block font-sans text-base antialiased font-light leading-relaxed text-inherit"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Percantage",
  props: {
    outCome: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let { score, description } = props.outCome;
    return {
      score,
      description,
    };
  },
};
</script>

<style>
</style>