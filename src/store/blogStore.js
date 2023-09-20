import Vue from "vue";
import Vuex from "vuex";

import { fetchBlogPosts } from "../services/github";

Vue.use(Vuex);

export const blogStore = {
  namespaced: true,
  state: {
    posts: [],
    postsLoader: true,
    expandedPost: null,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    updatePostsLoader(state, status) {
      state.postsLoader = status;
    },
    setExpandedPost(state, index) {
      state.expandedPost = index;
    },
  },
  actions: {
    async fetchBlogPosts({ commit }) {
      try {
        const blog = await fetchBlogPosts();

        if (blog) {
          commit("setPosts", blog.posts);
          commit("updatePostsLoader", false);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    },
    getIndexOfExpandedPost({ commit, state }, post) {
      let list = [];
      list = Object.values(state.posts).flat();
      commit("setExpandedPost", list.findIndex(b => b.id === post));
    },
  },
};
