<template>
    <section class="w-full bg-inherit rounded-lg shadow-sm">
      <div class="w-full flex flex-col justify-between min-h-[70vh] items-start ">
       <div class="prose max-w-none">
        <h2>Let’s find out if you are suitable for the evony programme.
<h2>This will require around 20 minutes of your time.

</h2>
        </h2>
       </div> 
      <div class="prose max-w-none">
        <p>Please ensure you have the following before you start the form:</p>
         <ul>
            <li v-for="doc,index in necessaryDocs" :key="index">{{doc.title}}</li>
         </ul>
      </div>
      </div>
    </section>
  </template>
  
  <script>
import { ref } from 'vue';

 
  export default {
  name:"Requirments",
  setup() {
    const necessaryDocs = ref([
        {
            id:1,
            title:"Your current weight"
        },{
            id:2,
            title:"Your height"
        },
        {
            id:3,
            title:"Driving licence or passport to confirm your identity"
        },{
            id:4,
            title:"Your GP's details"
        }
    ])
      return {
          necessaryDocs
      }
  }
  }
  </script>
  
  <style>
  
  </style>