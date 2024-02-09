
  <template>
  <section class="container mx-auto">
    <div class="rounded-md">
      <div class="flex justify-end items-center p-4">
        <button
          @click="previusSlideImage()"
          class="text-gray-700 w-10 lg:w-12 h-10 lg:h-12 shadow rounded-full flex flex-col justify-center items-center"
        >
          <ChevronLeftIcon class="w-5 lg:w-6 lg:h-6 h-5" />
        </button>
        <button
          @click="nextSlideImage()"
          class="text-gray-700 w-10 lg:w-12 h-10 lg:h-12 shadow rounded-full flex flex-col justify-center items-center"
        >
          <ChevronRightIcon class="w-5 lg:w-6 lg:h-6 h-5" />
        </button>
      </div>
    </div>
    <transition name="slide-fade" mode="out-in" class="custom-slide-transition">
      <div
        class="flex flex-col lg:flex-row w-full border h-48 lg:h-96 border-gray-100 rounded-md relative gap-x-6"
      >
        <!-- Navigation Buttons -->

        <!-- Left Side: Title and Description -->
        <div
          class="w-full lg:w-1/2 bg-primary/25 p-4 flex flex-col justify-center items-center rounded-lg"
        >
          <h2 class="text-xl font-semibold mb-2">
            {{ slides[currentSlideElement].title }}
          </h2>
          <p class="text-gray-600">
            {{ slides[currentSlideElement].description }}
          </p>
        </div>

        <!-- Right Side: Before and After Photos -->
        <div class="w-full lg:w-1/2 relative">
          <!-- Slides Container with Transition -->

          <div
            v-if="showSlide"
            class="w-full h-full flex gap-x-6 justify-center items-center rounded-md"
          >
            <img
              :src="slides[currentSlideElement].beforeImage"
              alt="Before Photo"
              class="w-full h-full object-fill object-center rounded-md square"
            />
            <img
              :src="slides[currentSlideElement].afterImage"
              alt="After Photo"
              class="w-full h-full object-fill object-center rounded-md square"
            />
          </div>
        </div>
      </div>
    </transition>

    <div class="w-full h-10"></div>
  </section>
</template>


<script>
import { computed, ref, watch, watchEffect, nextTick } from "vue";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import {
  nextSlideImage,
  currentSlideElement,
  previusSlideImage,
  slides,
} from "../../scripts/showSlides";

export default {
  name: "SlidingPhoto",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },

  setup() {
    const slidesPhoto = computed(
      () => slides.value[currentSlideElement.value].beforeImage,
      () => slides.value[currentSlideElement.value].afterImage
    );
    const showSlide = ref(true);

    watch(
      () => currentSlideElement.value,
      () => {
        showSlide.value = false;

        nextTick(() => {
          showSlide.value = true;
        });
      }
    );

    return {
      slidesPhoto,
      slides,
      currentSlideElement,
      nextSlideImage,
      previusSlideImage,
      showSlide,
    };
  },
};
</script>

<style>
.custom-slide-transition-enter-active,
.custom-slide-transition-leave-active {
  transition: transform 1s;
}

.custom-slide-transition-enter-from,
.custom-slide-transition-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
