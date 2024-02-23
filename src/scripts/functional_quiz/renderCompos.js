import { ref, watch } from "vue";

let renderCompo = ref(0);
let compoOperationInNext = function () {
  renderCompo.value++;
  return renderCompo;
};
let compoOperationInBack = function () {
  renderCompo.value--;
};

const validationError = ref([]);

export {
  renderCompo,
  validationError,
  compoOperationInBack,
  compoOperationInNext,
};
