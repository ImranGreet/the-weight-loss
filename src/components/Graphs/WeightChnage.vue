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
  name: "App",
  components: {
    Line,
  },
  props: {
    weightLossData: {
      type: Array,
      required: false,
    },
  },
  setup(props) {
    const data = props.weightLossData;

    const len = data.length - 1;

    const months = [
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

    const currentMonth = new Date().getMonth();
    const resultArray = [];

    for (
      let i = currentMonth;
      i < months.length && resultArray.length < 5;
      i += 2
    ) {
      resultArray.push(months[i]);
    }
    const skipped = (ctx, value) => {
      return ctx?.p1DataIndex == len - 1 ? value : undefined;
    };

    const genericOptions = {
      fill: false,
      interaction: {
        intersect: false,
      },
      radius: 0,
      tension: 0.4,
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
        },
        y: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
        },
      },
    };
    return {
      data: {
        labels: resultArray,
        datasets: [
          {
            label: "My First Dataset",
            data: data,
            backgroundColor: "#475569",
            borderColor: "#475569",
            segment: {
              borderColor: (ctx) => skipped(ctx, "rgb(0,0,0,0.2)"),
              borderDash: (ctx) => skipped(ctx, [10, 10]),
            },
            spanGaps: true,
          },
        ],
      },
      options: genericOptions,
    };
  },
};
</script>
