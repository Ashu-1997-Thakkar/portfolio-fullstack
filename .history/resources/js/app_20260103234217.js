import './bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Create Vue App
createApp(App)
    .use(router)
    .mount('#app')
