<template>
    <div class="container">

      <VueMarkdown v-if="changes" class="md">
        {{changes}}
      </VueMarkdown>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown';

import { fetchROMChangelog } from '../../services/github';

export default {
  name: 'ChangelogView',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      changes: null,
    };
  },
  created() {
    fetchROMChangelog()
      .then(ch => this.changes = ch);
  },
};
</script>
<style scoped>
.container {
  padding: 20px;
  background-color: var(--card);
  margin-top: 50px;
  border-radius: 5px;
}
</style>
<style>
.md {
  color: var(--text);
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
</style>
