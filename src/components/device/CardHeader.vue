<template>
  <div v-if="device.name">
    <h5 class="center upper-bold accent">{{device.brand}} {{device.name}} ({{device.codename}})</h5>
    <div class="row limiter">
      <div class="col s12 m12">
        <div class="builds cardColor z-depth-1">
          <div class="deviceprop">
            <i class="material-icons">domain</i>
            <h6>{{device.brand}}</h6>
          </div>

          <div class="deviceprop">
            <i class="material-icons">phone_android</i>
            <h6>{{device.name}}</h6>
          </div>

          <div class="deviceprop">
            <i class="material-icons">device_unknown</i>
            <h6>{{device.codename}}</h6>
          </div>

          <div v-if="device.active" class="deviceprop">
            <i class="material-icons">person_outline</i>
            <h6>{{device.maintainer_name}}</h6>
            <Flag width="20px" :country="device.maintainer_country" />
          </div>

          <div v-if="!device.active" class="deviceprop">
            <i class="material-icons red-icon">person_outline</i>
            <h6>No maintainer</h6>
          </div>

          <div v-if="device.xda_thread && device.active" class="card-action xda-buttons">
            <a v-bind:href="device.maintainer_xda" target="_blank" class="waves-effect btn">XDA Profile</a>
            <a v-bind:href="device.xda_thread" target="_blank" class="waves-effect btn">XDA Thread</a>
	</div>
          <div
            v-if="device.donation_link && device.active"
            class="card-action xda-buttons"
          >
          <a
            v-bind:href="device.donation_link"
            target="_blank"
            class="waves-effect btn"
            >Donate to Maintainer</a
          >
          </div>

          <div v-if="!device.active" class="card-action xda-buttons">
            <a
              href="https://forms.gle/k967Pzrqd1PBSqQTA"
              target="_blank"
              class="waves-effect btn red-bg"
            >Become the maintainer</a>
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

import Flag from '../common/Flag';

export default {
  name: 'CardHeader',
  components: {
     Flag,
  },
  computed: {
    device() {
      this.$store.dispatch('filterDevice', this.$route.params);
      const { device } = this.$store.state;

      if (device && device.name) {
        document.title = `${device.name} (${this.$route.params.codename}) | LegionOS Download Center`;
      }

      return device;
    },
  },
};
</script>
