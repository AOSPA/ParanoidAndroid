<template>
<div class="test">
  <div class="center fragment-root" >
    <Banner class="bannerLogo" />
    <ProjectLink />
  </div>
</div>
</template>

<script>
import ProjectLink from "../components/home/ProjectLink.vue";
import configs from "../configs";
import Banner from "../components/common/Banner.vue";

export default {
  name: "Home",
  components: {
    ProjectLink,
    Banner,
  },
  created() {
    document.title = "Paranoid Android";
    document.head.querySelector("meta[name=description]").content = "Paranoid Android | Download Center";
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
