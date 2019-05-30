<template>
  <div id="app">
    <Navbar/>
    <Sidebar/>
    <Home/>
  </div>
</template>

<script>

import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'




import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    Home
  }
}
</script>

