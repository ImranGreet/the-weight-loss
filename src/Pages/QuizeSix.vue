<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full px-2 sm:px-0 lg:w-1/3 mx-auto space-y-4">
        <div class="prose max-w-none">
          <h1>Are you from any of the following ethnic groups</h1>
          <ul>
            <li><small> Asian </small></li>
            <li><small> Black African </small></li>

            <li><small> African-Caribbean or Middle Eastern </small></li>
          </ul>
          <label for="cars" class="sr-only">Choose a option</label>
          <select
            name="cars"
            id="cars"
            class="w-24 p-2 rounded-lg bg-orange-300/50 text-gray-900"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div class="space-y-2 prose">
          <h1>What is your biological sex?</h1>
          <div class="px-3 space-y-6">
            <label
              class="flex items-center space-x-2 shadow border p-2 cursor-pointer rounded-md"
            >
              <input
                @change="toggleSelected('male')"
                type="radio"
                id="radioMale"
                name="biologicalSex"
                class="hidden"
                v-model="selected"
              />
              <span
                class="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
                :class="{
                  'bg-white border-4 border-orange-500': selected === 'male',
                }"
              >
              </span>
              <span class="text-xl">Male</span>
            </label>
            <label
              class="flex items-center space-x-2 shadow border p-2 cursor-pointer rounded-md"
            >
              <input
                @change="toggleSelected('female')"
                type="radio"
                id="radioFemale"
                name="biologicalSex"
                class="hidden"
                v-model="selected"
              />
              <span
                class="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
                :class="{
                  'bg-white border-4 border-orange-500': selected === 'female',
                }"
              >
              </span>
              <span class="text-xl">Female</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "QuizSix",
  setup() {
    const routes = useRouter();
    const selected = ref(null);

    const toggleSelected = (option) => {
      selected.value = option;
      if (selected.value === "female") {
        routes.push({ name: "quizSeven" });
      } else {
        routes.push({ name: "quizNine" });
      }
    };

    return {
      selected,
      toggleSelected,
    };
  },
};
</script>

<style>
</style>
