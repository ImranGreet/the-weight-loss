<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-start items-start">
        <div
          class="w-full px-2 sm:px-0  flex flex-col justify-start items-start mx-auto"
        >
        
     <form class="w-full mx-auto  space-y-6">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Are pregnant, breast feeding or trying to conceive?</label>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-3/5 p-2">
      <option selected>Please select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
      <option value="FR">Not Applicable</option>
      
    </select>
  </form>
  
        </div>
      </div>

    </section>
  </template>
  
  <script>
  import { ref } from "vue";

  
  export default {
    name: "StepSix",
    setup() {
    
  
      return {
       
      };
    },
  };
  </script>
  
  <style>
  .form-checkbox:checked {
    color: #f76d57; /* Customize the color of the checkmark when checked */
  }
  .focus\:ring-primary-dark:focus {
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5); /* Customize the focus ring color */
  }
  </style>
  