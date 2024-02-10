<template>
  <section class="w-full">
    <div
      class="container mx-auto flex flex-col items-center sm:flex-row bg-gray-200/50"
    >
      <div class="w-full space-y-3">
        <div class="prose max-w-none sm:max-w-prose px-10">
          <h1>Lose 10% body weight or your money back</h1>
          <p class="leading-relaxed">
            We’re confident that you’ll lose at least 10% of your body weight in
            six months with our programme. If you don’t, we’ll give you your
            money back.
            <span>
              <router-link
                to="#"
                class="underline underline-offset-4 decoration-slate-600/25"
              >
                See full terms
              </router-link></span
            >
          </p>
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center">
        <img
          src="https://joinvoycom.s3.eu-west-1.amazonaws.com/WEB_UK/homepage/Content_Block/Homepage_ContentBlock_Desktop%402x.jpg"
          alt=""
          class="w-full h-full object-center rounded-xl"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Poster",
};
</script>

<style>
</style>