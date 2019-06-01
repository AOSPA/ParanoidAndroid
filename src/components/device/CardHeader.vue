<template>
  <div>
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

          <div class="deviceprop">
            <i class="material-icons">person_outline</i>
            <h6>{{device.maintainer_name}}</h6>
          </div>

          <div v-if="device.xda_thread" class="card-action xda-buttons">
            <a
              v-bind:href="device.maintainer_url"
              target="_blank"
              class="waves-effect waves-teal btn-flat"
            >GitHub Profile</a>
            <a
              v-bind:href="device.xda_thread"
              target="_blank"
              class="waves-effect waves-teal btn-flat"
            >XDA Thread</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardHeader",
  computed: {
    device() {
      this.$store.dispatch("filterDevice", this.$route.params);
      return this.$store.state.device;
    }
  }
};
</script>
