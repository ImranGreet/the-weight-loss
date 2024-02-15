<template>
  <div class="container mx-auto py-20">
    <div class="prose max-w-none py-14">
      <h1>Learn about weight loss medications:</h1>
    </div>

    <div
      class="w-full flex flex-col lg:flex-row justify-start items-center gap-x-4"
    >
      <div
        v-for="(equipment, index) in medicationsEquipments"
        :key="index"
        class="w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row justify-between md:max-w-[360px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-4"
      >
        <div
          class="flex flex-col justify-between p-4 leading-normal self-start"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ equipment.title }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ equipment.brand }}
          </p>
          <router-link
            to="#"
            class="px-6 py-3 rounded-lg text-center border border-gray-600"
            >Learn More</router-link
          >
        </div>

        <img
          class="object-cover w-full rounded-t-lg h-52 md:w-20 md:rounded-none md:rounded-s-lg"
          loading="lazy"
          :src="equipment.photo"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Weightlossmedication",
  setup() {
    const medicationsEquipments = ref([
      {
        id: 1,
        title: "Wegovy",
        brand: "Semaglutide",
        photo:
          "https://www.joinvoy.com/_next/image?url=https%3A%2F%2Fjoinvoycom.s3.eu-west-1.amazonaws.com%2FWEB_UK%2Fmedications%2Fproduct_carousel%2FMedications_Product_Wegovy_118x184%25402x.png&w=1920&q=75",
      },
      {
        id: 2,
        title: "Saxenda",
        brand: "Liraglutide",
        photo:
          "https://www.joinvoy.com/_next/image?url=https%3A%2F%2Fjoinvoycom.s3.eu-west-1.amazonaws.com%2FWEB_UK%2Fmedications%2Fproduct_carousel%2FMedications_Product_Saxenda_118x184%25402x.png&w=1920&q=75",
      },
      {
        id: 3,
        title: "Alli",
        brand: "Orlistat",
        photo:
          "https://www.joinvoy.com/_next/image?url=https%3A%2F%2Fjoinvoycom.s3.eu-west-1.amazonaws.com%2FWEB_UK%2Fproducts%2Falli%2FMedications_Product_Alli-2_118x184.webp&w=1920&q=75",
      },
    ]);
    return {
      medicationsEquipments,
    };
  },
};
</script>

<style>
</style>