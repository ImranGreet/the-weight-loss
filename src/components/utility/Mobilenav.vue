<template>
  <div>
    <div
      class="w-full flex justif-center items-center shadow py-2 border-b-2 border-gray-300 fixed inset-x-0 bg-white"
      :class="{ transition: showMobile }"
    >
      <img
        src="../../assets/1.png"
        alt=""
        class="w-1/2 mx-auto h-8 object-center"
      />
    </div>
    <section
      class="bg-white fixed left-0 right-0 h-screen"
      :class="{ 'w-full': showMobile, 'w-0': !showMobile }"
    >
      <div
        class="w-full flex justif-center items-center shadow py-2 border-b-2 border-gray-300 fixed inset-x-0 bg-white"
      >
        <img
          src="../../assets/1.png"
          alt=""
          class="w-1/2 mx-auto h-8 object-center"
        />
      </div>
      <div
        class="w-full flex-col justif-between items-start mt-10"
        :class="{ hidden: !showMobile, flex: showMobile }"
      >
        <h2
          class="text-xl px-8 my-8"
          :class="{ hidden: showProgrumme, block: !showProgrumme }"
        >
          Menu
        </h2>
        <div
          class="w-full flex flex-col justify-start items-start space-y-6 px-8"
        >
          <button
            @click="showProgrumme = !showProgrumme"
            class="w-full flex justify-between items-center border-b border-gray-300 py-4"
            :class="{
              'bg-gray-300/25 px-2 py-4 rounded-lg w-full mt-10 ':
                showProgrumme,
            }"
          >
            <div class="flex gap-x-2">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  :class="{
                    'w-4 h-4 inline-block': showProgrumme,
                    hidden: !showProgrumme,
                  }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span :class="{ 'ml-20': showProgrumme }" class="tracking-widest"
                >Programme</span
              >
            </div>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                :class="{
                  'w-4 h-4 inline-block': !showProgrumme,
                  hidden: showProgrumme,
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
          <ul
            class="space-y-5 w-full tracking-wider"
            :class="{ block: showProgrumme, hidden: !showProgrumme }"
          >
            <li class="w-full flex justify-between">
              <router-link
                :to="{ name: 'how' }"
                class="border-b border-gray-300 block w-full py-2"
              >
                How It Works
              </router-link>
              <span v-html="chevronRight"></span>
            </li>
            <li class="w-full flex justify-between">
              <router-link
                :to="{ name: 'medications' }"
                class="border-b border-gray-300 block w-full py-2"
                >Medication</router-link
              >
              <span v-html="chevronRight"></span>
            </li>
            <li class="w-full flex justify-between">
              <router-link
                to="#"
                class="border-b border-gray-300 block w-full py-2"
                >Coaching</router-link
              >
              <span v-html="chevronRight"></span>
            </li>
          </ul>
        </div>
        <ul
          class="mt-5 space-y-6 px-8 w-full tracking-wide"
          :class="{ block: !showProgrumme, hidden: showProgrumme }"
        >
          <li class="flex justify-between">
            <router-link
              to="#"
              class="border-b border-gray-300 block w-full py-2"
              >Result</router-link
            >
            <span v-html="chevronRight"> </span>
          </li>
          <li>
            <p>Account</p>
          </li>
          <li class="flex justify-between">
            <router-link
              to="#"
              class="border-b border-gray-300 block w-full py-2"
              >login</router-link
            >
            <span v-html="chevronRight"></span>
          </li>
          <li>
            <router-link
              to="#"
              class="border-b border-gray-300 block w-full py-2"
              >Get In Touch</router-link
            >
          </li>
          <li class="flex justify-between">
            <router-link to="#" class="flex justify-between w-full">
              <div class="flex flex-col">
                <span>+020-390-852</span>
                <span>from 0.90 to 5.30</span>
              </div>
              <span v-html="chevronRight" class="self-center"></span>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="absolute -top-3 left-5">
        <button
          @click="showMobile = !showMobile"
          v-if="!showMobile"
          v-html="MobileNavBar"
          class="w-20 h-20"
        ></button>
        <button
          @click="showMobile = !showMobile"
          v-else
          v-html="MobileNavController"
          class="w-20 h-20"
        ></button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";

export default {
  name: "MobileNav",
  setup() {
    const routes = useRouter();
    let MobileNavController = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
`;
    let MobileNavBar = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
`;
    let chevronRight = `
<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>`;
    let showMobile = ref(false);
    let showProgrumme = ref(false);

    routes.afterEach(() => {
      showMobile.value = false;
    });
    return {
      MobileNavController,
      MobileNavBar,
      showMobile,
      showProgrumme,
      chevronRight,
      routes,
    };
  },
};
</script>

<style>
</style>