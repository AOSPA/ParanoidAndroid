<template>
  <div class="home center">
    <h3 class="accent welcome">{{subname}}</h3>
    <Logo size="275"/>
    <div class="home-desc">
      <div class="desc square accent">{{description}}</div>
    </div>
    <ProjectLink/>
    <Credits/>
  </div>
</template>

<script>
import ProjectLink from '../components/home/ProjectLink.vue';
import Credits from '../components/home/Credits.vue';
import Logo from '../components/common/Logo.vue';
import configs from '../configs';

export default {
  name: 'Home',
  components: {
    ProjectLink,
    Credits,
    Logo,
  },
  created() {
    document.title = 'Kraken Project';
    document.head.querySelector('meta[name=description]').content = 'Kraken Project | Download Center';
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
