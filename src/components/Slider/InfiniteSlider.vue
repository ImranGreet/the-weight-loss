<template>
  <div class="w-full grid grid-cols-2 gap-x-3">
    <div class="slider">
      <div class="slide-track flex flex-col">
        <div class="slide">
          <img
            src="../../assets/homepage/doctor.png"
            class="w-full h-full"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/head 1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/model 2.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Layer 3.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/phone.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/SLim_Sliding_Box_Packaging_Mockup_1 copy.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Untitled-1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/model 2.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/phone.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Untitled-1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/graph Screenshot 2024-02-08 155706.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/model 1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Untitled-1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Layer 3.png"
            alt=""
            class="w-full h-full object-center"
          />
        </div>
      </div>
    </div>
    <div class="slider">
      <div class="slide-track flex flex-col">
        <div class="slide">
          <img
            src="../../assets/homepage/doctor.png"
            class="w-full h-full"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/head 1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/model 2.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Layer 3.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/phone.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/SLim_Sliding_Box_Packaging_Mockup_1 copy.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Untitled-1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/model 2.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/phone.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Untitled-1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/graph Screenshot 2024-02-08 155706.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/model 1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Untitled-1.png"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="slide">
          <img
            src="../../assets/homepage/Layer 3.png"
            alt=""
            class="w-full h-full object-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-250px * 7));
  }
}
.slider {
  background: white;

  height: 70vh;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 400px;
}
.slider::before,
.slider::after {
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 20s linear infinite;
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 400px;
  width: 450px;
}
</style>