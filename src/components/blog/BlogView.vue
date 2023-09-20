<template>
  <div class="row center">
    <div class="col s12 m12">
      <ul v-if="posts" class="collapsible collapsible-builds">
        <template v-for="post in posts">
          <li
            v-if="post.md"
            :key="post.id"
            :data-key="post.id"
            @click="setPost(post)"
            class="posts"
          >
            <div class="collapsible-header white-text">
              <span class="upper-bold" style="width: 100%">{{
                post.title
              }}</span>
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
    </div>
  </div>
</template>
<script>
import VueMarkdown from "@theori/vue-markdown";
import Loading from "../common/Loading.vue";

export default {
  name: "BlogView",
  components: {
    VueMarkdown,
    Loading,
  },
  updated() {
    if (this.$route.params.post) {
      console.log("Llego", this.$route.params.post);
      const postID = this.$route.params.post;
      this.$store.dispatch("blog/getIndexOfExpandedPost", postID);
    }

    setTimeout(() => {
      this.openPost(this.$store.state.blog.expandedPost);
      this.$store.dispatch("blog/getIndexOfExpandedPost", "");
    }, 1000);
  },
  methods: {
    setPost(obj) {
      const elems = document.querySelector(".collapsible-builds");
      const instances = M.Collapsible.init(elems);

      instances.options.onOpenEnd = () => {
        this.$router.push({
          name: "post",
          params: { post: `${obj.id}` },
        });

        this.$nextTick(() => {
          this.scrollIntoCard(`${obj.id}`);
        });
      };

      instances.options.onCloseEnd = () =>
        this.$router.replace({ name: "post", params: { id: null } });
    },
    openPost(index) {
      if (!isNaN(index) && index !== -1) {
        const elems = document.querySelector(".collapsible-builds");
        const instances = M.Collapsible.init(elems);
        instances.open(index);

        instances.options.onOpenEnd = () => {
          this.$nextTick(() => {
            const post = this.$store.state.blog.posts[index];
            if (post) {
              this.scrollIntoCard(post.id);
            }
          });
        };
      }
    },
    scrollIntoCard(postID) {
      const card = document.querySelector(`li[data-key="${postID}"]`);
      if (card) {
        const cardHeight = card.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrollTo = card.offsetTop - windowHeight * 0.01;

        window.scrollTo({ top: scrollTo, behavior: "smooth" });
      }
    },
  },
  computed: {
    posts() {
      return this.$store.state.blog.posts;
    },
  },
};
</script>

<style scoped>
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
  color: var(--textHighlight) !important;
}

.md strong {
  color: var(--textHighlight) !important;
}

.md a {
  color: var(--textHighlight) !important;
}

.posts > .collapsible-body {
  background-color: transparent !important;
}
</style>
