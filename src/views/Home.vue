<template>
  <div class="home center">
    <h3 class="accent welcome">Kraken Open Tentacles Project</h3>

    <img src="https://avatars0.githubusercontent.com/u/49829986?s=300&v=4">

    <div class="home-desc">
      <div class="desc square accent">LineageOS based ROM</div>
    </div>

    <ProjectLink/>
    <Credits/>
  </div>
</template>

<script>
import ProjectLink from "../components/home/ProjectLink.vue";
import Credits from "../components/home/Credits.vue";

export default {
  name: "Home",
  components: {
    ProjectLink,
    Credits
  }
};
</script>