<template>
  <div v-if="device.name">
    <h5 class="center upper-bold textHighlight">
      {{ device.manufacturer }} {{ device.name }} ({{ device.codename }})
    </h5>
    <div class="row limiter">
      <div class="col s12 m12">
        <div class="builds cardColor">
          <!--         <div class="builds cardColor z-depth-1" style="border-radius: 25px !important"> -->
          <div class="deviceprop">
            <i class="material-icons">domain</i>
            <h6>{{ device.manufacturer }}</h6>
          </div>

          <div class="deviceprop">
            <i class="material-icons">phone_android</i>
            <h6>{{ device.name }}</h6>
          </div>

          <div class="deviceprop">
            <i class="material-icons">device_unknown</i>
            <h6>{{ device.codename }}</h6>
          </div>

          <div v-if="device.active">
            <div class="deviceprop">
              <i class="material-icons">person_outline</i>
              <h6 class="link" v-on:click="openLink(device.maintainer_link)">
                {{ device.maintainer_name }}
              </h6>
              <Flag width="20px" :country="device.maintainer_country" />
            </div>

            <div v-if="device.comaintainer_name" class="deviceprop">
              <i class="material-icons">person_outline</i>
              <h6 class="link" v-on:click="openLink(device.comaintainer_link)">
                {{ device.comaintainer_name }}
              </h6>
              <Flag width="20px" :country="device.comaintainer_country" />
            </div>
          </div>

          <div v-if="!device.active" class="deviceprop">
            <i class="material-icons red-icon">person_outline</i>
            <h6>No maintainer</h6>
          </div>

          <div
            v-if="device.xda_thread && device.active"
            class="card-action xda-buttons buildbuttons"
          >
            <a v-bind:href="device.xda_thread" target="_blank" class="btn buttonInsideCard"
              >XDA Thread</a
            >
          </div>
          <div
            v-if="device.donation_link && device.active"
            class="card-action xda-buttons"
          >
            <a v-bind:href="device.donation_link" target="_blank" class="btn"
              >Donate to Maintainer</a
            >
          </div>

          <div
            v-if="!device.active"
            class="card-action xda-buttons"
            style="text-align: center"
          >
            <a
              href="https://forms.gle/LNKgCEuzje5z5hni9"
              target="_blank"
              class="waves-effect btn red-bg"
              >Become the maintainer</a
            >
          </div>
        </div>
      </div>
    </div>

    <div v-if="!device.active" class="row limiter">
      <div class="col s12 m12">
        <div class="red-bg alert-box">
          <p>This device will no longer receive updates</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Flag from "../common/Flag.vue";

export default {
  name: "CardHeader",
  components: {
    Flag,
  },
  computed: {
    device() {
      this.$store.dispatch("filterDevice", this.$route.params);
      const { device } = this.$store.state;

      if (device && device.name) {
        document.title = `${device.name} (${this.$route.params.codename}) | Paranoid Android Download Center`;
      }

      return device;
    },
  },
  methods: {
    openLink(link) {
      window.open(link);
      this.showToast("Opening maintainer profile");
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
  },
};
</script>

<style>
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
</style>
