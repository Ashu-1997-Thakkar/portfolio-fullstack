import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import '@mdi/font/css/materialdesignicons.css';

// Import the VueUse head manager
import { createHead } from '@vueuse/head';
import AOS from 'aos';
import 'aos/dist/aos.css';


// Set base URL for axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// Create Vuetify instance
const vuetify = createVuetify({
    components,
    directives,
});

// Create Vue app
const app = createApp(App);

// Create head manager instance
const head = createHead();

// Mount app with Pinia, Router, Vuetify, and Head
app
    .use(router)
    .use(createPinia())
    .use(vuetify)
    .use(head)
    .mount('#app');
