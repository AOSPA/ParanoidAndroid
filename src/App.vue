<template>
  <div id="app">
    <Navbar/>
    <Sidebar/>
    <ThemeEngine/>
    <router-view></router-view>
  </div>
</template>

<script>

import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

import '../public/css/styles.css';

import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import ThemeEngine from './components/common/ThemeEngine.vue';

export default {
  name: 'app',
  created() {
    this.$store.dispatch('fetchDevices');
  },
  components: {
    Navbar,
    Sidebar,
    ThemeEngine,
  },
};
</script>
