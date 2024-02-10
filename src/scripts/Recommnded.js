import { ref } from "vue";

const recommneded = ref(false);

const toggleRecommned = function () {
  recommneded.value = !recommneded.value;
};

export { recommneded, toggleRecommned };
