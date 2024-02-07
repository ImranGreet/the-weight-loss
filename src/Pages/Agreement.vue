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
            <div
              class="flex items-center space-x-2 shadow border border-gray-400 p-2 cursor-pointer"
            >
              <input
                type="radio"
                id="radioNo"
                name="answer"
                class="form-radio text-primary focus:ring-2 focus:ring-primary-dark"
              />
              <label for="radioNo" class="text-xl">Yes</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Agreement",
};
</script>

<style>
</style>