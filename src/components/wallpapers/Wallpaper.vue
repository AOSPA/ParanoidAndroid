<template>
  <div class="wallpaper" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="require('../../assets/wallpapers/' + wallpaper.imageUrl)"> 
    <div class="overlay" v-if="hover">
      <a 
      :href="require('../../assets/wallpapers/' + wallpaper.imageUrl)"
      class="download-button" 
      :download="getFileName(wallpaper.imageUrl)"
      target="_blank">Download</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wallpaper: Object
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    getFileName(url) {
      const parts = url.split('/');
      return parts[parts.length - 1];
    }
  }
};
</script>

<style scoped>
.wallpaper {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.wallpaper img {
  width: 250px;
  height: 555px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
}

.overlay button {
  background: none;
  border: 1px solid white;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
}

.overlay button:hover {
  background: white;
  color: black;
}

.wallpaper:hover .overlay {
  opacity: 1;
}
.download-button {
  position: absolute;
  bottom: 25px;
  right: 15px;
  background-color: var(--downloadWallpaperBackground);
  color: var(--downloadWallpaperColor);
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

.download-button:hover {
  background-color: var(--downloadWallpaperBackgroundHover);
}
</style>
