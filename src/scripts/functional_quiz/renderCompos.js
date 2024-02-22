import { ref } from "vue";

let renderCompo = ref(0);
let compoOperationInNext = function () {
  renderCompo.value++;
  console.log(renderCompo.value);
  return renderCompo;
};
let compoOperationInBack = function () {
  renderCompo.value--;
};
export { renderCompo, compoOperationInBack, compoOperationInNext };
