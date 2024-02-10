<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full px-2 sm:px-0 lg:w-1/3 mx-auto">
        <div class="space-y-2 prose">
          <h1>Do you agree and consent to the following?</h1>
          <div class="px-3">
            <ol class="list-disc">
              <li>I am over 18 years old and live in the UK.</li>
              <li>
                I will be the sole user of any medication offered to me through
                this service.
              </li>
              <li>
                I confirm all answers are provided by me, and are completely
                truthful.
              </li>
            </ol>
            <label
              class="flex items-center space-x-2 shadow border border-gray-400 p-2 cursor-pointer rounded-md"
              @click="naviagteToPage()"
            >
              <input type="radio" id="radioYes" name="answer" class="hidden" />
              <span
                class="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
                :class="{ 'bg-orange-700': selected }"
              >
                <span
                  v-if="selected"
                  class="inner-circle w-3 h-3 rounded-full bg-white"
                ></span>
              </span>
              <span class="text-xl">Yes</span>
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
  name: "Agreement",
  setup() {
    const routes = useRouter();
    const selected = ref(false);

    const naviagteToPage = function () {
      selected.value = !selected.value;
      routes.push({ name: "quizTwo" });
    };

    return {
      selected,
      naviagteToPage,
    };
  },
};
</script>

<style>
</style>
