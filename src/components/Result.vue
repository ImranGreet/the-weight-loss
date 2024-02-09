<template>
  <section
    class="w-full h-[70vh] gradient-background rounded-[36px] lg:rounded-[85px]"
  >
    <div class="w-full h-20"></div>
    <div
      class="max-w-full lg:max-w-7xl mx-auto flex flex-col justify-center items-center px-5 xl:px-0"
    >
      <div class="space-y-4 self-start prose max-w-none">
        <p>OUR CUSTOMER IMPACT</p>
        <h1 class="text-4xl">The results speak for themselves</h1>
      </div>
      <div class="w-full h-20"></div>
      <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Percantage
          v-for="(outcome, index) in outComes"
          :key="index"
          :outCome="outcome"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import Percantage from "./Card/Percantage.vue";

export default {
  name: "Step",
  components: { Percantage },
  setup() {
    const outComes = ref([
      {
        id: 1,
        score: 84,
        description:
          "of members say this is the most effective program they have tried",
      },
      {
        id: 2,
        score: 92,
        description:
          "of members are confident they will keep the weight off for good",
      },
      {
        id: 3,
        score: 97,
        description: "of members felt their overall health had improved",
      },
    ]);
    return {
      outComes,
    };
  },
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, #6aa5bd, #66a5ad, #948484, #66a5ad);
}
</style>