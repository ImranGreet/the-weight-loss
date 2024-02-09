<template>
  <section class="w-full mt-20">
    <div
      class="w-full flex flex-col items-center sm:flex-row py-8 lg:px-24 sm:gap-x-20 bg-primary"
    >
      <div class="w-full space-y-3 xl:pl-36 px-5 lg:px-0">
        <div class="prose max-w-none sm:max-w-prose">
          <h1 class="text-6xl font-[400px] leading-[72px]">
            A science-backed approach to help lose weight and keep it off
          </h1>
          <p class="leading-relaxed">
            Our programme combines breakthrough GLP-1 medication with health
            coaching and healthy lifestyle changes.
          </p>
          <router-link
            to="#"
            class="bg-primary px-5 py-3 rounded-md border border-white w-full sm:w-auto no-underline"
          >
            Am I Eligible
          </router-link>
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center lg:pl-20">
        <img
          src="https://www.joinvoy.com/_next/image?url=https%3A%2F%2Fjoinvoycom.s3.eu-west-1.amazonaws.com%2FWEB_UK%2Fhow_it_works%2Fhero%2FHIW_Hero_Sqaure_Desktop.webp&w=1920&q=100"
          alt=""
          class="w-full h-full object-center rounded-xl"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "How",
};
</script>

<style>
</style>