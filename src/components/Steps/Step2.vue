<template>
    <section class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-start">
        <div
          class="w-full px-2 sm:px-0  flex flex-col justify-center items-start mx-auto"
        >
          <div class="space-y-2 prose w-full">
            <h3>Have you set a target weight that you aim to reach?*

            </h3>
  
            <div class="w-full justify-between items-start">
                <div>
                    <input type="radio" id="html" name="fav_language" value="Yes">
                    <label for="yes">Yes</label>
                </div>
                <div>
                  <input type="radio" id="css" name="fav_language" value="No">
                  <label for="no">No</label>
               </div>
  
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  
  export default {
    name: "GoalWeightQuestion",
  
    setup() {
      const routes = useRouter();
      const selectedOption = ref("");
  
     
  
      
  
      return {
        selectedOption,
       
        
      };
    },
  };
  </script>
  