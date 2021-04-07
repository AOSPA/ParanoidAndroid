<template>
  <div class="row center">
    <div class="col s12 m12">

        <ul v-if="!$store.state.buildLoader" class="collapsible collapsible-builds">

        <li
          v-for="build in deviceBuilds"
          :key="build.id"
          @click="setBuild(build.filename)"
          class="buildcoll"
          style="background-color: #1C1C1C; padding-top:2px; margin-top: 10px"
        >

        <h6 style="text-transform: uppercase;" class="upper-bold accent"> {{ build.type }} version</h6>
          <div class="collapsible-header white-text cardColor">
            <i class="material-icons">system_update</i>
            <span style="width: 100%">{{ build.filename }}</span>
            <i class="material-icons">arrow_drop_down</i>
          </div>

          <div class="collapsible-body">
            <p class="label">details</p>
            <div class="buildinfo">
              <div class="deviceprop">
                <p>Filename: {{build.filename}}</p>
              </div>
              <div class="deviceprop">
                <p>Date: {{build.datetime}}</p>
              </div>
              <div class="deviceprop">
                <p>Size: {{build.size}}</p>
              </div>
              <div class="deviceprop">
                <p>MD5: {{build.md5}}</p>
              </div>
              <div class="deviceprop">
                <p>Version: Android {{build.android}}</p>
              </div>
              <div class="deviceprop">
                <p>Downloads: {{build.downloads}}</p>
              </div>
            </div>

            <div class="buildChangelog">
              <p class="label">Device Changelog</p>
              <pre>{{build.changelog}}</pre>
            </div>

            <div class="buildbuttons">
              <a
                v-on:click="download(build.filename, device.codename, build.romtype)"
                download
                target="_blank"
                class="btn"
              >Download</a>
            </div>
          </div>
        </li>
        
      </ul>
      <Loading v-if="$store.state.buildLoader"/>
      </div>
        
      
    </div>
  </div>
</template>
<script>
import Loading from '../common/Loading.vue';
import { generateDownloadURL } from '../../services/sourceforge';

export default {
  name: 'CardBuilds',
  components: {
    Loading,
  },
  updated() {
    if (this.$route.params.filename) {
      this.$store.dispatch(
        'getIndexOfExpandedBuild',
        this.$route.params.filename,
      );
      document.title = this.$route.params.filename || `Download Kraken for ${this.$route.params.codename}`;
    }
    setTimeout(() => {
      this.openBuild(this.$store.state.expandedBuild);
    this.$store.dispatch('getIndexOfExpandedBuild', '');
    }, 1000)
  },
  methods: {
    setBuild(obj) {
      const elems = document.querySelector('.collapsible-builds');
      const instances = M.Collapsible.init(elems);

      instances.options.onOpenEnd = () => this.$router.push({ name: 'filename', params: { filename: obj } });

      instances.options.onCloseEnd = () => this.$router.replace({ name: 'filename', params: { filename: null } });
    },
    openBuild(index) {
      if (!isNaN(index) && index !== -1) {
        const elems = document.querySelector('.collapsible-builds');
        const instances = M.Collapsible.init(elems);
        instances.open(index);
      }
    },
    download(file, codename, romtype) {
      M.toast({ html: 'Download Started' });
      location.href = generateDownloadURL(file, codename, romtype);
    },
  },
  computed: {
    deviceBuilds() {
      return this.$store.state.device.supported_types.map((type) => {
          return  { ...this.$store.state.builds[type][0], type};
      });
    },
    device() {
      return this.$store.state.device;
    },
    types() {
      return this.$store.state.device.supported_types;
    },
  },
};
</script>
