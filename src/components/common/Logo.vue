<template>
    <img :src="logo" :width="size">
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
      return `${configs.APP_LOGO}`;
    },
  },
};
</script>
