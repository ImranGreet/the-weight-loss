<template>
  <section class="w-full py-20">
    <div class="w-full flex flex-col justify-center items-center">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "Container",
  props: {
    bgColor: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>