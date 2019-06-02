<template>
  <ul id="slide-out" class="sidenav">
    <div>
      <router-link class="bar-logo center" :to="{name: 'home'}">
        <Logo size="100"/>
        <h4 class="accent">{{name}}</h4>
      </router-link>

      <div class="square searchbar">
        <div class="search-wrapper">
          <i class="material-icons is-s">search</i>
          <input style="width: 80%" type="text" placeholder="Type your device... ">
        </div>
      </div>
      <Loading v-if="!brands[0]"/>
      <ul class="collapsible collapsible-accordion">
        <li v-for="brand in brands" :key="brand.name">
          <div class="collapsible-header">
            <i class="material-icons">phone_android</i>
            <span style="width: 90%">{{brand.name}}</span>
            <i class="material-icons">arrow_drop_down</i>
          </div>

          <div class="collapsible-body">
            <ul>
              <li @click="hidebar" v-for="device in brand.devices" :key="device.codename">
                <router-link
                  :to="{ name: 'device', params: { codename: device.codename }}"
                  class="pointer devilist"
                >{{device.name}} ({{device.codename}})</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </ul>
</template>

<script>
import Loading from "../components/common/Loading.vue";
import Logo from "../components/common/Logo.vue";
import configs from "../configs"

export default {
  name: "Sidebar",
  components: {
    Loading,
    Logo
  },
  mounted() {
    // init collapsible
    let elems = document.querySelector(".collapsible");
    M.Collapsible.init(elems);
  },
  computed: {
    name(){
      return configs.APP_NAME
    },
    brands() {
      return this.$store.state.devices;
    }
  },
  methods: {
    hidebar: function() {
      // hide sidenav when click on device
      let sidenav = document.querySelectorAll('.sidenav');
      M.Sidenav.init(sidenav);
    }
  }
};
</script>