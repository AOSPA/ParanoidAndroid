import Home from "./views/Home.vue";
import Device from "./views/Device.vue";
import Changelog from "./views/Changelog.vue";
import Team from "./views/Team.vue";

export const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/changelog", component: Changelog, name: "changelog" },
  { path: "/team", component: Team, name: "team" },
  {
    path: "/:codename",
    component: Device,
    name: "device",
    children: [
      { path: ":filename?", name: "filename" },
    ],
  },
];
