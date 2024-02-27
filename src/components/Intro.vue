<template>
  <section class="w-full g-primary">
    <div class="container mx-auto px-5 xl:px-0">
      <div class="w-full flex flex-col items-center sm:flex-row sm:gap-x-20">
        <div class="w-full space-y-3">
          <div class="prose max-w-none">
            <h1
              class="text-4xl xl:text-6xl font-[400px] leading-snug xl:leading-[72px]"
            >
              Our Doctors are making weight loss easier to Achieve
            </h1>
            <ul class="list-none prose-ul:pl-0">
              <li v-for="(achieve, index) in achvs" :key="index">
                <p>
                  <span
                    ><CheckIcon
                      class="inline-block w-6 h-6 text-white font-black text-2xl mr-3 bg-[#593461] border rounded-full p-1"
                    />{{ achieve.title }}</span
                  >
                </p>
              </li>
            </ul>
            <a
              href="https://xenmeshweightcheck.netlify.app/quiz"
              class="bg-[#593560] text-white px-5 xl:px-10 mt-2 py-3 mb-5 sm:mb-0 rounded-full border border-white w-full sm:w-auto no-underline"
            >
              Am I Eligible
            </a>
          </div>
        </div>
        <div
          class="w-full h-full hidden sm:flex justify-center items-center self-start xl:self-end"
        >
          <video
            ref="videoPlayer"
            playsinline
            loop
            muted
            autoplay
            class="w-full h-full object-cover"
          >
            <source src="../assets//homepage/wayvideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { CheckBadgeIcon, CheckIcon } from "@heroicons/vue/20/solid";

import InfiniteSlider from "./Slider/InfiniteSlider.vue";
import InfiniteMobile from "./Slider/InfiniteMobile.vue";

import { ref } from "vue";

export default {
  name: "Intro",
  components: { CheckBadgeIcon, CheckIcon, InfiniteSlider, InfiniteMobile },
  setup() {
    const achvs = ref([
      {
        id: 1,
        title: "New GLP-1 Medication proven to achieve lasting results",
      },
      {
        id: 2,
        title: "Doctor-led weight loss coaching and medical support",
      },
      {
        id: 3,
        title:
          "Personalised programmes for every subscriber with tailored support for black and asian individuals",
      },
    ]);
    return {
      achvs,
    };
  },
};
</script>

<style scoped>
.prose :where(ul):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  padding-left: 0px;
}
</style>