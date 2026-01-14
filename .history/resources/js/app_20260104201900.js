import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Icons
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// VueUse Head
import { createHead } from '@vueuse/head'

// AOS Animation
import AOS from 'aos'
import 'aos/dist/aos.css'

// --------------------
// INIT CONFIG
// --------------------
AOS.init({
  duration: 1000,
  once: true,
})

// Axios base URL
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

// Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

// Create app
const app = createApp(App)

// Plugins
app
  .use(router)
  .use(createPinia())
  .use(vuetify)
  .use(createHead())
  .mount('#app')
