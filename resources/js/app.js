// ============================================
// FILE: resources/js/app.js
// ============================================

import { createApp } from 'vue'
import App from './App.vue'

// --------------------
// Router & Store
// --------------------
import router from './router'
import { createPinia } from 'pinia'

// --------------------
// Axios
// --------------------
import axios from 'axios'

// --------------------
// Styles
// --------------------
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'aos/dist/aos.css'

// --------------------
// Vuetify
// --------------------
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// --------------------
// SEO / Head
// --------------------
import { createHead } from '@vueuse/head'

// --------------------
// Animations
// --------------------
import AOS from 'aos'

// --------------------
// App Init
// --------------------
const app = createApp(App)

// --------------------
// Pinia
// --------------------
const pinia = createPinia()

// --------------------
// Axios Global Config
// --------------------
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// Make axios global
app.config.globalProperties.$axios = axios

// --------------------
// Vuetify Config
// --------------------
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
  },
})

// --------------------
// Plugins
// --------------------
app.use(router)
app.use(pinia)
app.use(vuetify)
app.use(createHead())

// --------------------
// Axios Interceptors (AFTER Pinia)
// --------------------
import { useAppStore } from './store/appStore'

axios.interceptors.request.use((config) => {
  const appStore = useAppStore()
  appStore.startLoading()
  return config
})

axios.interceptors.response.use(
  (response) => {
    const appStore = useAppStore()
    appStore.stopLoading()
    return response
  },
  (error) => {
    const appStore = useAppStore()
    appStore.stopLoading()
    return Promise.reject(error)
  }
)

// --------------------
// Mount App
// --------------------
app.mount('#app')

// --------------------
// AOS Init
// --------------------
AOS.init({
  duration: 900,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
})

// Refresh AOS on route change
router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh()
  }, 200)
})
