<template>
  <section class="w-full flex flex-col justify-between gap-y-6">
    <intro />
    <Trust />
    <Video />
    <Step />
  </section>
</template>

<script>
import Intro from "../components/Intro.vue";
import Result from "../components/Result.vue";
import Step from "../components/Step.vue";
import Trust from "../components/Trust.vue";
import Video from "../components/Video.vue";

export default {
  name: "Home",
  components: { Intro, Trust, Video, Step, Result },
};
</script>

<style>
</style>