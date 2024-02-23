import { defineStore } from "pinia";
import { ref } from "vue";

export const useBMICalculation = defineStore("setHeightAndWeight", () => {
  let height = ref("");
  let weight = ref("");

  return {
    height,
    weight,
  };
});
