<template>
  <section class="w-full flex flex-col justify-between gap-y-6">
    <IntroMedication />
    <GLPDetails />
    <WeightlossMedication />
    <Biology />
    <Curve />
    <GLPMedication />
    <BiologyEffect />
    <ExpertSpeech />
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
              to="#"
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
import Biology from "../components/Medication/Biology.vue";
import BiologyEffect from "../components/Medication/BiologyEffect.vue";
import ExpertSpeech from "../components/Medication/ExpertSpeech.vue";
import GLPDetails from "../components/Medication/GLPDetails.vue";
import GLPMedication from "../components/Medication/GLPMedication.vue";
import IntroMedication from "../components/Medication/IntroMedication.vue";
import WeightlossMedication from "../components/Medication/WeightlossMedication.vue";
import Paralax from "../components/utility/Paralax.vue";

export default {
  name: "Medication",
  components: {
    IntroMedication,
    WeightlossMedication,
    GLPMedication,
    Paralax,
    GLPDetails,
    Curve,
    Biology,
    BiologyEffect,
    ExpertSpeech,
  },
};
</script>

<style>
</style>