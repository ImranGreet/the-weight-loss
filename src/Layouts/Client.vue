<template>
  <section class="w-full flex flex-col justify-between min-h-screen relative">
    <Navbar></Navbar>
    
    <router-view />
    <Footer />
    <div class="w-full fixed -bottom-2 inset-x-0 h-20 shadow-md sm:bg-primary">
      <div class="container mx-auto h-full flex items-center justify-center">
        <div class="w-full max-w-screen-lg mx-auto">
          <div
            class="w-full h-full flex flex-col sm:flex-row justify-between items-center text-center"
          >
            <p class="tracking-wider leading-snug hidden sm:block sm:w-auto">
              Take the first step towards weight loss that lasts.
            </p>
            <router-link
              :to="{ name: 'greet' }"
              class="px-10 py-3 border border-white w-full sm:w-auto mt-4 sm:mt-0 bg-primary sm:bg-inherit"
            >
              Am I Eligible
            </router-link>
          </div>
        </div>
      </div>
    </div>
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