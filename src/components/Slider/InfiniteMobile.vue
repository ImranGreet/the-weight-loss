<template>
  <div class="logos space-y-3">
    <div class="logos-slide space-x-3">
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
    </div>
    <div class="logos-slide-two space-x-3">
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>

      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
      <div
        class="w-full flex justify-center items-center bg-[#593560] rounded-xl"
      >
        <img src="../../assets/homepage/doctor.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileSlider",
};
</script>

<style scoped>
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 60px 0;
  background: white;
  white-space: nowrap;
  position: relative;
  width: 100%;
  margin: auto;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: flex;
  animation: 35s slide infinite linear ease-in-out;
}
.logos-slide-two {
  display: flex;
  animation: 30s slide infinite linear ease-in-out;
}

.logos-slide img {
  height: 50px;
  margin: 0 40px;
}
.logos-slide-two img {
  height: 50px;
  margin: 0 40px;
}
</style>