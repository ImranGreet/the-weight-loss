<template>
  <section
    class="w-full min-h-screen flex flex-col justify-center items-center"
  >
    <div class="w-full md:w-2/3 mx-auto">
      <div class="w-full text-center">
        <div class="flex flex-col justify-center items-center gap-y-4">
          <div class="w-full prose texr-center">
            <h3>Your assessment</h3>
            <div class="w-full flex flex-col justify-center items-center">
              <img
                src="https://www.joinvoy.com/_next/image?url=%2Fimages%2FDrQuote%2FEarim%403x.png&w=64&q=75"
                alt=""
                class="w-36 h-36 rounded-fulll"
              />
              <div>
                <h3>By Dr. Earim Chaudry</h3>
                <p>Medical Director</p>
              </div>
              <div>
                <h1>You are currenly {{ weightOfApplicant }} kgs</h1>
                <h4>Your goals Became more active</h4>
              </div>
              <div>
                <h5>WITH OUR PERSONALISED PLAN</h5>
                <!-- <h2>You could reach 20 kg</h2> -->
                <h2>In 6 Months</h2>
                <!-- <p>That’s a weight loss of 2 kg</p> -->
              </div>
            </div>
          </div>
          <WeightChnageVue />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WeightChnageVue from "../components/Graphs/WeightChnage.vue";
import { weightOfApplicant, heightOfApplicant } from "../scripts/calculatation";

export default {
  name: "Assesment",
  components: { WeightChnageVue },
  setup() {
    return {
      weightOfApplicant,
      heightOfApplicant,
    };
  },
};
</script>

<style>
</style>