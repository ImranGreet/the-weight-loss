<template>
  <div class="w-full h-auto xl:h-[450px] bg-white">
    <div class="w-full h-full flex justify-center items-center">
      <div class="container mx-auto px-12 space-y-5">
        <div class="space-y-3 prose max-w-none">
          <h4>How It Works</h4>
          <h1 class="text-4xl tracking-wide leading-snug">
            The formula behind successful and sustainable weight loss with Voy
          </h1>
        </div>
        <div
          class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 prose max-w-none"
        >
          <div
            v-for="(formula, index) in formulas"
            :key="index"
            class="w-full flex gap-x-8 items-center"
          >
            <div
              class="w-24 h-20 rounded-xl bg-white text-center flex flex-col justify-center items-center text-4xl font-black"
            >
              {{ index + 1 }}
            </div>
            <div>
              <h3>{{ formula.title }}</h3>
              <p>{{ formula.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Formula",
  setup() {
    const formulas = ref([
      {
        id: 1,
        title: "GLP-1 medication",
        description:
          "Breakthrough medication that works by suppressing your appetite",
      },
      {
        id: 2,
        title: "Health coaching",
        description:
          "Your friendly, dedicated coach will help you implement lifelong habits",
      },
      {
        id: 3,
        title: "Digital tools",
        description:
          "Stay motivated with progress tracking, support and resources",
      },
    ]);
    return {
      formulas,
    };
  },
};
</script>

<style>
</style>