<template>
  <section class="w-full h-[70vh] gradient-background rounded-[85px]">
    <div class="w-full h-20"></div>
    <div class="w-full flex flex-col justify-center items-center">
      <div class="space-y-4 self-start">
        <p>PROGRAMME</p>
        <h1 class="text-4xl">Our three-step approach</h1>
      </div>
      <div class="w-full h-20"></div>
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <Percantage />
        <Percantage />
        <Percantage />
      </div>
    </div>
  </section>
</template>

<script>
import Percantage from "./Card/Percantage.vue";

export default {
  name: "Step",
  components: { Percantage },
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, #a1d2c8, #ffffff);
}
</style>