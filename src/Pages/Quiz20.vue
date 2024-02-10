<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full px-2 sm:px-0 lg:w-1/2 flex flex-col justify-center items-center mx-auto"
      >
        <div class="space-y-6 prose w-full">
          <div>
            <h1>Are you allergic to any of the following?</h1>
            <p>
              GLP-1 Medication including Rybelsus, Saxenda, Ozempic, Trulicity
              or Victoza
            </p>
            <p>Orlistat</p>
            <p>Salcaprozate sodium</p>
            <p>Povidone K90</p>
            <p>Cellulose, microcrystalline</p>
            <p>Magnesium stearate</p>
          </div>

          <div class="px-3 space-y-6">
            <label
              class="flex items-center space-x-2 shadow border border-gray-400 p-2 cursor-pointer rounded-md"
            >
              <input
                v-model="selectedOption"
                type="radio"
                id="radioYes"
                name="allergies"
                class="hidden"
                value="true"
              />
              <span
                class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                :class="{
                  'bg-white border-orange-500': selectedOption === 'true',
                }"
              >
                <!-- The space in the center, orange in the border -->
              </span>
              <span class="text-xl">Yes</span>
            </label>
            <label
              class="flex items-center space-x-2 shadow border border-gray-400 p-2 cursor-pointer rounded-md"
            >
              <input
                v-model="selectedOption"
                type="radio"
                id="radioNo"
                name="allergies"
                class="hidden"
                value="false"
              />
              <span
                class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                :class="{
                  'bg-white border-orange-500': selectedOption === 'false',
                }"
              >
              </span>
              <span class="text-xl">No</span>
            </label>
            <button
              @click="naviagteToPage()"
              class="bg-orange-700 w-full py-2 px-4 rounded"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { recommneded, toggleRecommned } from "../scripts/Recommnded";

export default {
  name: "AllergiesQuestion",

  setup() {
    onUnmounted(() => {
      onUnmounted(() => {
        if (recommneded.value) {
          toggleRecommned();
        }
      });
    });
    const routes = useRouter();

    const naviagteToPage = function () {
      if (selectedOption.value === "true") {
        toggleRecommned();
      } else {
        routes.push({ name: "quiz21" });
      }
    };

    const selectedOption = ref("true");

    const toggleRadio = (value) => {
      selectedOption.value = value;
    };

    return {
      selectedOption,
      naviagteToPage,
      toggleRadio,
      toggleRecommned,
      recommneded,
    };
  },
};
</script>

<style>
.checkmark {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
}

.checkmark.checked {
  background-color: #60a5fa;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path fill="%23ffffff" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
}

.radio-button {
  width: 100%;
  text-align: center;
}
</style>
