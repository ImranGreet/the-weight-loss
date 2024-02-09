<template>
  <section class="w-full py-20">
    <div
      class="container mx-auto space-y-4 sm:space-y-6 lg:space-y-20 px-6 lg:px-12"
    >
      <div v-for="(procudure, index) in procudures" :key="index">
        <div
          class="w-full flex flex-col justify-center items"
          :class="{
            'lg:flex-row-reverse': index % 2 === 0,
            'lg:flex-row': index % 2 !== 0,
          }"
        >
          <div class="w-full flex justify-center">
            <img :src="procudure.image" alt="" class="rounded-2xl" />
          </div>
          <div class="w-full flex flex-col justify-center items-center">
            <div class="space-y-3 prose">
              <h1>
                {{ procudure.title }}
              </h1>
              <ul>
                <li v-for="(way, index) in procudure.ways" :key="index">
                  <i
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </i>
                  {{ way }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Procedure",
  setup() {
    let procudures = ref([
      {
        id: 1,
        title: "Reduce hunger and cravings with revolutionary GLP-1 medication",
        image:
          "https://joinvoycom.s3.eu-west-1.amazonaws.com/WEB_UK/how_it_works/content_block/glp-1/HIW_ContentBlock_GLP1_Desktop%402x.jpg",
        ways: [
          "Reduces hunger and cravings",
          "Clinically-proven weight loss medication",
          "Lose up to 10-15% bodyweight¹",
        ],
        note: "68 weeks clinical trial of weekly Semaglutide injection (Wegovy) with 1,961 participants.",
        link: true,
      },
      {
        id: 2,
        title:
          "Build healthy habits for lasting change with a dedicated health coach",
        image:
          "https://joinvoycom.s3.eu-west-1.amazonaws.com/WEB_UK/how_it_works/content_block/lifestyle_habits/static/HIW_ContentBlock_LifestyleHabits_Desktop.jpg",
        ways: [
          "Match with a coach who understands you",
          "Create a clear plan to reach your goals",
          "Stay motivated and accountable",
        ],
        note: null,
        link: true,
      },
      {
        id: 3,
        title: "Digital tools to help you stay on track",
        image:
          "https://joinvoycom.s3.eu-west-1.amazonaws.com/WEB_UK/how_it_works/content_block/digital_tools/HIW_ContentBlock_DigitalTools_Desktop%402x-100.jpg",
        ways: [
          "Track your weight and progress",
          "Get feedback from your coach",
          "16 week behavioural change course",
        ],
        note: null,
        link: false,
      },
    ]);

    let ways = [
      {
        id: 1,
        title: "Month 1",
        motto: "Kickstart your journey",
        process: [
          {
            id: 1,
            title: "Start medication",
            description:
              "You may feel the effects of your medication working within the first week but for everyone is different so for some people it can take up to 8-9 weeks to feel the full effect.",
          },
          {
            id: 2,
            title: "Start medication need ",
            description:
              "You may feel the effects no way of your medication working within the first week but for everyone is different so for some people it can take up to 8-9 weeks to feel the full effect.",
          },
        ],
      },
      {
        id: 2,
        title: "Month 2",
        motto: "Kickstart your journey from drible",
        process: [
          {
            id: 1,
            title: "Start medication and gym",
            description:
              "You may feel the effects of your medication working within the first week but for everyone is different so do it  for some people it can take up to 8-9 weeks to feel the full effect.",
          },
          {
            id: 2,
            title: "Start medication and take medicine",
            description:
              "You may feel the effects  meeicine of your medication working within the first week but for everyone is different so do it  for some people it can take up to 8-9 weeks to feel the full effect.",
          },
        ],
      },
    ];
    return {
      procudures,
      ways,
    };
  },
};
</script>

<style>
</style>