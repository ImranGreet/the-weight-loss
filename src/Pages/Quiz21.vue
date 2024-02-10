<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full px-2 sm:px-0 lg:w-1/3 mx-auto">
        <div class="space-y-2 prose">
          <h1>
            If you have any other allergies, please tell us about them here?
          </h1>
          <div class="px-3">
            <textarea
              v-model="userAnswer"
              placeholder="Type Your Answer Here .."
              class="w-full p-2 border border-gray-400 rounded-md"
              rows="4"
            ></textarea>
            <button
              @click="continueToNextStep()"
              :disabled="userAnswer.trim() === ''"
              class="bg-orange-700 w-full text-white py-2 px-4 rounded"
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
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "AllergiesDetails",
  setup() {
    const routes = useRouter();
    const userAnswer = ref("");

    const continueToNextStep = () => {
      routes.push({ name: "quiz22" });
    };

    return {
      userAnswer,
      continueToNextStep,
    };
  },
};
</script>

<style>
</style>
