<template>
  <div>
    <div class="container">
      <VueMarkdown loading="lazy" :source="team" class="md" style="text-align: center">
      </VueMarkdown>
    </div>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";

import { fetchTeamMD } from "../../services/github";

export default {
  name: "ChangelogView",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      team: null,
    };
  },
  created() {
    fetchTeamMD().then(tm => (this.team = tm));
  },
};
</script>
<style scoped>
.container {
  padding: 20px;
  background-color: var(--card);
  margin-top: 50px;
  border-radius: 24px;
  margin-bottom: 50px;
}
</style>
<style>
.md {
  color: var(--text) !important;
}

.md h2 {
  font-size: 24px;
  font-weight: bold;
}

.md p {
  color: var(--text) !important;
}

.md li {
  color: var(--text) !important;
}

.md strong {
  color: var(--text) !important;
}

.md a {
  color: var(--accent) !important
}
</style>
