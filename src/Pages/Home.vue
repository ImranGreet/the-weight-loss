<template>
  <section>
    <intro />
    <Trust />
    <Video />

    <div class="max-w-7xl mx-auto">
      <Step />
    </div>
    <Result />
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