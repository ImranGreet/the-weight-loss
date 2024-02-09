<template>
  <section class="w-full py-20">
    <div class="container mx-auto">
      <div class="w-full flex flex-col lg:flex-row justify-center items">
        <div class="w-full flex justify-center">
          <img
            src="https://joinvoycom.s3.eu-west-1.amazonaws.com/WEB_UK/how_it_works/content_block/glp-1/HIW_ContentBlock_GLP1_Desktop%402x.jpg"
            alt=""
          />
        </div>
        <div class="w-full flex flex-col justify-center items-center">
          <div class="space-y-3 prose">
            <h1>
              Reduce hunger and cravings with revolutionary GLP-1 medication
            </h1>
            <ul>
              <li>
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
                Reduces hunger and cravings
              </li>
            </ul>
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
        ways: [
          "Reduces hunger and cravings",
          "Clinically-proven weight loss medication",
          "Lose up to 10-15% bodyweight¹",
        ],
        note: "68 weeks clinical trial of weekly Semaglutide injection (Wegovy) with 1,961 participants.",
        link: true, 
      },
    ]);
    return {
      procudures
    };
  },
};
</script>

<style>
</style>