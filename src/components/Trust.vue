<template>
  <section class="max-w-7xl mx-auto py-20">
    <div class="w-full border-b border-gray-600/15">
      <div class="text-start">
        <h3>Rated Excellent</h3>
        <div class="flex justify-start gap-x-2">
          <i>*</i>
          <h4>Trust Pilot</h4>
        </div>
      </div>
    </div>
    <div
      class="w-full flex justify-between items-center flex-col lg:flex-row py-20"
    >
      <div class="w-full grid grid-cols-4">
        <h1
          v-for="(trust, index) in trustedBy"
          :key="index"
          class="text-center"
        >
          <span> <i v-html="trust.icon" class="inline-block"></i></span
          ><span>Trusted by</span> 10k UK customers
        </h1>
      </div>
    </div>
    <!-- accordion -->
    <div class="w-full flex flex-col justify-between lg:flex-row">
      <div class="prose max-w-none space-y-3">
        <h1>Introducing a new way to lose weight</h1>
        <p>
          Kickstart your weight loss with breakthrough medication and achieve
          lasting results with a personalised program.
        </p>
      </div>
      <div class="w-full">
        <Accordion />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import Accordion from "../components/utility/Accordion.vue";
export default {
  name: "Trust",
  components: { Accordion },
  setup() {
    const trustedBy = ref([
      {
        id: 1,
        title: "Trusted by",
        who: "10k UK customers",
        icon: `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="11.05" cy="11.25" r="3.25" fill="#FF9D5C" stroke="#290852" stroke-width="1.5"/>
              <circle cx="4.3" cy="5.25" r="1.75" fill="#FF9D5C" stroke="#290852" stroke-width="1.5"/>
             <circle cx="4.8" cy="18.5" r="1.75" fill="#FF9D5C" stroke="#290852" stroke-width="1.5"/>
             <circle cx="19.8" cy="11.5" r="1.75" fill="#FF9D5C" stroke="#290852" stroke-width="1.5"/>
            <path d="M5.175 6.07959L8.175 9.07976" stroke="#290852" stroke-width="1.5"/>
           <path d="M8.55005 14L5.98917 17.3513" stroke="#290852" stroke-width="1.5"/>
           <path d="M18.3 11.5625H14.175" stroke="#290852" stroke-width="1.5"/>
          </svg>

        `,
      },
      {
        id: 2,
        title: "Trusted by",
        who: "10k UK customers",
        icon: `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2 10.8C19.2 10.4817 19.0736 10.1765 18.8485 9.95148C18.6235 9.72643 18.3183 9.6 18 9.6H14.4V6C14.4 5.68174 14.2736 5.37652 14.0485 5.15148C13.8235 4.92643 13.5183 4.8 13.2 4.8H10.8C10.4817 4.8 10.1765 4.92643 9.95148 5.15148C9.72643 5.37652 9.6 5.68174 9.6 6V9.6H6C5.68174 9.6 5.37652 9.72643 5.15147 9.95148C4.92643 10.1765 4.8 10.4817 4.8 10.8V13.2C4.8 13.5183 4.92643 13.8235 5.15147 14.0485C5.37652 14.2736 5.68174 14.4 6 14.4H9.6V18C9.6 18.3183 9.72643 18.6235 9.95148 18.8485C10.1765 19.0736 10.4817 19.2 10.8 19.2H13.2C13.5183 19.2 13.8235 19.0736 14.0485 18.8485C14.2736 18.6235 14.4 18.3183 14.4 18V14.4H18C18.3183 14.4 18.6235 14.2736 18.8485 14.0485C19.0736 13.8235 19.2 13.5183 19.2 13.2V10.8Z" fill="#FF9D5C" stroke="#290852" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        `,
      },
      {
        id: 3,
        title: "Trusted by",
        who: "10k UK customers",
        icon: `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1162_22474)">
<path d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z" fill="white" stroke="#290852" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15C8.98755 15.5342 8.84619 16.05 8.59569 16.4754C8.34519 16.9007 7.99807 17.2143 7.60287 17.3722L5.2825 18.8109C5.18456 18.8641 5.09009 18.9273 5 19" fill="#FF9D5C"/>
<path d="M9 15C8.98755 15.5342 8.84619 16.05 8.59569 16.4754C8.34519 16.9007 7.99807 17.2143 7.60287 17.3722L5.2825 18.8109C5.18456 18.8641 5.09009 18.9273 5 19" stroke="#290852" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19C18.9099 18.9273 18.8153 18.8641 18.7174 18.8109L16.3978 17.3722C15.5458 16.7931 15 16.1385 15 15" fill="#FF9D5C"/>
<path d="M19 19C18.9099 18.9273 18.8153 18.8641 18.7174 18.8109L16.3978 17.3722C15.5458 16.7931 15 16.1385 15 15" stroke="#290852" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="#FF9D5C" stroke="#290852" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1162_22474">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


        `,
      },
      {
        id: 4,
        title: "Trusted by",
        who: "10k UK customers",
        icon: `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3653 18.3653C20.1859 16.5447 18.6467 12.0537 14.9274 8.33443C11.2081 4.61511 6.71711 3.0759 4.8965 4.89651C3.07589 6.71712 4.6151 11.2081 8.33442 14.9274C12.0537 18.6467 16.5447 20.186 18.3653 18.3653Z" fill="#FF9D5C" stroke="#290852" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.9274 14.9274C18.6467 11.2081 20.1859 6.71711 18.3653 4.89651C16.5447 3.0759 12.0537 4.61511 8.33442 8.33443C4.6151 12.0537 3.07589 16.5447 4.8965 18.3653C6.71711 20.186 11.2081 18.6467 14.9274 14.9274Z" stroke="#290852" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6311 13.1309C12.4595 13.1309 13.1311 12.4593 13.1311 11.6309C13.1311 10.8025 12.4595 10.1309 11.6311 10.1309C10.8026 10.1309 10.1311 10.8025 10.1311 11.6309C10.1311 12.4593 10.8026 13.1309 11.6311 13.1309Z" fill="#FF9D5C" stroke="#290852" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        `,
      },
    ]);
    return {
      trustedBy,
    };
  },
};
</script>

<style>
</style>