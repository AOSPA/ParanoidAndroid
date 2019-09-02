<template>
  <div>
    <div class="rounded searchbar">
      <div class="search-wrapper">
        <i class="material-icons is-s">search</i>
        <input style="width: 80%" type="text" v-model="search" placeholder="Type your device... ">
      </div>
    </div>
    <div v-if="search != ''" class="wrapper" @click="resetSearch">
      <router-link
        v-for="device in filteredList"
        :key="device.name"
        :to="{ name: 'device', params: { codename: device.codename }}"
        class="search-link"
        :data-device="device.codename"
      >{{ device.name }} ({{device.codename}})</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  mounted() {
    document.addEventListener('keypress', (event) => {
      if (event.keyCode == 13) {
        if (document.querySelector('.search-link') != null) {
          this.resetSearch();
          this.$router.push({
            name: 'device',
            params: {
              codename: document.querySelector('.search-link').attributes[
                'data-device'
              ].value,
            },
          });
        }
      }
    });
  },
  methods: {
    resetSearch() {
      document.querySelectorAll('.wrapper')[0].style.display = 'none';
      document.querySelectorAll('input')[0].blur();
      this.search = '';
    },
  },
  computed: {
    filteredList() {
      return this.$store.state.devices.flatMap(brands => brands.devices.filter((d) => {
        const resByCodename = d.codename
          .toLowerCase()
          .includes(this.search.toLowerCase());
        const resByName = d.name
          .toLowerCase()
          .includes(this.search.toLowerCase());

        return resByName || resByCodename;
      }));
    },
  },
};
</script>
