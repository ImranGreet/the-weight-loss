<template>
  <section>
    <div class="w-full px-10 py-3 border-b border-primary shadow-sm bg-white">
      <div class="w-full flex justify-between items-center">
        <div class="flex justify-center items-center gap-x-2">
          <router-link :to="{ name: 'home' }">
            <img src="../assets/1.png" alt="" class="w-52 h-14" />
          </router-link>
        </div>
      </div>
    </div>
    <section
      class="bg-primary min-h-[91vh] flex-col justify-center items-center"
      :class="{ flex: !recommneded, hidden: recommneded }"
    >
      <router-view />
    </section>
    <div :class="{ 'w-full block': recommneded, hidden: !recommneded }">
      <NotRecomended />
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import NotRecomended from "../Pages/NotRecomended.vue";
import { recommneded, toggleRecommned } from "../scripts/Recommnded";

export default {
  name: "quiz",
  components: { NotRecomended },
  setup() {
    onMounted(() => {
      if (recommneded.value) {
        toggleRecommned();
      }
    });
    return {
      recommneded,
      toggleRecommned,
    };
  },
};
</script>

<style>
</style>