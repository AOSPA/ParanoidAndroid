<template>
  <div v-if="changes" class="center-content">
    <h2>
      No changelogs found
    </h2>
  </div>
  <div v-else-if="changes.changelog.length > 0">
    <div v-for="change in changes.changelog" :key="change.id" class="container">
      <VueMarkdown loading="lazy" :source="change.md.toString()" class="md" style="text-align: center; margin: 20px;"></VueMarkdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "@theori/vue-markdown";

import { fetchROMChangelog } from "../../services/github";

export default {
  name: "ChangelogView",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      changes: null,
    };
  },
  created() {
    fetchROMChangelog().then(ch => (this.changes = ch));
  },
};
</script>
<style scoped>
.center-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}

@media (min-width: 768px) {
  .center-content {
    display: contents;
    height: auto;
  }
}
.container {
  background-color: var(--card);
  margin-top: 50px;
  margin-bottom: 50px;
}
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
