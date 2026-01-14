// ============================================
// FILE: resources/js/app.js
// ============================================

import { createApp } from 'vue'
import App from './App.vue'

// --------------------
// Core Plugins
// --------------------
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'

// --------------------
// Styles (order matters)
// --------------------
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import '@mdi/font/css/materialdesignicons.css'

// --------------------
// Vuetify
// --------------------
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// --------------------
// Head Manager (SEO ready)
// --------------------
import { createHead } from '@vueuse/head'

// --------------------
// AOS Animations
// --------------------
import AOS from 'aos'
import 'aos/dist/aos.css'

// ============================================
// GLOBAL CONFIG
// ============================================

// Axios config (API ready)
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
  },
})

// Pinia store
const pinia = createPinia()

// Create Vue App
const app = createApp(App)

// --------------------
// Plugins Register
// --------------------
app.use(router)
app.use(pinia)
app.use(vuetify)
app.use(createHead())

// --------------------
// Mount
// --------------------
app.mount('#app')

// --------------------
// Init AOS AFTER mount
// --------------------
router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh()
  }, 300)
})

AOS.init({
  duration: 900,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
})
