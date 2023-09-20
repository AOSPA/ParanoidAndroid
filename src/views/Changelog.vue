<template>
  <div>
    <ChangelogView/>
  </div>
</template>

<script>
import ChangelogView from "../components/changelog/ChangelogView.vue";

export default {
  name: "Changelog",
  components: {
    ChangelogView,
  },
  created() {
    // this.$store.state.device.dispatch('fetchBuilds', this.$route.params);
  },
  mounted() {
    // console.log(this.$store.state.device.state.device);
  },
};
</script>
