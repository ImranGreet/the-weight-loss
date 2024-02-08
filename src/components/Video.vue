<template>
  <section class="w-full h-96 sm:h-screen lg:h-[750px]" @click="playVideo">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <video
        ref="videoPlayer"
        autoplay
        muted
        playsinline
        class="w-full h-full object-cover rounded-[36px] lg:rounded-[96px]"
      >
        <source
          src="https://joinvoycom.s3.eu-west-1.amazonaws.com/WEB_UK/videos/homepage_hero_short.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: "Video",
  methods: {
    playVideo() {
      const videoPlayer = this.$refs.videoPlayer;
      if (videoPlayer.paused) {
        videoPlayer.play();
      }
    },
  },
};
</script>

<style>
</style>
