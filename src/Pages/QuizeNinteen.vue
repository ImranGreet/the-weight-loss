<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full px-2 sm:px-0 lg:w-1/3 mx-auto">
        <div class="space-y-2 prose">
          <h1>
            Please list your current medications, their strengths, and what you
            take them for.
          </h1>
          <p>
            **Please note**, if you're currently taking a GLP-1, e.g. Wegovy,
            you will be required to provide documentation (i.e., a copy of the
            previous prescription/invoice or a photo of the medication box with
            the dispensing label showing your name and the dispensing date) to
            either remain or up-titrate to the next higher-strength medication.
            You will be prescribed the initial starting strength pen if
            documentation is not provided.
          </p>
          <div class="px-3">
            <textarea
              v-model="userAnswer"
              placeholder="Type Your Answer Here .."
              class="w-full p-2 border border-gray-400 rounded-md"
              rows="4"
            ></textarea>
            <button
              @click="continueToNextStep"
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
  name: "Quize19",
  setup() {
    const routes = useRouter();
    const userAnswer = ref("");

    const continueToNextStep = () => {
      routes.push({ name: "quiz19" });
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
