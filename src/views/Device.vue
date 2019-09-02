<template>
  <div>
    <CardHeader/>
    <CardBuilds/>
  </div>
</template>

<script>
import CardHeader from '../components/device/CardHeader.vue';
import CardBuilds from '../components/device/CardBuilds.vue';

export default {
  name: 'Device',
  components: {
    CardHeader,
    CardBuilds,
  },
  created() {
    this.$store.dispatch('fetchBuilds', this.$route.params);
  },
  mounted() {
    console.log(this.$store.state.device);
  },
  watch: {
    '$route.params.codename': {
      handler(params) {
        this.$store.dispatch('filterDevice', { codename: params });
        this.$store.dispatch('fetchBuilds', { codename: params });
      },
    },
  },
};
</script>
