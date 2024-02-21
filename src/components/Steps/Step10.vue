<template>
  <section class="w-full space-y-16">
    <div class="prose max-w-none">
      <div>
        <h2>
          Are you taking any other medications, including GLP-1s, e.g.
          Ozempic/Saxenda/Wegovy?
        </h2>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2"
        />
        <label
          for="default-radio-1"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Yes</label
        >
      </div>
      <div class="flex items-center">
        <input
          checked
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2"
        />
        <label
          for="default-radio-2"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >No</label
        >
      </div>
    </div>

    <div class="prose max-w-none">
      <p>
        If you are presently using a GLP-1, such as Wegovy or Ozempic we're here
        to help. If you believe you need a higher dose pen than the usual 0.25mg
        starting dose it will be necessary to send documentation e.g., a copy of
        the prior prescription/invoice or a photo of the medication box
        displaying your name and the dispensing date. In the absence of
        documentation, you will be prescribed the initial starting strength pen.
      </p>
    </div>

    <div class="prose max-w-none w-full">
      <h3>Please list your current medications, their strengths, and what you take them for.</h3>
      <div class="w-full">
        <label for="answer" class="sr-only"></label>
        <textarea class="border w-full rounded-md"></textarea>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "StepTen",
  setup() {
    const routes = useRouter();

    return {};
  },
};
</script>
  
  <style>
.focus\:ring-primary-dark:focus {
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5); /* Customize the focus ring color */
}
</style>