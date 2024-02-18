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
            <span class="font-bold"> **Please note**</span>, If you are
            presently using a GLP-1, such as Wegovy or Ozempic we're here to
            help. If you believe you need a higher dose pen than the usual
            0.25mg starting dose it will be necessary to send documentation
            e.g., a copy of the prior prescription/invoice or a photo of the
            medication box displaying your name and the dispensing date. In the
            absence of documentation, you will be prescribed the initial
            starting strength pen
          </p>

          <form @submit.prevent="continueToNextStep()">
            <div class="px-3 space-y-4">
              <textarea
                v-model="userAnswer"
                placeholder="Type Your Answer Here .."
                class="w-full p-2 border border-gray-400 rounded-md"
                rows="4"
              ></textarea>
              <div class="p-2 border border-gray-300 rounded-lg">
                <label for="invoice_file"
                  >Include Your Prescription or Invoice</label
                >
                <input
                  @input="uploadInvoiceOrPhoto()"
                  type="file"
                  name=""
                  id=""
                  class="w-full p-2 border border-gray-400 rounded-md"
                />
              </div>
              <button
                
                class="bg-orange-700 w-full text-white py-2 px-4 rounded"
              >
                Continue
              </button>
            </div>
          </form>
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
    const invoiceOrDoc = ref(null);

    const uploadInvoiceOrPhoto = function (event) {
      invoiceOrDoc.value = event.target.files[0];
    };

    const continueToNextStep = () => {
      routes.push({ name: "quiz20" });
    };

    return {
      userAnswer,
      continueToNextStep,
      uploadInvoiceOrPhoto,
      invoiceOrDoc,
    };
  },
};
</script>

<style>
</style>
