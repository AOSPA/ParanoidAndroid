import Home from "./views/Home.vue";
import Device from "./views/Device.vue";
import Changelog from "./views/Changelog.vue";
import Team from "./views/Team.vue";
import Blog from "./views/Blog.vue";

export const routes = [
  { path: "/", redirect: { name: 'home' } },
  { path: "/", component: Home, name: "home" },
  { path: "/changelog", component: Changelog, name: "changelog" },
  { path: "/team", component: Team, name: "team" },
  {
    path: "/blog",
    component: Blog,
    name: "blog",
    children: [
      { path: ":post?", name: "post" },
    ],
  },
  {
    path: "/:codename",
    component: Device,
    name: "device",
    children: [
      { path: ":id?", name: "id" },
    ],
  },
];
