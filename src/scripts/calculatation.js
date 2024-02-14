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

let weightOfApplicant = ref(0);
let heightOfApplicant = ref(0);
let expectedLoss = ref();

let remainingWeights = ref([]);

export { weightOfApplicant, heightOfApplicant, remainingWeights };
