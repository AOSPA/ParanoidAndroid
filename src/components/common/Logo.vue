<template>
  <img :src='require("../../logo.png")' :width="width" alt="logo">
</template>
<script>
export default {
  props: ['width'],
  name: 'Logo',
};

</script>
<style>

</style>
