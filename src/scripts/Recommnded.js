import { ref } from "vue";

const recommneded = ref(false);

const toggleRecommned = function () {
  recommneded.value = !recommneded.value;
  if (recommneded.value) {
    return !recommneded.value;
  } else {
    return recommneded.value;
  }
};

export { recommneded, toggleRecommned };
