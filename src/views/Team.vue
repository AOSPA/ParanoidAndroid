<template>
  <div>
    <TeamView/>
  </div>
</template>

<script>
import TeamView from "../components/team/TeamView.vue";

export default {
  name: "Team",
  components: {
    TeamView,
  },
  created() {
    // this.$store.dispatch('fetchBuilds', this.$route.params);
  },
  mounted() {
    // console.log(this.$store.state.device);
  },
};
</script>