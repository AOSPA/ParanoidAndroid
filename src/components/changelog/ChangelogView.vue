<template>
  <div>
    <div v-for="change in changes.changelog" :key="change.id" class="container">
      <VueMarkdown loading="lazy" :source="change.md" class="md" style="text-align: center">
      </VueMarkdown>
    </div>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";

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
.md code {
  font-size: 33px;
  font-weight: 500;
  font-family: "Product Sans";
  font-style: normal;
}
.md h2 {
  font-size: 24px;
  font-weight: 500;
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
