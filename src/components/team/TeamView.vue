<template>
    <div class="container">
      <VueMarkdown loading="lazy" :source="team.toString()" class="md" style="text-align: center; margin: 20px;">
      </VueMarkdown>
    </div>
</template>
<script>
import VueMarkdown from "@theori/vue-markdown";

import { fetchTeamInfo } from "../../services/github";

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
    fetchTeamInfo().then(tm => (this.team = tm));
  },
  
};
</script>
<style scoped>
.container {
  background-color: var(--card);
  margin-top: 50px;
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
