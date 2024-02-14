import {
  weightOfApplicant,
  heightOfApplicant,
  remainingWeights,
} from "../scripts/calculatation";

const data = remainingWeights;
const len = data.length;

const skipped = (ctx, value) => {
  return ctx?.p1DataIndex == len - 1 ? value : undefined;
};

// const down = (ctx, value) =>
//   ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

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

export const config = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
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
