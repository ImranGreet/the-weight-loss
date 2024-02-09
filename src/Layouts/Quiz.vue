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
      class="bg-primary h-[91vh] flex flex-col justify-center items-center"
    >
      <router-view />
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>