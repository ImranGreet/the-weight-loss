<template>
  <section>
    <div
      class="hidden sm:block w-full px-10 py-3 border-b border-primary shadow-sm fixed inset-x-0 bg-white"
    >
      <div class="w-full flex justify-between items-center">
        <div class="flex justify-center items-center gap-x-2">
          <router-link :to="{ name: 'home' }">
            <img src="../../assets/1.png" alt="" class="w-52 h-14" />
          </router-link>
          <Navmodal />
        </div>
        <router-link to="#">Login</router-link>
      </div>
    </div>
    <div class="block sm:hidden z-[999] absolute inset-x-0 inset-y-0">
      <Mobilenav />
    </div>
  </section>
</template>

<script>
import Mobilenav from "../utility/Mobilenav.vue";
import Navmodal from "./Navmodal.vue";

export default {
  name: "Navbar",
  components: { Navmodal, Mobilenav },
};
</script>

<style>
</style>