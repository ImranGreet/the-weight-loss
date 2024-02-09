<template>
  <section class="w-full flex flex-col justify-between gap-y-6">
    <IntroMedication />
    <WeightlossMedication/>
  </section>
</template>

<script>
import IntroMedication from "../components/Medication/IntroMedication.vue";
import WeightlossMedication from "../components/Medication/WeightlossMedication.vue";

export default {
  name: "Medication",
  components: { IntroMedication, WeightlossMedication },
};
</script>

<style>
</style>