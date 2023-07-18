<template>
  <div class="row center">
    <div class="col s12 m12">
      <ul
        v-if="!$store.state.buildLoader"
        class="collapsible collapsible-builds"
      >
        <template v-for="(builds, version) in deviceBuilds">
          <h5 style="padding: 18px">{{ version }}</h5>
          <template v-for="build in builds">
            <li
              v-if="build.filename"
              :key="build.id"
              @click="setBuild(build)"
              class="zips"
            >
              <div class="collapsible-header white-text">
                <i class="material-icons">system_update</i>
                <span class="upper-bold" style="width: 100%"
                  >{{ build.build_type }} {{ build.version_code }}</span
                >
                <i class="material-icons">arrow_drop_down</i>
              </div>

              <div class="collapsible-body buildBackground">
                <p class="label description">Details</p>
                <div class="buildinfo">
                  <div class="deviceprop">
                    <p>Filename: {{ build.filename }}</p>
                  </div>
                  <div class="deviceprop">
                    <p>Date: {{ build.datetime }}</p>
                  </div>
                  <div class="deviceprop">
                    <p>Size: {{ build.size }}</p>
                  </div>
                  <div class="deviceprop">
                    <p>Security Patch Level: {{ build.spl }}</p>
                  </div>
                  <div class="deviceprop sha256" v-if="build.recovery_sha256">
                    <p v-on:click="copysha256(build.recovery_sha256)">
                      Recovery SHA256: {{ build.recovery_sha256 }}
                    </p>
                  </div>
                  <div class="deviceprop sha256" v-if="build.fastboot_sha256">
                    <p v-on:click="copysha256(build.fastboot_sha256)">
                      Fastboot SHA256: {{ build.fastboot_sha256 }}
                    </p>
                  </div>
                  <div v-if="build.downloads" class="deviceprop">
                    <p>Downloads: {{ build.downloads }}</p>
                  </div>
                </div>

                <div v-if="build.changelog" class="buildChangelog">
                  <p class="label">Device Changelog</p>
                  <pre style="text-align: center"> {{ build.changelog }}</pre>
                </div>

                <div class="buildButtons" style="text-align: center">
                  <a
                    v-if="build.url"
                    v-on:click="download(build.url)"
                    download
                    target="_blank"
                    class="btn buttonInsideCard"
                    >Recovery option</a
                  >
                  <a
                    v-if="build.fastboot"
                    v-on:click="download(build.fastboot)"
                    download
                    target="_blank"
                    class="btn buttonInsideCard"
                    >Fastboot option</a
                  >
                </div>
                <div
                  class="buildButtons"
                  style="text-align: center; margin-bottom: 8px"
                >
                  <a
                    v-if="build.telegram"
                    v-on:click="download(build.telegram)"
                    download
                    target="_blank"
                    class="btn buttonInsideCard"
                    >Telegram</a
                  >
                  <a
                    v-if="build.mirror"
                    v-on:click="download(build.mirror)"
                    download
                    target="_blank"
                    class="btn buttonInsideCard"
                    >Mirror</a
                  >
                </div>
              </div>
            </li>
          </template>
        </template>
      </ul>
      <Loading v-if="$store.state.buildLoader" />
    </div>
  </div>
</template>
<script>
import Loading from "../common/Loading.vue";

export default {
  name: "CardBuilds",
  components: {
    Loading,
  },
  updated() {
    if (this.$route.params.id) {
      this.$store.dispatch(
        "getIndexOfExpandedBuild",
        this.$route.params.id
      );
      document.title =
        this.$route.params.id ||
        `Download Paranoid Android for ${this.$route.params.codename}`;
    }
    setTimeout(() => {
      this.openBuild(this.$store.state.expandedBuild);
      this.$store.dispatch("getIndexOfExpandedBuild", "");
    }, 1000);
  },
  methods: {
    setBuild(obj) {
      const elems = document.querySelector(".collapsible-builds");
      const instances = M.Collapsible.init(elems);

      instances.options.onOpenEnd = () =>
        this.$router.push({
          name: "id",
          params: { id: `${obj.id}` },
        });

      instances.options.onCloseEnd = () =>
        this.$router.replace({ name: "id", params: { id: null } });
    },
    openBuild(index) {
      if (!isNaN(index) && index !== -1) {
        const elems = document.querySelector(".collapsible-builds");
        const instances = M.Collapsible.init(elems);
        instances.open(index);
      }
    },
    download(download) {
      this.showToast("Starting Download... Please Wait");
      window.location.href = download;
    },
    getChangelog(build) {
      return build.changelog;
    },
    copysha256(sha256) {
      navigator.clipboard.writeText(sha256);
      this.showToast("sha256 has been successfully copied");
    },
    showToast(message) {
      if (this.$toast != null) {
        this.$toast.clear();
      }

      this.$toast(message, {
        position: "bottom-center",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        closeButton: "button",
        icon: false,
        rtl: false,
        toastClassName: "my-custom-toast-class",
      });
    },
    /*     download(file, version, build_type, version_code, codename) {
      M.toast({ html: "Starting Download... Please Wait" });
      location.href = generateDownloadURL(file, version, build_type, version_code, codename);
    }, */
  },
  computed: {
    deviceBuilds() {
      const deviceBuilds = {};
      this.$store.state.builds.forEach((build) => {
        const version =
          build.version + " (" + "Android " + build.android_version + ")";
        if (!deviceBuilds.hasOwnProperty(version)) {
          deviceBuilds[version] = [];
        }
        deviceBuilds[version].push(build);
      });
      return deviceBuilds;
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media only screen and (max-width: 600px) {
  .Vue-Toastification__toast--default {
    margin-left: 10% !important;
    margin-right: 10% !important;
    min-width: 200px !important;
  }
  .Vue-Toastification__container .Vue-Toastification__toast {
    width: auto !important;
  }
}

.Vue-Toastification__toast--default {
  background-color: var(--card);
  color: var(--accent);
}

.Vue-Toastification__progress-bar {
  background-color: var(--accent);
}

.Vue-Toastification__close-button {
  color: var(--accent);
}

.zips > .collapsible-body {
  background-color: transparent !important;
}

.collapsible-body .deviceprop,
.collapsible-body p {
  margin: 1px;
  margin-top: 3px;
  display: block;
}
</style>