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
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(router)
    .use(createPinia())
    .use(vuetify)
    .mount('#app');
