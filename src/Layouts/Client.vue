<template>
  <section class="w-full flex flex-col justify-between min-h-screen">
    <Navbar></Navbar>
    <router-view />
    <Footer />
  </section>
</template>

<script>
import Navbar from "../components/Navs/Navbar.vue";

import Footer from "../components/utility/Footer.vue";

export default {
  name: "Client",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
</style>