<template>
  <div class="home center">
    <h3 class="accent welcome">{{subname}}</h3>
    <img src="https://raw.githubusercontent.com/AOSPK/docs/master/logo.png" alt="The Kraken Project">
    <div class="home-desc">
      <div class="desc rounded accent">{{description}}</div>
    </div>
    <ProjectLink/>
    <Credits/>
  </div>
</template>

<script>
import ProjectLink from '../components/home/ProjectLink.vue';
import Credits from '../components/home/Credits.vue';
import configs from '../configs';

export default {
  name: 'Home',
  components: {
    ProjectLink,
    Credits,
  },
  created() {
    document.title = 'AOSPK - The Kraken Project';
    document.head.querySelector('meta[name=description]').content = 'AOSPK - The Kraken Project | Download Center';
  },
  computed: {
    subname() {
      return configs.APP_SUBNAME;
    },
    description() {
      return configs.APP_DESC;
    },
  },
};
</script>
