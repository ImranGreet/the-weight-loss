<template>
  <section
    class="w-full min-h-screen flex flex-col justify-center items-center bg-primary"
  >
    <div class="w-full md:w-[750px] mx-auto bg-primary/15">
      <div class="w-full text-center">
        <div class="flex flex-col justify-center items-center gap-y-4 py-8">
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
                <h2>You are currenly {{ Math.ceil(weightOfApplicant) }} kgs</h2>
                <h4>Your goals Became more active</h4>
              </div>
              <div>
                <h5>WITH OUR PERSONALISED PLAN</h5>
                <h2>You could reach {{ newWeight }} kg</h2>
                <h2>In 6 Months</h2>
                <p>
                  That’s a weight loss of {{ Math.floor(weightLossTotal) }} kg
                </p>
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
import {
  weightOfApplicant,
  heightOfApplicant,
  remainingWeights,
} from "../scripts/calculatation";

export default {
  name: "Assesment",
  components: { WeightChnageVue },
  setup() {
    const calculateBMI = (weight, height) => weight / height ** 2;

    const initialWeight = weightOfApplicant.value;
    const height = heightOfApplicant.value / 100;
    const initialBMI =
      weightOfApplicant.value /
      (heightOfApplicant.value * heightOfApplicant.value);
    const targetBMI = 24;
    const targetWeight = targetBMI * height * height;
    const weightLossTotal = initialWeight - targetWeight;
    const months = 6;
    let newWeight = 0;

    for (let month = 1; month <= months; month++) {
      const initialBMI = calculateBMI(initialWeight, height);

      const weightLossThisMonth = (weightLossTotal / months) * month;

      newWeight = initialWeight - weightLossThisMonth;

      const newBMI = calculateBMI(newWeight, height);

      const weightLossRatio = (weightLossThisMonth / weightLossTotal).toFixed(
        2
      );

      remainingWeights.push(newWeight);
    }

    return {
      weightOfApplicant,
      heightOfApplicant,
      newWeight,
      weightLossTotal,
    };
  },
};
</script>

<style>
</style>