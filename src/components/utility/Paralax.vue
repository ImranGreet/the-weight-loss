<template>
  <section>
    <div class="px-10 py-14">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "Paralax",
  props: {
    bgGradient: {
      type: "String",
      required: true,
    },
  },
};
</script>

<style>
</style>