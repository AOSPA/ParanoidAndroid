<template>
  <img :src="flag" class="flag" width="30px" alt="logo">
</template>
<script>
export default {
  props: ["width", "country"],
  name: "Flag",
  computed: {
      return "https://www.worldometers.info/img/flags/small/tn_" + country + "-flag.gif";
    },
  },
};

</script>
<style>
.flag {
  padding-left: 5px;
  padding-top: 5px;
}

</style>
