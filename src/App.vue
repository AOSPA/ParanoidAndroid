<template>
  <div id="app">
    <Navbar/>
    <Sidebar/>
    <transition
        name="fade"
        mode="out-in"
      >
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>

import M from "@materializecss/materialize";
import "@materializecss/materialize/dist/css/materialize.css";

import "../public/css/styles.css";

import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  created() {
    this.$store.dispatch("fetchDevices");
  },
  mounted() {
    M.AutoInit();
  },
  components: {
    Navbar,
    Sidebar,
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
