<template>
  <section class="w-full mt-10 lg:mt-20">
    <div
      class="w-full flex flex-col items-center sm:flex-row py-8 lg:px-24 sm:gap-x-20 bg-primary"
    >
      <div class="w-full space-y-3 xl:pl-36 px-5 lg:px-0">
        <div class="prose max-w-none sm:max-w-prose">
          <h1 class="text-6xl font-[400px] leading-[72px]">
            Breakthrough medication that kickstarts your weight loss
          </h1>
          <p class="leading-relaxed">
            Research indicates that when combined with coaching, GLP-1s are the
            most effective solution for weight loss.
          </p>
          <router-link
            :to="{ name: 'greet' }"
            class="bg-primary px-5 py-3 rounded-md border border-white w-full sm:w-auto"
          >
            Am I Eligible
          </router-link>
          <div class="border-t border-gray-700 mt-14">
            <div class="w-full flex justify-start items-start gap-x-6">
              <p>
                At Voy, we prioritise responsible medication prescribing, guided
                by rigorous medical expertise and your safety.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center lg:pl-20">
        <img
          src="https://www.joinvoy.com/_next/image?url=https%3A%2F%2Fjoinvoycom.s3.eu-west-1.amazonaws.com%2FWEB_UK%2Fmedications%2Fhero%2FMedications_Hero_Desktop.webp&w=1920&q=100"
          alt=""
          class="w-full h-full object-center rounded-xl"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style>
</style>