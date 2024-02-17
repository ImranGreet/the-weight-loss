<template>
  <div class="w-full max-w-full px-12 py-14 bg-[#593560] text-white">
    <div
      class="w-full flex flex-col sm:flex-row justify-between items-end gap-y-2"
    >
      <div class="self-start md:self-stretch">
        <ul class="w-full sm:flex justify-between">
          <li>
            <router-link to="#"
              ><span class="mx-2"> <span class="inline md:hidden">|</span> </span>Terms and Conditions</router-link
            >
          </li>
          <li>
            <router-link to="#"
              ><span class="mx-2">|</span>Privacy and Policy</router-link
            >
          </li>
          <li>
            <router-link to="#"
              ><span class="mx-2">|</span>Accesability</router-link
            >
          </li>
          <li>
            <router-link to="#"><span class="mx-2">|</span>Cookies</router-link>
          </li>
        </ul>
      </div>
      <p class="self-start">
        <span>&#169;</span> Copyright {{ year }} evony Ltd
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  setup() {
    const d = new Date();
    let year = d.getFullYear();
    return {
      year,
    };
  },
};
</script>

<style>
</style>