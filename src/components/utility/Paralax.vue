<template>
  <section class="bg-gradient">
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
.bg-gradient {
  background: linear-gradient(
    to bottom,
    #005070,
    #a1d2c8,
    #ffffff,
    #a1d2c8,
    #005070
  );
}
</style>