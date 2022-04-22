<template>
  <ul
    id="slide-out"
    class="sidenav"
    style="
      -webkit-transition: all 50ms ease;
      transition: all 50ms ease;
      transform: translate3d(0, 0, 0);
      box-shadow: none !important;
      background-color: var(--background) !important;
    "
  >
    <div class="sidebar">
      <router-link class="bar-logo center" :to="{ name: 'home' }">
        <div @click="hidebar">
          <Logo class="sidebarLogo" />
          <div class="text-center showlogo">
            <h4 class="default paranoid">paranoid</h4>
            <h4 class="accent android">android</h4>
          </div>
        </div>
      </router-link>

      <router-link class="center changelog-button" style="background-color: transparent" :to="{ name: 'changelog' }">
        <a @click="hidebar" class="btn">View changelog</a>
      </router-link>

      <Search />
      <Loading v-if="$store.state.deviceLoader" />
      <ul class="collapsible collapsible-accordion">
        <li v-for="brand in brands" :key="brand.name">
          <div
            class="collapsible-header"
            style="background-color: var(--background) !important"
          >
            <i class="material-icons">phone_android</i>
            <span style="width: 90%; font-weight: bold">{{ brand.name }}</span>
            <i class="material-icons">arrow_drop_down</i>
          </div>

          <div class="collapsible-body">
            <ul style="margin-left: 20px; margin-right: 20px">
              <li
                @click="hidebar"
                v-for="device in brand.devices"
                :key="device.codename"
              >
                <router-link
                  :to="{
                    name: 'device',
                    params: { codename: device.codename },
                  }"
                  class="devilist"
                  >{{ device.name }} ({{ device.codename }})</router-link
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </ul>
</template>

<script>
import Loading from "./common/Loading.vue";
import Search from "./common/Search.vue";
import Logo from "./common/Logo.vue";

import configs from "../configs";

export default {
  name: "Sidebar",
  components: {
    Loading,
    Search,
    Logo,
  },
  mounted() {
    // init collapsible
    const elems = document.querySelector(".collapsible");
    M.Collapsible.init(elems);
  },
  computed: {
    name() {
      return configs.APP_NAME;
    },
    brands() {
      return this.$store.state.devices;
    },
  },
  methods: {
    hidebar() {
      const sidenav = document.querySelectorAll(".sidenav");
      M.Sidenav.init(sidenav);
    },
  },
};
</script>

<style>
.router-link-active {
  font-weight: bold !important;
  background-color: var(--container);
}

.sidenav li > a:hover {
  background-color: var(--highlightSelection) !important;
} 

.sidenav li > .router-link-active:hover {
  background-color: var(--buttonHighlight) !important;
}

.li:hover {
  color: var(--background) !important;
}
</style>
