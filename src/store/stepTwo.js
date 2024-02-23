import { defineStore } from "pinia";
import { ref } from "vue";

export const useHeightWeightSet = defineStore("setHeightWeight", () => {
  const selected = ref(null);

  const toggleSelected = (option) => {
    selected.value = option;
  };

  return {
    selected,
    toggleSelected,
  };
});
