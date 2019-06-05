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
    document.title = 'Download Kraken for ' + this.$route.params.codename
  },
  watch: {
    "$route.params.codename": {
      handler(params) {
        document.title = 'Download Kraken for ' + params
        this.$store.dispatch("filterDevice", { codename: params });
        this.$store.dispatch("fetchBuilds", { codename: params });
      }
    }
  }
};
</script>
