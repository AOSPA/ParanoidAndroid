<template>
  <img
    loading="lazy"
    :src="require('../../' + background)"
    :width="450"
    :height="450"
    alt="banner"
  />
</template>
<script>
export default {
  props: ["width", "height"],
  name: "Banner",
  data() {
    return {
      background: localStorage.getItem("banner"),
    };
  },
  mounted() {
    window.addEventListener("theme-key-localstorage-changed", (event) => {
      this.background = event.detail.banner;
    });
  },
};
</script>
<style></style>
