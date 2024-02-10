<template>
  <div class="slider-container">
    <div
      class="slider"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(item, index) in visibleImages" :key="index" class="slide">
        <img :src="item.image" :alt="item.title" class="w-full h-auto" />
      </div>
    </div>
    <div class="controls">
      <button @click="prevSlide" class="btn-prev">&#8249;</button>
      <button @click="nextSlide" class="btn-next">&#8250;</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const images = ref([
      {
        title: "Image 1",
        image:
          "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Image 2",
        image:
          "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      // Add more images as needed
    ]);

    const currentIndex = ref(0);
    const visibleImages = ref([]);

    const updateVisibleImages = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        visibleImages.value = images.value.slice(
          currentIndex.value,
          currentIndex.value + 1
        );
      } else if (screenWidth < 1024) {
        visibleImages.value = images.value.slice(
          currentIndex.value,
          currentIndex.value + 2
        );
      } else {
        visibleImages.value = images.value.slice(
          currentIndex.value,
          currentIndex.value + 3
        );
      }
    };

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
      updateVisibleImages();
    };

    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + images.value.length) % images.value.length;
      updateVisibleImages();
    };

    // Update visible images on component mount and window resize
    onMounted(() => {
      updateVisibleImages();
      window.addEventListener("resize", updateVisibleImages);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateVisibleImages);
    });

    return {
      currentIndex,
      visibleImages,
      nextSlide,
      prevSlide,
    };
  },
};
</script>

<style scoped>
/* Add your Tailwind CSS styles here */
.slider-container {
  position: relative;
  max-width: 100%;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide img {
  width: 100%;
  height: auto;
}

.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.btn-prev,
.btn-next {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.btn-prev:hover,
.btn-next:hover {
  background-color: #555;
}
</style>
