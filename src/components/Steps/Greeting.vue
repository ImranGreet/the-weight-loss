<template>
  <section class="w-full bg-inherit rounded-lg shadow-sm">
    <div class="w-full flex flex-col sm:flex-row justify-center items-center gap-x-5">
     <div class="w-full flex justify-center items-center ">
       <img :src="evonyHome" alt="">
     </div>
     <div class="prose max-w-none self-start">
       <h2>Congratulations on choosing to enhance your health and well-being with evony.</h2>
     </div>
    </div>
  </section>
</template>

<script>
import evonyHome from "../../assets/Stesps/evony.png"
export default {
name:"Greeting",
setup() {
    return {
        evonyHome
    }
}
}
</script>

<style>

</style>