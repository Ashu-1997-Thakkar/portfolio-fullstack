// ============================================
// FILE: resources/js/router/index.js
// ============================================

import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '../store/appStore'

/* -------------------------------------------------
   Lazy Loaded Pages (Code Splitting)
------------------------------------------------- */
const Home = () => import('../pages/Home.vue')
const About = () => import('../pages/About.vue')
const Skills = () => import('../pages/Skills.vue')
const Experience = () => import('../pages/Experience.vue')
const Projects = () => import('../pages/Projects.vue')
const Contact = () => import('../pages/Contact.vue')

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
    meta: { title: 'About Me | Ashutosh Nandani' },
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    meta: { title: 'Skills | Ashutosh Nandani' },
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
    meta: { title: 'Experience | Ashutosh Nandani' },
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: { title: 'Projects | Ashutosh Nandani' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { title: 'Contact | Ashutosh Nandani' },
  },
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
   Loader Handling (SMART)
------------------------------------------------- */
let loaderTimer = null

router.beforeEach((to, from, next) => {
  const appStore = useAppStore()

  // ❌ Same route = no loader
  if (to.fullPath === from.fullPath) {
    return next()
  }

  // Small delay → avoid flicker
  loaderTimer = setTimeout(() => {
    appStore.startLoading()
  }, 120)

  // SEO: Title
  document.title =
    to.meta.title || 'Ashutosh Nandani | Portfolio'

  // SEO: Meta description
  if (to.meta.description) {
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', to.meta.description)
  }

  next()
})

router.afterEach(() => {
  const appStore = useAppStore()

  clearTimeout(loaderTimer)

  // Stop loader smoothly
  requestAnimationFrame(() => {
    appStore.stopLoading()
  })
})

export default router
