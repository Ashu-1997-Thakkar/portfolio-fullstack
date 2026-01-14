import { createRouter, createWebHistory } from 'vue-router';

// Pages
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Skills from '../pages/Skills.vue';
import Experience from '../pages/Experience.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Home - Ashutosh Nandani' } },
  { path: '/about', name: 'about', component: About, meta: { title: 'About Me - Ashutosh Nandani' } },
  { path: '/skills', name: 'skills', component: Skills, meta: { title: 'Skills - Ashutosh Nandani' } },
  { path: '/experience', name: 'experience', component: Experience, meta: { title: 'Experience - Ashutosh Nandani' } },
  { path: '/projects', name: 'projects', component: Projects, meta: { title: 'Projects - Ashutosh Nandani' } },
  { path: '/contact', name: 'contact', component: Contact, meta: { title: 'Contact Me - Ashutosh Nandani' } },
  // Catch-all route for 404
  { path: '/:catchAll(.*)', redirect: '/' }
];

// Create Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Update title for each route
router.afterEach((to) => {
  document.title = to.meta.title || 'Portfolio - Ashutosh Nandani';
});

export default router;
