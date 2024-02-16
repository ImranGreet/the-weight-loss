<template>
  <section class="w-full">
    <div class="container mx-auto">
      <div
        class="w-full h-auto  flex flex-col jsutify-center items-center"
      >
        <div class="w-full lg:w-1/2 mx-auto px-5 lg:px-0">
          <div class="prose max-w-none lg:max-w-prose prose-h1:leading-snug">
            <div>
              <h1>
                Let,s Find Out If You Are Suitable For the Evony Programme
              </h1>
              <h2>This will require your twenty minutes time</h2>
            </div>
            <SubmittedDocs />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SubmittedDocs from "../components/SubmittedDocs.vue";

export default {
  name: "Grret",
  components: { SubmittedDocs },
};
</script>

<style>
</style>