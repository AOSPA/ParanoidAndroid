import Home from './views/Home.vue';
import Device from './views/Device.vue';
import Changelog from './views/Changelog.vue';

export const routes = [
  { path: '/download', component: Home, name: 'home' },
  { path: '/download/changelog', component: Changelog, name: 'changelog' },
  {
    path: '/download/:codename',
    component: Device,
    name: 'device',
    children: [
      { path: ':filename?', name: 'filename' },
    ],
  },
];
