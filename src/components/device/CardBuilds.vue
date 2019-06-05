<template>
  <div class="row center">
    <div class="col s12 m12">
      <ul class="collapsible collapsible-builds">
        <li v-for="build in deviceBuilds" :key="build.id" class='buildcoll'>
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
                <p>Version: {{build.version}}</p>
              </div>
              <div class="deviceprop">
                <p>Downloads: {{build.downloads}}</p>
              </div>
            </div>

            <div class="buildChangelog">
              <p class="label">Changelog</p>
              <pre>{{build.changelog}}</pre>
            </div>

            <div class="buildbuttons">
              <a
                v-bind:href="build.url"
                download
                target="_blank"
                class="waves-effect waves-teal btn-flat"
              >Download</a>
            </div>
          </div>
        </li>
      </ul>
      <Loading v-if="$store.state.buildLoader"/>
    </div>
  </div>
</template>
<script>
import Loading from "../common/Loading.vue";

export default {
  name: "CardBuilds",
  components: {
    Loading
  },
  mounted() {
    // init collapsible
    let elems = document.querySelector(".collapsible-builds");
    M.Collapsible.init(elems);
  },
  computed: {
    deviceBuilds() {
      return this.$store.state.builds;
    }
  }
};
</script>
