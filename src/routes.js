import Home from './views/Home.vue';
import Device from './views/Device.vue';

export const routes = [
  { path: '', component: Home, name: 'home' },
  {
    path: '/:codename',
    component: Device,
    name: 'device',
    children: [
      { path: ':filename?', name: 'filename' },
    ],
  },
];
