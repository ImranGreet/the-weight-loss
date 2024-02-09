<template>
  <footer class="relative h-auto z-0">
    <div class="mx-auto w-full container p-4 py-10 lg:py-36">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <h2 class="text-2xl font-black leading-8">Have a question?</h2>
          <small class="text-sm tracking-widest leading-7"
            >Whatever it is, get in touch:</small
          >
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              PROGRAMME
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-2">
              <li>
                <router-link :to="{ name: 'how' }" class="hover:underline"
                  >How it works</router-link
                >
              </li>
              <li>
                <a href="#" class="hover:underline">Medication</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Coaching</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              theweight doc
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <router-link to="#" class="hover:underline"
                  >results</router-link
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Help
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <router-link to="#" class="hover:underline"
                  >Help Centre (FAQ)</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="mb-6 md:mb-0">
          <router-link :to="{ name: 'home' }" class="flex items-center">
            <img
              src="../../assets/1.png"
              class="h-8 me-3"
              alt="FlowBite Logo"
            />
          </router-link>
          <div class="space-y-2">
            <ul class="flex justify-start flex-wrap gap-x-2">
              <li>
                <router-link to="#">Privacy Policy </router-link>
              </li>
              <li>
                <router-link to="#">Terms & Conditions </router-link>
              </li>
              <li>
                <router-link to="#">Terms of Sale</router-link>
              </li>
              <li>
                <router-link to="#">Complaints</router-link>
              </li>
            </ul>
            <p>
              <span class="text-sm font-extrabold">Pharmacies: </span> Voy
              Pharmacy
            </p>
            <p class="font-black text-sm tracking-wide">
              Superintendent Pharmacist
            </p>
            <p>Anish Devji Bhalsod</p>
            <p>
              <span class="text-sm font-extrabold">GPhC Registration:</span>
              2086847
            </p>
            <p>Copyright 2024 Voy™. All rights reserved.</p>
          </div>
        </div>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>

          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fill-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>

          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>

            <span class="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full h-5 block lg:hidden"></div>
    <div class="w-full absolute bottom-0 inset-x-0 h-20 shadow-md bg-primary">
      <div class="container mx-auto h-full">
        <div
          class="w-full h-full flex justify-center sm:justify-between items-center text-center"
        >
          <p class="tracking-wider leading-snug hidden sm:block">
            Take the first step towards weight loss that lasts.
          </p>
          <router-link
            to="#"
            class="px-10 py-3 border border-white w-11/12 mx-auto sm:w-auto"
            >Ami I Eligible</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import router from "../../router";

export default {
  name: "Footer",
  components: { router },
};
</script>

<style>
</style>