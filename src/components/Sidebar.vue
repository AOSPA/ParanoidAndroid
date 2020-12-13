<template>
  <ul id="slide-out" class="sidenav">
    <div>
      <router-link class="bar-logo center" :to="{name: 'home'}">
        <div @click="hidebar">
          <Logo width="170px" />
          <h4 class="accent">{{name}}</h4>
        </div>
      </router-link>

      <router-link class="center changelog-button" :to="{name: 'changelog'}">
        <a @click="hidebar" class="btn">View changelog</a>
      </router-link>

      <Search />
      <Loading v-if="$store.state.deviceLoader" />
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
import Loading from './common/Loading.vue';
import Search from './common/Search.vue';
import Logo from './common/Logo.vue';

import configs from '../configs';

export default {
  name: 'Sidebar',
  components: {
    Loading,
    Search,
    Logo,
  },
  mounted() {
    // init collapsible
    const elems = document.querySelector('.collapsible');
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
      const sidenav = document.querySelectorAll('.sidenav');
      M.Sidenav.init(sidenav);
    },
  },
};
</script>
