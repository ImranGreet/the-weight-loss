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
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                class="w-36 h-36 rounded-full"
              />
              <div>
                <h3>By Dr Ony</h3>
                <p>Medical Director</p>
              </div>
              <div>
                <h2>You are currenly {{ Math.ceil(weightOfApplicant) }} kgs</h2>
                <h4>Your goals Became more active</h4>
              </div>
              <div>
                <h5>WITH OUR PERSONALISED PLAN</h5>
                <h2>You could reach {{ Math.ceil(newWeight) }} kg</h2>
                <h2>In 6 Months</h2>
                <p>
                  That’s a weight loss of {{ Math.floor(weightLossTotal) }} kg
                </p>
              </div>
            </div>
          </div>
          <WeightChnage :weightLossData="remainWeight" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WeightChnage from "../components/Graphs/WeightChnage.vue";
import {
  weightOfApplicant,
  heightOfApplicant,
  remainingWeights,
} from "../scripts/calculatation";

export default {
  name: "Assesment",
  components: { WeightChnage },
  setup() {
    const initialWeight = weightOfApplicant.value;
    const height = heightOfApplicant.value / 100;

    const targetBMI = 24;
    const targetWeight = targetBMI * height * height;
    const weightLossTotal = initialWeight - targetWeight;
    const months = 6;
    let newWeight = 0;
    let remainWeight = [];

    for (let month = 1; month <= months; month++) {
      const weightLossThisMonth = (weightLossTotal / months) * month;

      newWeight = initialWeight - weightLossThisMonth;
      remainWeight.push(newWeight);
    }
    console.log(remainWeight);
    return {
      weightOfApplicant,
      heightOfApplicant,
      newWeight,
      weightLossTotal,
      remainWeight,
      remainingWeights,
    };
  },
};
</script>

<style>
</style>