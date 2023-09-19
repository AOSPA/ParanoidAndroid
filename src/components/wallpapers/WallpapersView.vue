<template>
  <div>
    <section v-for="(versionData, index) in wallpapers" :key="index">
      <h5>{{ versionData.version }}</h5>
      <div
        class="wallpapers-container"
        ref="wallpapersContainer"
        @scroll="handleScroll"
      >
        <div class="carousel-wrapper" :style="{ transform: `translateX(${translateX}px)` }">
          <div
            v-for="(wp, wpIndex) in versionData.wallpapers"
            :key="wpIndex"
            class="wallpaper-item"
          >
            <Wallpaper :wallpaper="wp" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import WALLPAPERS from "../../store/Wallpapers";
import Wallpaper from "../wallpapers/Wallpaper.vue";

export default {
  components: {
    Wallpaper,
  },
  data() {
    return {
      wallpapers: WALLPAPERS,
      translateX: 0,
    };
  },
  methods: {
    handleScroll() {
      const wallpapersContainer = this.$refs.wallpapersContainer;
      const containerWidth = wallpapersContainer.offsetWidth;
      const carouselWrapper = this.$refs.carouselWrapper;
      const totalWidth = carouselWrapper.scrollWidth - containerWidth;
      const scrollPercentage = (wallpapersContainer.scrollLeft / totalWidth) * 100;
      this.translateX = -scrollPercentage;
    },
  },
};
</script>

<style scoped>
section {
  margin: 10px;
  text-align: center;
}

.wallpapers-container {
  display: -webkit-inline-box;
  justify-content: center;
  overflow: auto;
  width: 100%;
}

::-webkit-scrollbar {
  display: none;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.3s ease;
}

.wallpaper-item {
  margin: 20px;
  width: 250px;
  height: 555px;
}

.wallpaper-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
