import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '../store/appStore'

const Home = () => import('../pages/Home.vue')
const About = () => import('../pages/About.vue')
const Skills = () => import('../pages/Skills.vue')
const Experience = () => import('../pages/Experience.vue')
const Projects = () => import('../pages/Projects.vue')
const Contact = () => import('../pages/Contact.vue')

const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/skills', component: Skills, meta: { title: 'Skills' } },
  { path: '/experience', component: Experience, meta: { title: 'Experience' } },
  { path: '/projects', component: Projects, meta: { title: 'Projects' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const store = useAppStore()
  store.startLoading()
  document.title = to.meta.title || 'Portfolio'
  next()
})

router.afterEach(() => {
  const store = useAppStore()
  setTimeout(() => {
    store.stopLoading()
  }, 300)
})

export default router
