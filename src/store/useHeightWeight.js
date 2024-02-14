import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useHeightWeight = defineStore("heightWeight", () => {
  const heightOfApp = ref(0);
  const weightOfApp = ref(0);

  function setHeightWeight(applicantHeight, applicantWeight) {
    heightOfApp.value = applicantHeight;
    weightOfApp.value = applicantWeight;
  }

  return {
    heightOfApp,
    weightOfApp,
    setHeightWeight,
  };
});
