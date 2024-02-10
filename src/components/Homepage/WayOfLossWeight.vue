<template>
  <div class="flex flex-col container mx-auto space-y-8">
    <div
      class="w-11/12 mx-auto sm:w-full flex flex-col sm:flex-row justify-between items-center p-8 bg-primary/25 rounded-xl gap-x-12"
      v-for="(way, index) in ways"
      :key="index"
    >
      <div class="w-full sm:w-1/2 self-start">
        <div class="prose max-w-none">
          <h1>
            <span>
              {{ way.title }}
            </span>
          </h1>
          <p class="text-gray-500">{{ way.motto }}</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 space-y-5">
        <div
          v-for="(road, index) in way.process"
          :key="index"
          class="border border-gray-300/15 p-3 rounded-lg"
        >
          <button
            class="cursor-pointer text-sm font-semibold mt-4 flex items-center w-full justify-between"
            @click="toggleAccordion(way.id, road.id)"
          >
            <span class="flex items-center gap-x-2 justify-center">
              <span
                class="w-5 h-5 mt-2 p-4 rounded-full text-white flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                >{{ index + 1 }}</span
              >
              <span class="capitalize text-xl"> {{ road.title }}</span>
            </span>
            <svg
              v-if="!isActive(way.id, road.id)"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <svg
              v-if="isActive(way.id, road.id)"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>

          <transition name="accordion" mode="out-in">
            <p
              v-if="isActive(way.id, road.id)"
              :key="way.id"
              class="text-gray-600"
            >
              {{ road.description }}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "WayOfLossWeight",
  setup() {
    let ways = [
      {
        id: 1,
        title: "Introducing a new way to lose weight",
        motto:
          "Kickstart your weight loss with breakthrough medication and achieve lasting results with a personalised program.",
        process: [
          {
            id: 1,
            title: "Start medication",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.75 2L13.375 4.625" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.6875 3.3125L12.0625 7.6875" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.34375 3.96875L3.44047 8.87203C3.35858 8.95401 3.31255 9.06514 3.3125 9.18102V12.0625H6.19398C6.30986 12.0624 6.42099 12.0164 6.50297 11.9345L11.4062 7.03125" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.04688 6.26562L7.46875 7.6875" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.73438 7.57812L6.15625 9" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.875 5.5L12.0625 3.3125" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.3125 12.0625L2 13.375" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
            description:
              "You may feel the effects of your medication working within the first week but for everyone is different so for some people it can take up to 8-9 weeks to feel the full effect.",
          },
          {
            id: 2,
            title: "Meet your coach",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 13.8667C11.2401 13.8667 13.8667 11.2401 13.8667 8C13.8667 4.75993 11.2401 2.13333 8 2.13333C4.75993 2.13333 2.13333 4.75993 2.13333 8C2.13333 11.2401 4.75993 13.8667 8 13.8667Z" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.76978 12.0574C3.83863 12.0144 3.91082 11.977 3.98567 11.9455L5.75897 11.0945C6.061 11.001 6.32628 10.8155 6.51771 10.5639C6.6017 10.4535 6.66963 10.3329 6.72024 10.2055" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.2302 12.0582C12.1614 12.0152 12.0892 11.9778 12.0143 11.9463L10.2426 11.0953C9.8022 10.8634 9.46891 10.6112 9.29942 10.2636" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.3467C9.51203 10.3467 10.7378 9.12092 10.7378 7.60889C10.7378 6.09685 9.51203 4.87111 8 4.87111C6.48797 4.87111 5.26222 6.09685 5.26222 7.60889C5.26222 9.12092 6.48797 10.3467 8 10.3467Z" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
            description:
              "Your dedicated coach will be there to support you throughout your journey. In your first session, you will share your challenges, motivations and goals so you can work on a plan of action together.",
          },
          {
            id: 3,
            title: "your diet and lifestyle goals",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 14.5V12.5" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5Z" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 1.5V3.5" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.5 8H3.5" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 8H12.5" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
            description:
              "While your medication is getting to work, you’ll start making small changes towards a healthier diet and lifestyle.",
          },
        ],
      },
    ];

    const activeAccordions = ref([]);

    const toggleAccordion = (wayId, processId) => {
      const index = activeAccordions.value.findIndex(
        (acc) => acc.wayId === wayId && acc.processId === processId
      );

      if (index !== -1) {
        activeAccordions.value.splice(index, 1);
      } else {
        activeAccordions.value = [{ wayId, processId }];
      }
    };

    const isActive = (wayId, processId) => {
      const index = activeAccordions.value.findIndex(
        (acc) => acc.wayId === wayId && acc.processId === processId
      );
      return index !== -1;
    };

    return {
      ways,
      activeAccordions,
      toggleAccordion,
      isActive,
    };
  },
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.5s;
}
.accordion-enter,
.accordion-leave-to {
  opacity: 0;
}
</style>
