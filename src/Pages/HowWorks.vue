<template>
  <section class="w-full flex flex-col justify-between">
    <how />
    <Formula />
    <Procedure />
  </section>
</template>

<script>
import Formula from "../components/HowItWorks/Formula.vue";
import How from "../components/HowItWorks/How.vue";
import Procedure from "../components/HowItWorks/Procedure.vue";

export default {
  name: "How Works",
  components: { How, Formula, Procedure },
};
</script>

<style>
</style>