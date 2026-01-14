// resources/js/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Skills from '../pages/Skills.vue';
import Experience from '../pages/Experience.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/skills', name: 'skills', component: Skills },
  { path: '/experience', name: 'experience', component: Experience },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
