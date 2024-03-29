const data = [141, 132, 123, 114, 105, 96];

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
