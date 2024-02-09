<template>
  <section class="gradient-background">
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

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, #6aa5bd, #66a5ad, #ddd6d6, #66a5ad);
}
</style>