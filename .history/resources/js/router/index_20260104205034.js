import { createRouter, createWebHistory } from 'vue-router'

/**
 * --------------------------------------------------
 * Lazy Loaded Pages (Better performance)
 * --------------------------------------------------
 */
const Home = () => import('../pages/Home.vue')
const About = () => import('../pages/About.vue')
const Skills = () => import('../pages/Skills.vue')
const Experience = () => import('../pages/Experience.vue')
const Projects = () => import('../pages/Projects.vue')
const Contact = () => import('../pages/Contact.vue')

/**
 * --------------------------------------------------
 * Routes Configuration
 * --------------------------------------------------
 * Clean URLs + logical portfolio flow
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Ashutosh Nandani | Full Stack Developer',
      transition: 'page',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About Me | Ashutosh Nandani',
      transition: 'page',
    },
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    meta: {
      title: 'Skills | Ashutosh Nandani',
      transition: 'page',
    },
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
    meta: {
      title: 'Experience | Ashutosh Nandani',
      transition: 'page',
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      title: 'Projects | Ashutosh Nandani',
      transition: 'page',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact | Ashutosh Nandani',
      transition: 'page',
    },
  },

  /**
   * 404 – fallback (clean handling)
   */
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

/**
 * --------------------------------------------------
 * Router Instance
 * --------------------------------------------------
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Native-like scroll behavior
    if (savedPosition) {
      return savedPosition
    }
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

/**
 * --------------------------------------------------
 * Global Navigation Guards
 * --------------------------------------------------
 */
router.beforeEach((to, from, next) => {
  // Update document title
  document.title =
    to.meta.title || 'Ashutosh Nandani | Portfolio'

  next()
})

export default router
