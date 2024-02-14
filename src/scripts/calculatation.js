import { ref } from "vue";

const Totalmonths = [
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

let weightOfApplicant = ref();
let heightOfApplicant = ref();
let expectedLoss = ref();

let remainingWeights = [];

export { weightOfApplicant, heightOfApplicant, remainingWeights };
