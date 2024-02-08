<template>
  <section
    class="w-full lg:max-w-7xl xl:max-w-[1400px] mx-auto py-10 px-6 lg:px-0"
  >
    <div class="w-full h-20"></div>
    <div class="w-full flex flex-col justify-center items-center">
      <div class="space-y-4 self-start">
        <p class="tracking-wide capitalize">PROGRAMME</p>
        <h1 class="text-4xl">Our three-step approach</h1>
      </div>
      <div class="w-full h-20"></div>
      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-6"
      >
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="max-w-sm bg-white rounded-lg"
        >
          <a href="#">
            <img class="rounded-lg w-full" :src="step.image" alt="" />
          </a>
          <div class="pt-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ step.title }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Step",
  setup() {
    const steps = ref([
      {
        id: 1,
        title: "Breakthrough medication",
        description:
          "Set off on the right foot with weight loss medication that’s proven to help you hit the ground running and reach your goals faster",
        image:
          "https://www.joinvoy.com/_next/image?url=https%3A%2F%2Fjoinvoycom.s3.eu-west-1.amazonaws.com%2FWEB_UK%2Fhomepage%2Foffering%2Fhomepage_offering.png&w=1920&q=1",
      },
      {
        id: 2,
        title: "Dedicated health team",
        description:
          "Whether you need support with your medication, nutrition or motivation, our specialist teams of coaches, clinicians and nutritionists have you covered.",
        image:
          "https://joinvoycom.s3.eu-west-1.amazonaws.com/WEB_UK/homepage/offering/team.svg",
      },
      {
        id: 3,
        title: "Complete toolkit",
        description:
          "Build a new, healthier lifestyle with expert tips on nutrition, movement and mindset, easy-to-understand science and progress tracking that’s proven to reinforce your motivation.",
        image:
          "https://joinvoycom.s3.eu-west-1.amazonaws.com/WEB_UK/homepage/how-it-works/complete_toolkit.svg",
      },
    ]);

    return {
      steps,
    };
  },
};
</script>

<style>
</style>