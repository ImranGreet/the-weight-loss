import { defineStore } from "pinia";
import { ref } from "vue";

export const usePrimaryMotives = defineStore("primaryMotives", () => {
  const currentQuestionIndex = ref(0);
  const selectedReasons = ref([]);
  const otherSelection = ref(false);
  let errorSign = ref(false);
  let othersInfo = ref("");

  const questions = ref([
    {
      id: 1,
      text: "What are the primary motivations behind your desire to shed excess weight?",
      reasons: [
        {
          id: 1,
          text: "Improving my overall health",
          selected: ref(false),
        },
        {
          id: 2,
          text: "Avoiding or managing a specific health condition",
          selected: ref(false),
        },
        {
          id: 3,
          text: "Looking and feeling better",
          selected: ref(false),
        },
        { id: 4, text: "Becoming more active", selected: ref(false) },
        {
          id: 5,
          text: "Improving my mood or mental wellbeing",
          selected: ref(false),
        },
        {
          id: 6,
          text: "Improving my sleep or energy levels",
          selected: ref(false),
        },
        { id: 7, text: "other", selected: ref(false) },
      ],
    },
  ]);

  const toggleCheckbox = (reason) => {
    reason.selected = !reason.selected;

    if (!selectedReasons.value.includes(reason.text)) {
      selectedReasons.value.push(reason.text);
    } else if (selectedReasons.value.includes(reason.text)) {
      selectedReasons.value = selectedReasons.value.filter(
        (item) => item !== reason.text,
      );
    }
    if (selectedReasons.value.includes("other")) {
      otherSelection.value = true;
    } else {
      otherSelection.value = false;
    }
  };

  return {
    currentQuestionIndex,
    selectedReasons,
    otherSelection,
    errorSign,
    questions,
    othersInfo,
    toggleCheckbox,
  };
});
