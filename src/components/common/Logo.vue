<template>
  <!--   <img
    class="color_animation"
    :src="require('../../sapphire.png')"
    :width="width"
    alt="logo"
  /> -->
  <img loading="lazy" :src="require('../../' + logo)" :width="width" alt="logo" />
</template>
<script>
export default {
  props: ["width"],
  name: "Logo",
  data() {
    return {
      logo: localStorage.getItem("logo"),
    };
  },
  mounted() {
    window.addEventListener("theme-key-localstorage-changed", (event) => {
      this.logo = event.detail.logo;
    });
  },
};
</script>
<style></style>
