<template>
  <div class="flex container mx-auto">
    <div class="border border-gray-600 w-full flex">
      <div class="w-1/2">
        <div v-for="way in ways" :key="way.id">
          <h1 class="text-2xl font-bold">{{ way.title }}</h1>
          <p class="text-gray-500">{{ way.motto }}</p>
        </div>
      </div>
      <div class="w-1/2">
        <AccordionItem
          v-for="way in ways"
          :key="way.id"
          :way="way"
          :activeAccordion="activeAccordion"
          :toggleAccordion="toggleAccordion"
          :getDescription="getDescription"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AccordionItem from "./Expectations.vue";

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
    const activeAccordion = ref(null);

    const toggleAccordion = (wayId) => {
      activeAccordion.value = activeAccordion.value === wayId ? null : wayId;
    };

    const getDescription = (processArray) => {
      const selectedProcess = processArray.find(
        (process) => process.id === activeAccordion.value
      );
      return selectedProcess ? selectedProcess.description : "";
    };

    return {
      ways,
      activeAccordion,
      toggleAccordion,
      getDescription,
    };
  },
  components: {
    AccordionItem,
  },
};
</script>
