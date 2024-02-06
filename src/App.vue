<template>
  <section class="w-full min-h-screen flex flex-col justify-between">
    <Navbar />
    <div class="w-full h-20"></div>
    <expertise-profile />
    <div class="w-full h-20"></div>
    <learning-card />
    <div class="w-full h-20"></div>
    <WeightlossJourney />
    <div class="w-full h-20"></div>
    <Expertise />
    <div class="w-full h-20"></div>
    <Percantage />
    <div class="w-full h-20"></div>

    <Footer />
  </section>
</template>

<script>
import Expertise from "./components/Card/Expertise.vue";
import ExpertiseProfile from "./components/Card/ExpertiseProfile.vue";
import LearningCard from "./components/Card/LearningCard.vue";
import Percantage from "./components/Card/Percantage.vue";
import WeightlossJourney from "./components/Card/WeightlossJourney.vue";
import Navbar from "./components/Navs/Navbar.vue";
import Footer from "./components/utility/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    ExpertiseProfile,
    LearningCard,
    WeightlossJourney,
    Expertise,
    Percantage,
  },
};
</script>,
    