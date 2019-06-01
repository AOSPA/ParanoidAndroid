<template>
  <div>
    <CardHeader/>
    <CardBuilds/>
  </div>
</template>

<script>
import CardHeader from "../components/device/CardHeader.vue";
import CardBuilds from "../components/device/CardBuilds.vue";

export default {
  name: "Device",
  components: {
    CardHeader,
    CardBuilds
  },
  created() {
    this.$store.dispatch("fetchBuilds", this.$route.params);
  },
  watch: {
    "$route.params": {
      handler(params) {
        this.$store.dispatch("filterDevice", params);
        this.$store.dispatch('fetchBuilds', params)
      }
    }
  }
};
</script>
