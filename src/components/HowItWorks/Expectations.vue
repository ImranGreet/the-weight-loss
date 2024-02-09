<template>
  <div class="flex flex-col container mx-auto space-y-8">
    <div
      class="w-11/12 mx-auto sm:w-full flex flex-col sm:flex-row justify-between items-center p-8 bg-primary/25 rounded-xl"
      v-for="(way, index) in ways"
      :key="index"
    >
      <div class="w-full sm:w-1/2 self-start">
        <div>
          <h1 class="text-2xl font-bold flex items-center">
            <span>
              {{ way.title }}
            </span>
          </h1>
          <p class="text-gray-500">{{ way.motto }}</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 border-t-2 border-gray-500/70">
        <div v-for="(road, index) in way.process" :key="index">
          <button
            class="cursor-pointer text-sm font-semibold mt-4 flex items-center w-full justify-between"
            @click="toggleAccordion(way.id, road.id)"
          >
            <span class="flex items-center gap-x-2 justify-center">
              <span v-html="road.icon" class="w-6 h-6 mt-2"></span>
              <span> {{ road.title }}</span>
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
  setup() {
    let ways = [
      {
        id: 1,
        title: "Month 1",
        motto: "Kickstart your journey",
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
      {
        id: 2,
        title: "Month 2-3",
        motto: "Form new habits",
        process: [
          {
            id: 1,
            title: "Feel Less Hungry",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1821_200270)">
<path d="M5.85893 8.3914C6.28269 8.3914 6.69693 8.51706 7.04927 8.75249C7.40161 8.98791 7.67622 9.32253 7.83839 9.71403C8.00055 10.1055 8.04298 10.5363 7.96031 10.9519C7.87764 11.3676 7.67358 11.7493 7.37394 12.049C7.0743 12.3486 6.69254 12.5527 6.27692 12.6353C5.86131 12.718 5.43052 12.6756 5.03902 12.5134C4.64752 12.3512 4.3129 12.0766 4.07747 11.7243C3.84205 11.3719 3.71639 10.9577 3.71639 10.5339V10.1735" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1463 8.3914C9.72255 8.3914 9.30831 8.51706 8.95597 8.75249C8.60363 8.98791 8.32901 9.32253 8.16685 9.71403C8.00469 10.1055 7.96226 10.5363 8.04493 10.9519C8.1276 11.3676 8.33166 11.7493 8.6313 12.049C8.93094 12.3486 9.3127 12.5527 9.72831 12.6353C10.1439 12.718 10.5747 12.6756 10.9662 12.5134C11.3577 12.3512 11.6923 12.0766 11.9278 11.7243C12.1632 11.3719 12.2888 10.9577 12.2888 10.5339V10.1735" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.00187 10.3197H4.57336C3.96645 10.3203 3.37892 10.1061 2.91473 9.7151C2.45054 9.32411 2.13963 8.78153 2.03702 8.18336C1.93441 7.58518 2.04671 6.97 2.35405 6.44666C2.66139 5.92333 3.14395 5.52559 3.71635 5.32383V4.96335C3.71635 4.39511 3.94208 3.85014 4.34388 3.44834C4.74569 3.04653 5.29065 2.8208 5.85889 2.8208C6.42713 2.8208 6.97209 3.04653 7.3739 3.44834C7.7757 3.85014 8.00143 4.39511 8.00143 4.96335V10.534" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0033 10.3197H11.4318C12.0387 10.3203 12.6263 10.1061 13.0905 9.7151C13.5546 9.32411 13.8656 8.78153 13.9682 8.18336C14.0708 7.58519 13.9585 6.97 13.6511 6.44666C13.3438 5.92333 12.8612 5.52559 12.2888 5.32383V4.96335C12.2888 4.39511 12.0631 3.85014 11.6613 3.44834C11.2595 3.04653 10.7145 2.8208 10.1463 2.8208C9.57806 2.8208 9.0331 3.04653 8.63129 3.44834C8.22949 3.85014 8.00376 4.39511 8.00376 4.96335" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8597 7.10582H11.6454C11.2477 7.10582 10.8662 6.94781 10.5849 6.66654C10.3036 6.38528 10.1456 6.00381 10.1456 5.60604V5.39178" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.14548 7.10582H4.35974C4.75751 7.10582 5.13898 6.94781 5.42024 6.66654C5.70151 6.38528 5.85952 6.00381 5.85952 5.60604V5.39178" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1821_200270">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

`,
            description:
              "Your appetite will reduce and you’ll notice fewer cravings so you can reduce your portion sizes in line with what your body asks for.",
          },
          {
            id: 2,
            title: "Practice making healthier choices",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1821_200239)">
<path d="M8.5 13C8.5 13 3 10.1364 3 6.76136C3 6.029 3.30087 5.32664 3.83644 4.80878C4.372 4.29093 5.09837 4 5.85577 4C7.05043 4 8.07375 4.62949 8.5 5.63636C8.92625 4.62949 9.94957 4 11.1442 4C11.9016 4 12.628 4.29093 13.1636 4.80878C13.6991 5.32664 14 6.029 14 6.76136C14 10.1364 8.5 13 8.5 13Z" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1821_200239">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

`,
            description:
              "With the support of your medication, you’ll be free to make healthier choices without having to battle hunger and cravings. Start making steps towards a healthier diet and more active lifestyle.",
          },
          {
            id: 3,
            title: "Start seeing results",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5333 13.1192C18.5333 13.1192 15.8267 9.1192 11.7667 9.1192C7.70666 9.1192 4.99999 13.1192 4.99999 13.1192" stroke="#290852" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.7 9.11926L14.6667 6" stroke="#290852" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0833 10.6191L18.5333 8.43557" stroke="#290852" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.83337 9.11915L8.86673 6.00002" stroke="#290852" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.93336 10.6192L5.00014 8.43557" stroke="#290852" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8457 17.75C13.3515 17.75 14.5291 16.4946 14.5291 15C14.5291 13.5054 13.3515 12.25 11.8457 12.25C10.34 12.25 9.16241 13.5054 9.16241 15C9.16241 16.4946 10.34 17.75 11.8457 17.75Z" stroke="#290852" stroke-width="1.5"/>
</svg>


`,
            description:
              "By now you will be seeing serious results both on and off the scale.",
          },
        ],
      },
      {
        id: 3,
        title: "Months 4-5",
        motto: "Find your rhythm",
        process: [
          {
            id: 1,
            title: "Track Your Progress",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 11C11.5294 9 9.74118 8 8.23529 8C6.35294 8 4.94118 7.5 4 5" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 13H2V3" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`,
            description:
              "By now you will be seeing serious results both on and off the scale.",
          },
          {
            id: 2,
            title: "Get Into A Routine",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1247 3.00552C9.93608 2.26992 8.52264 1.98608 7.14217 2.20576C5.7617 2.42543 4.50618 3.13399 3.60458 4.2022C2.70298 5.27041 2.21538 6.62711 2.2307 8.02487C2.24603 9.42262 2.76325 10.7683 3.68804 11.8165C4.61284 12.8647 5.88359 13.5456 7.26854 13.7349C8.6535 13.9243 10.0604 13.6095 11.2326 12.8481C12.4048 12.0866 13.2643 10.9291 13.6543 9.58679C13.9108 8.70381 13.9529 7.77952 13.7861 6.88856M13.7861 6.88856C13.6994 6.42506 13.6543 6.37168 13.6543 6.37168L13.7861 6.88856Z" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.68829 7.83888L7.55258 9.77176L12.9124 4.21474" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`,
            description:
              "Build a routine that fits into your lifestyle. Learn what works for you, and work with your coach to make adjustments when something isn’t quite working for you.",
          },
          {
            id: 3,
            title: "Learn helpful strategies and tips",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.30779 14.0015H9.92321" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.77124 10.2514C4.22257 9.82281 3.77815 9.27543 3.47139 8.65041C3.16462 8.02539 3.00348 7.33898 3.00007 6.64274C2.98622 4.14118 5.00317 2.05905 7.50415 2.00135C8.4734 1.97788 9.42542 2.26022 10.2252 2.80833C11.0249 3.35643 11.6317 4.14246 11.9595 5.05489C12.2873 5.96732 12.3195 6.95981 12.0514 7.89155C11.7834 8.82328 11.2287 9.64694 10.4661 10.2457C10.2979 10.3761 10.1616 10.5431 10.0675 10.734C9.97348 10.9249 9.92412 11.1348 9.92321 11.3476V11.6938C9.92321 11.8162 9.87459 11.9336 9.78803 12.0201C9.70147 12.1067 9.58408 12.1553 9.46167 12.1553H5.76933C5.64692 12.1553 5.52952 12.1067 5.44297 12.0201C5.35641 11.9336 5.30778 11.8162 5.30778 11.6938V11.3476C5.30756 11.1361 5.25913 10.9275 5.16615 10.7375C5.07318 10.5476 4.93812 10.3813 4.77124 10.2514Z" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.07704 3.84752C9.2309 4.04194 10.1892 5.00138 10.3848 6.15523" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



`,
            description:
              "Life throws curveballs sometimes, but we’ve got you covered. Learn how to navigate challenges like stress eating and incorporating movement into busy weeks.",
          },
        ],
      },
      {
        id: 4,
        title: "Month 6+",
        motto: "Maintaining your results",
        process: [
          {
            id: 1,
            title: "Reach significant weight loss",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.02719 12.8972L5.04649 4.59545C5.07217 4.52452 5.11534 4.46123 5.172 4.41144C5.22866 4.36165 5.29697 4.32697 5.37061 4.31063C5.44424 4.29429 5.52082 4.2968 5.59322 4.31794C5.66562 4.33909 5.73152 4.37817 5.78479 4.43157L11.0678 9.71463C11.1211 9.76795 11.16 9.83384 11.1811 9.90621C11.2021 9.97857 11.2045 10.0551 11.1881 10.1286C11.1717 10.2022 11.137 10.2704 11.0873 10.327C11.0375 10.3836 10.9743 10.4267 10.9034 10.4523L2.60161 13.4716C2.52144 13.5009 2.43457 13.5067 2.35123 13.4883C2.26789 13.4699 2.19155 13.428 2.13119 13.3676C2.07084 13.3073 2.02899 13.231 2.01056 13.1476C1.99214 13.0643 1.99791 12.9774 2.02719 12.8972Z" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.81365 5.54396C9.81365 5.54396 10.0147 4.17871 11.38 4.37979C12.7453 4.58088 12.9463 3.21562 12.9463 3.21562" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.3 3V4.37999" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0002 7.42677L13.4522 7.51495" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.18858 6.95035L8.54819 11.31" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.51293 12.4138L3.0853 9.98615" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`,
            description:
              "We’re confident that you will lose at least 10% of your body weight in 6 months—if you don’t, we’ll give you your money back. You can continue on your medication until you reach your goal.",
          },
          {
            id: 2,
            title: "Taper off medication",
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
              "Once you reach your goal weight, our medical team will work with you to decide the best treatment path for you to transition into a weight maintenance phase, be that a reduction in dose or coming off medication completely.",
          },
          {
            id: 3,
            title: "Maintain your healthy habits",
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.45858 2.46016L4.78241 4.78399" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8253 13.4467C12.9123 13.4927 13.0116 13.5095 13.1089 13.4948C13.2061 13.4802 13.2961 13.4347 13.3656 13.3652C13.4351 13.2957 13.4805 13.2057 13.4952 13.1085C13.5099 13.0113 13.493 12.9119 13.4471 12.8249C13.4471 12.8249 11.664 7.06196 9.34014 4.78415C8.73602 4.18004 7.91667 3.84065 7.06233 3.84065C6.20798 3.84065 5.38863 4.18004 4.78451 4.78415C4.1804 5.38827 3.84102 6.20762 3.84102 7.06196C3.84102 7.91631 4.1804 8.73566 4.78451 9.33978C7.06233 11.6636 12.8253 13.4467 12.8253 13.4467Z" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 4.76099H4.80757" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.76084 4.80758V2" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.90231 9.36263L7.19395 11.071" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.34091 4.78391L7.0631 7.06172" stroke="#290852" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



`,
            description:
              "Now that you’re in the routine of healthy habits, you’ll be free of previous unhealthy behaviours and you can feel confident in your ability to keep the weight off.",
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
