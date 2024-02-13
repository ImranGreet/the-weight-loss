<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full px-2 sm:px-0 lg:w-1/3 mx-auto">
        <div class="mt-6 space-y-4">
          <p>
            Our program contains medication that isn’t suitable for pregnant
            women, therefore it is recommended to use contraception when taking
            this medication. If you do become pregnant or wish to conceive when
            taking this medication, please update us straight away.
          </p>
          <div>
            <label
              class="flex items-center space-x-2 shadow border p-2 cursor-pointer rounded-md"
            >
              <input
                type="radio"
                id="radioUnderstand"
                name="decision"
                class="hidden"
                v-model="decision"
                value="understand"
              />
              <span
                class="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
                :class="{
                  'bg-white border-4 border-red-500': decision === 'understand',
                }"
              ></span>
              <span class="text-xl">I Understand</span>
            </label>
          </div>
          <div>
            <label
              class="flex items-center space-x-2 shadow border p-2 cursor-pointer rounded-md"
            >
              <input
                type="radio"
                id="radioDoNotContinue"
                name="decision"
                class="hidden"
                v-model="decision"
                value="doNotContinue"
              />
              <span
                class="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
                :class="{
                  'bg-white border-4 border-red-500':
                    decision === 'doNotContinue',
                }"
              ></span>
              <span class="text-xl">I don’t wish to continue</span>
            </label>
          </div>
          <button
            @click="handleDecision"
            class="bg-orange-700 w-full py-2 px-4 rounded"
          >
            Continue
          </button>
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
    const decision = ref("understand");

    const handleDecision = function () {
      if (decision.value === "understand") {
        // Handle "I Understand" logic
      } else if (decision.value === "doNotContinue") {
        // Handle "I don’t wish to continue" logic
      }
    };

    return {
      decision,
      handleDecision,
    };
  },
};
</script>

<style>
</style>
