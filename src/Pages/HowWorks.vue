<template>
  <section class="w-full flex flex-col justify-between">
    <how />
    <Formula />
    <Procedure />
    <Expectations />
  </section>
</template>

<script>
import ExpectParent from "../components/HowItWorks/ExpectParent.vue";
import Expectations from "../components/HowItWorks/Expectations.vue";
import Formula from "../components/HowItWorks/Formula.vue";
import How from "../components/HowItWorks/How.vue";
import Procedure from "../components/HowItWorks/Procedure.vue";

export default {
  name: "How Works",
  components: { How, Formula, Procedure, Expectations, ExpectParent },
};
</script>

<style>
</style>