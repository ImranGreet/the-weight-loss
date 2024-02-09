import { ref } from "vue";
import slides from "./slides";

let currentSlideElement = ref(0);
let itemIndex = ref(0);

const nextSlideImage = () => {
  if (currentSlideElement.value < slides.value.length - 1) {
    currentSlideElement.value++;
  } else {
    currentSlideElement.value = 0;
  }
};

const previusSlideImage = () => {
  if (currentSlideElement.value > 0) {
    currentSlideElement.value--;
  } else {
    currentSlideElement.value = slides.value.length - 1;
  }
};

setInterval(() => {
  nextSlideImage();
}, 50000);

export {
  currentSlideElement,
  itemIndex,
  slides,
  nextSlideImage,
  previusSlideImage,
};
