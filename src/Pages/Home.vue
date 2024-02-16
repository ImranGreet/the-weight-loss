<template>
  <section class="w-full flex flex-col justify-between gap-y-6">
    <intro />
    <Trust />
    <WayOfLossWeight />
    <Video />
    <Step />
    <Result />
    <div class="w-full h-10"></div>
    <!-- <BeforeAfter /> -->
    <Curve />
    <ExpertGroup />
    <WeightLossJourneyContainer />
    <div class="w-full h-14 lg:h-36"></div>
    <Poster />
    <div class="w-full h-14 lg:h-36"></div>
    <Paralax>
      <div
        class="w-full flex flex-col justify-center items-center h-auto lg:h-96"
      >
        <div class="w-full lg:w-2/6 max-auto">
          <div class="prose max-w-none text-center text-white">
            <h1>The last weight loss programme you will ever need</h1>
            <p class="text-sm">
              Take the first step towards weight loss that lasts.
            </p>
            <div class="w-full h-5"></div>
            <router-link
              :to="{ name: 'greet' }"
              class="px-20 py-3 rounded-md border border-white w-full sm:w-auto no-underline"
            >
              Am I Eligible
            </router-link>
          </div>
        </div>
      </div>
    </Paralax>
  </section>
</template>

<script>
import Curve from "../components/Curve.vue";
import WayOfLossWeight from "../components/Homepage/WayOfLossWeight.vue";
import Intro from "../components/Intro.vue";
import Result from "../components/Result.vue";
import BeforeAfter from "../components/Slider/BeforeAfter.vue";
import Step from "../components/Step.vue";
import Trust from "../components/Trust.vue";
import Video from "../components/Video.vue";
import WeightLossJourneyContainer from "../components/WeightLossJourneyContainer.vue";
import Paralax from "../components/utility/Paralax.vue";
import ExpertGroup from "../components/Homepage/ExpertGroup.vue";
import Poster from "../components/Poster.vue";
import MultipleSlider from "../components/Slider/MultipleSlider.vue";

export default {
  name: "Home",
  components: {
    Intro,
    Trust,
    Video,
    Step,
    Result,
    Curve,
    WeightLossJourneyContainer,
    Paralax,
    BeforeAfter,
    WayOfLossWeight,
    ExpertGroup,
    Poster,
    MultipleSlider,
  },
};
</script>

<style>
</style>