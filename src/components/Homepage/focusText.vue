<template>
  <div class="container xl:max-w-7xl mx-auto px-5 xl:px-0">
    <div
      class="w-full flex flex-col-reverse sm:flex-row justify-between items-center"
    >
      <div class="w-full lg:w-3/5">
        <div
          class="w-full flex gap-x-5"
          v-for="(description, index) in descriptionOfServices"
          :key="index"
        >
          <div
            class="bg-yellow-600/40 rounded-full w-8 h-8 xl:w-10 xl:h-10 text-center text-lg xl:text-xl font-black flex justify-center items-center"
          >
            {{ index + 1 }}
          </div>
          <div class="prose max-w-none">
            <h2>
              {{ description.headText }}
            </h2>
            <small class="font-bold text-lg">{{ description.smallText }}</small>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="w-full lg:w-2/5 flex justify-center items-center flex-col">
        <img
          src="../../assets/homepage/kim.png"
          alt=""
          class="mx-auto w-full object-fill"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "focusWeight",
  setup() {
    const descriptionOfServices = ref([
      {
        id: 1,
        headText: "Check your eligibility and subscribe ",
        smallText:
          "Take our quiz to know if you are eligible, subcribe and cancel anytime",
      },
      {
        id: 2,
        headText: "Initial consultation with a doctor ",
        smallText: "Free assessment by a medical professional through evony",
      },
      {
        id: 3,
        headText: "Recieve your medication",
        smallText:
          "Your first 4 weekly doses will arrive at your door in discrete packaging. Delivery is fast & free.",
      },
      {
        id: 4,
        headText: "Follow-up consultations",
        smallText:
          "Online access to our clinicians from day 1 and 1:1 follow-up with a doctor during your weight loss journey to monitor your progress and for you to ask any questions.",
      },
    ]);
    return {
      descriptionOfServices,
    };
  },
};
</script>

<style>
</style>








