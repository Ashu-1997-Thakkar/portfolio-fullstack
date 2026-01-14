// ============================================
// FILE: resources/js/router/index.js
// ============================================

import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '../store/appStore'

/* -------------------------------------------------
   Lazy Loaded Pages (Code Splitting)
------------------------------------------------- */
const Home = () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
const Skills = () => import(/* webpackChunkName: "skills" */ '../pages/Skills.vue')
const Experience = () =>
  import(/* webpackChunkName: "experience" */ '../pages/Experience.vue')
const Projects = () =>
  import(/* webpackChunkName: "projects" */ '../pages/Projects.vue')
const Contact = () =>
  import(/* webpackChunkName: "contact" */ '../pages/Contact.vue')

/* -------------------------------------------------
   Routes
------------------------------------------------- */
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Ashutosh Nandani | Laravel Full Stack Developer',
      description:
        'Laravel Full Stack Developer with experience in Laravel, Vue.js, MySQL & Flutter.',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About Me | Ashutosh Nandani',
    },
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    meta: {
      title: 'Skills | Ashutosh Nandani',
    },
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
    meta: {
      title: 'Experience | Ashutosh Nandani',
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      title: 'Projects | Ashutosh Nandani',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact | Ashutosh Nandani',
    },
  },

  /* -------------------------------------------------
     404 Page (Future Ready)
  ------------------------------------------------- */
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

/* -------------------------------------------------
   Router Instance
------------------------------------------------- */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

/* -------------------------------------------------
   Global Guards
------------------------------------------------- */
router.beforeEach((to, from, next) => {
  const appStore = useAppStore()

  // Start global loader
  appStore.startLoading()

  // SEO: Title
  document.title =
    to.meta.title || 'Ashutosh Nandani | Portfolio'

  // SEO: Meta description
  if (to.meta.description) {
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute('content', to.meta.description)
  }

  next()
})

router.afterEach(() => {
  const appStore = useAppStore()

  // Stop loader slightly after navigation
  setTimeout(() => {
    appStore.stopLoading()
  }, 300)
})

export default router
