<template>
<transition name="fade" mode="out-in">
  <div :key="$route.params.codename">
    <CardHeader/>
    <CardBuilds/>
  </div>
</transition>
</template>

<script>
import CardHeader from "../components/device/CardHeader.vue";
import CardBuilds from "../components/device/CardBuilds.vue";

export default {
  name: "Device",
  components: {
    CardHeader,
    CardBuilds,
  },
  created() {
    this.$store.dispatch("device/fetchBuilds", this.$route.params);
  },
  mounted() {
    // console.log(this.$store.state.device.device);
  },
  watch: {
    "$route.params.codename": {
      handler(params) {
        this.$store.dispatch("device/filterDevice", { codename: params });
        this.$store.dispatch("device/fetchBuilds", { codename: params });
      },
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
