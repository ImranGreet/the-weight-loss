<template>
  <section
    class="w-full lg:max-w-7xl xl:max-w-[1400px] mx-auto py-10 px-6 lg:px-0"
  >
    <div class="w-full h-20"></div>
    <div class="w-full flex flex-col justify-center items-center">
      <div class="space-y-4 self-start">
        <p class="tracking-wide capitalize">OUR MEDICAL TEAM</p>
        <h1 class="text-4xl">
          Created by experts in the biology and psychology of weight loss
        </h1>
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
            <div class="py-2">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ step.title }}
              </h5>
              <p>{{ step.designation }}</p>
            </div>
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
  name: "BiologyEffect",
  setup() {
    const steps = ref([
      {
        id: 1,
        title: "Earim Chaudry, MD",
        designation: "Chief Medical Officer",
        description:
          "18 years of experience as a doctor with a wide spectrum of qualifications, skills and experiences: General Practice (MRCGP)",
        image:
          "https://www.joinvoy.com/_next/image?url=https%3A%2F%2Fjoinvoycom.s3.eu-west-1.amazonaws.com%2FWEB_UK%2Fclinicians%2Fprofile%2F800_x_400%2FVoy_Clinican_Earim_800x400%25402x.jpg&w=1920&q=75",
      },
      {
        id: 2,
        title: "Bentley Ifediora-Ezike",
        designation: "Pharmacist, Ind. Prescriber",
        description:
          "Pharmacist Prescriber and clinician with over 20 years of experience in the NHS and Private sector with a special interest in the field of weight management",
        image:
          "https://www.joinvoy.com/_next/image?url=https%3A%2F%2Fjoinvoycom.s3.eu-west-1.amazonaws.com%2FWEB_UK%2Fclinicians%2Fprofile%2F800_x_400%2FVoy_Clinican_Bentley_800x400%25402x.jpg&w=1920&q=75",
      },
      {
        id: 3,
        title: "Anna Mullany",
        designation: "Head of Behaviour Change",
        description:
          "Registered Nutritionist (mBANT) and with over 10 years of expertise, specializing in evidence-based behavior change and innovative digital health solutions.",
        image:
          "https://www.joinvoy.com/_next/image?url=https%3A%2F%2Fjoinvoycom.s3.eu-west-1.amazonaws.com%2FWEB_UK%2Fclinicians%2Fprofile%2F800_x_400%2FVoy_Clinican_Anna_800x400%25402x.jpg&w=1920&q=75",
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