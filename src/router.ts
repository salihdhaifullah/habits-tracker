import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Tasks from './pages/Tasks.vue';
import Dashboard from './pages/Dashboard.vue';
import NotFound from './pages/NotFound.vue';
import Settings from './pages/Settings.vue';
import Calendar from './pages/Calendar.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;