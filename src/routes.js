import Home from "./views/Home.vue";
import Device from "./views/Device.vue";
import Changelog from "./views/Changelog.vue";
import Team from "./views/Team.vue";

export const routes = [
  { path: "/", redirect: { name: 'home' } } ,
  { path: "/ParanoidAndroid/", component: Home, name: "home" },
  { path: "/ParanoidAndroid/changelog", component: Changelog, name: "changelog" },
  { path: "/ParanoidAndroid/team", component: Team, name: "team" },
  {
    path: "/ParanoidAndroid/:codename",
    component: Device,
    name: "device",
    children: [
      { path: ":filename?", name: "filename" },
    ],
  },
];
