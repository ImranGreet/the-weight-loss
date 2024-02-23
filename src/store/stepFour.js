import { defineStore } from "pinia";
import { ref } from "vue";

export const useGoalWeight = defineStore("setGoalWeight", () => {
  const selectedOption = ref(null);
  const toggleRadio = (option) => {
    console.log(option, "op");
    selectedOption.value = option;
  };
  return {
    selectedOption,
    toggleRadio,
  };
});
