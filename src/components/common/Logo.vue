<template>
    <img :src="logo">
</template>
<script>
import configs from '../../configs';

export default {
  name: 'Logo',
  props: {
    size: String,
  },
  computed: {
    logo() {
      return `${configs.APP_LOGO}?s=${this.$props.size}`;
    },
  },
};
</script>
