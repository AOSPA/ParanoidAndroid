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
    this.$store.commit("setDevice", this.$route.params);
    this.$store.commit("fetchBuildsByCodename", this.$route.params);
  },
  watch: {
    "$route.params": {
      handler(params) {
        this.$store.commit("setDevice", params);
        this.$store.commit('fetchBuildsByCodename', params)
      }
    }
  }
};
</script>
