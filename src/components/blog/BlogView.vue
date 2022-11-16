<template>
    <div class="row center">
    <div class="col s12 m12">
        <ul v-if="blog" class="collapsible collapsible-builds">
          <template v-for="post in blog.posts">
            <li
              v-if="post.md"
              :key="post.id"
              @click="setPost(post)"
              class="posts"
            >
              <div class="collapsible-header white-text">
                <span class="upper-bold" style="width: 100%"
                  >{{ post.title }}</span
                >
                <i class="material-icons">arrow_drop_down</i>
              </div>

              <div class="collapsible-body buildBackground">
                <div class="buildinfo">
                  <VueMarkdown
                    loading="lazy"
                    :source="post.md"
                    class="md"
                    style="text-align: center; margin: 20px"
                  >
                  </VueMarkdown>
                </div>
              </div>
            </li>
          </template>
        </ul>
        <Loading v-show="!loaded" />
        </div>
      </div>
</template>
<script>
import VueMarkdown from "@theori/vue-markdown";

import { fetchBlogPosts } from "../../services/github";

export default {
  name: "BlogView",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      blog: null,
      loaded: false,
    };
  },
  created() {
    fetchBlogPosts().then((bl) => {
      this.blog = bl,
      this.loaded = true
    });
  },
    methods: {
    setPost(obj) {
      const elems = document.querySelector(".collapsible-builds");
      const instances = M.Collapsible.init(elems);

      const id = `${obj.id}`;

      instances.options.onOpenEnd = () =>
        this.$router.push({
          name: "post",
          params: { post: id.toLowerCase() },
        });

      instances.options.onCloseEnd = () =>
        this.$router.replace({ name: "post", params: { post: null } });
    },
    openPost(index) {
      if (!isNaN(index) && index !== -1) {
        const elems = document.querySelector(".collapsible-builds");
        const instances = M.Collapsible.init(elems);
        instances.open(index);
      }
    },
   }, 
};
</script>
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
  color: var(--accent) !important;
}

.posts > .collapsible-body {
  background-color: transparent !important;
}
</style>
