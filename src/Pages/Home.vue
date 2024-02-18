<template>
  <section class="w-full flex flex-col justify-between items-center space-y-14">
    <intro />
    <Trust />
    <WayOfLossWeight />

    <div class="w-full h-10"></div>

    <Curve />
  </section>
</template>

<script>
import Curve from "../components/Curve.vue";
import WayOfLossWeight from "../components/Homepage/focusText.vue";
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