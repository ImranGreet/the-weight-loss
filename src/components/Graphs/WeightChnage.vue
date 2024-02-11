<template>
  <Line :data="data" :options="options" />
</template>

<script >
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import {
  weightOfApplicant,
  heightOfApplicant,
} from "../../scripts/calculatation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "WeightChnage",
  components: {
    Line,
  },
  setup() {
    console.log(weightOfApplicant.value);
    const numbersArray = [];
    const currentMonthIndex = new Date().getMonth();
    const allMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const startMonthIndex = currentMonthIndex;
    const febToJulyMonths = [];

    for (let i = 0; i < 6; i++) {
      // Start from 0 and include the next 5 months
      febToJulyMonths.push(allMonths[(startMonthIndex + i) % 12]);
    }

    for (let i = 10; i <= weightOfApplicant.value; i += 10) {
      numbersArray.push(i);
    }

    const data = {
      labels: febToJulyMonths,
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: numbersArray,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      width: 400,
      height: 200,
      animations: {
        tension: {
          duration: 8000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
    };
    return {
      data,
      options,
      weightOfApplicant,
      heightOfApplicant,
    };
  },
};
</script>
