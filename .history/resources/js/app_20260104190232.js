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
// ============================================
// FILE: resources/js/app.js
// ============================================
import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                colors: {
                    primary: '#6366F1',
                    secondary: '#22D3EE',
                    accent: '#F59E0B',
                    background: '#0F172A',
                    surface: '#1E293B',
                    'surface-bright': '#334155',
                }
            },
            light: {
                colors: {
                    primary: '#6366F1',
                    secondary: '#22D3EE',
                    accent: '#F59E0B',
                }
            }
        }
    }
});

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app');

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ============================================
// FILE: resources/js/App.vue
// ============================================
<template>
    <v-app>
        <Navbar />
        <v-main>
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </v-main>
        <Footer />
        <ScrollToTop />
    </v-app>
</template>

<script setup>
import Navbar from './components/Layout/Navbar.vue';
import Footer from './components/Layout/Footer.vue';
import ScrollToTop from './components/Layout/ScrollToTop.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

* {
    font-family: 'Inter', sans-serif;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #1E293B;
}

::-webkit-scrollbar-thumb {
    background: #6366F1;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #4F46E5;
}
</style>

// ============================================
// FILE: resources/js/router/index.js
// ============================================
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Projects.vue')
    },
    {
        path: '/projects/:id',
        name: 'ProjectDetail',
        component: () => import('../views/ProjectDetail.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    }
});

export default router;

// ============================================
// FILE: resources/js/components/Layout/Navbar.vue
// ============================================
<template>
    <v-app-bar 
        :elevation="scrolled ? 8 : 0" 
        :class="{ 'navbar-scrolled': scrolled }"
        app
        fixed
        color="transparent"
        height="80"
    >
        <v-container class="d-flex align-center">
            <router-link to="/" class="logo-link">
                <div class="logo-container">
                    <span class="logo-text gradient-text">Portfolio</span>
                </div>
            </router-link>

            <v-spacer></v-spacer>

            <!-- Desktop Menu -->
            <div class="d-none d-md-flex align-center">
                <v-btn
                    v-for="item in menuItems"
                    :key="item.path"
                    :to="item.path"
                    variant="text"
                    class="nav-link mx-2"
                    :class="{ 'active-link': $route.path === item.path }"
                >
                    {{ item.title }}
                </v-btn>
                <v-btn 
                    icon 
                    @click="toggleTheme"
                    class="ml-4"
                    variant="text"
                >
                    <v-icon>{{ themeIcon }}</v-icon>
                </v-btn>
            </div>

            <!-- Mobile Menu -->
            <v-btn
                icon
                @click="drawer = !drawer"
                class="d-md-none"
                variant="text"
            >
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
        width="280"
        class="mobile-drawer"
    >
        <div class="pa-4">
            <div class="d-flex justify-space-between align-center mb-6">
                <span class="text-h6 gradient-text">Menu</span>
                <v-btn icon @click="drawer = false" variant="text">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>

            <v-list>
                <v-list-item
                    v-for="item in menuItems"
                    :key="item.path"
                    :to="item.path"
                    @click="drawer = false"
                    class="mb-2"
                >
                    <template v-slot:prepend>
                        <v-icon>{{ item.icon }}</v-icon>
                    </template>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>

            <v-divider class="my-4"></v-divider>
            
            <v-btn 
                block 
                @click="toggleTheme"
                variant="outlined"
                prepend-icon="mdi-theme-light-dark"
            >
                Toggle Theme
            </v-btn>
        </div>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const drawer = ref(false);
const scrolled = ref(false);

const menuItems = [
    { title: 'Home', path: '/', icon: 'mdi-home' },
    { title: 'About', path: '/about', icon: 'mdi-account' },
    { title: 'Projects', path: '/projects', icon: 'mdi-briefcase' },
    { title: 'Contact', path: '/contact', icon: 'mdi-email' }
];

const themeIcon = computed(() => {
    return theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent';
});

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.v-app-bar {
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.navbar-scrolled {
    background: rgba(15, 23, 42, 0.95) !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.logo-link {
    text-decoration: none;
}

.logo-container {
    padding: 8px 16px;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(34, 211, 238, 0.1));
    border: 2px solid rgba(99, 102, 241, 0.3);
}

.logo-text {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.gradient-text {
    background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-link {
    position: relative;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #6366F1, #22D3EE);
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.active-link::after {
    width: 70%;
}

.mobile-drawer {
    background: rgba(15, 23, 42, 0.98) !important;
    backdrop-filter: blur(10px);
}
</style>

// ============================================
// FILE: resources/js/components/Layout/Footer.vue
// ============================================
<template>
    <footer class="footer">
        <v-container>
            <v-row class="py-12">
                <v-col cols="12" md="4" class="mb-6 mb-md-0">
                    <h3 class="text-h5 gradient-text mb-4">Portfolio</h3>
                    <p class="text-grey">
                        Full Stack Developer passionate about creating beautiful and functional web applications.
                    </p>
                    <div class="social-links mt-6">
                        <v-btn
                            v-for="social in socialLinks"
                            :key="social.name"
                            :href="social.url"
                            target="_blank"
                            icon
                            variant="outlined"
                            class="mr-2 social-btn"
                            size="large"
                        >
                            <v-icon>{{ social.icon }}</v-icon>
                        </v-btn>
                    </div>
                </v-col>

                <v-col cols="12" md="4" class="mb-6 mb-md-0">
                    <h4 class="text-h6 mb-4">Quick Links</h4>
                    <v-list density="compact" bg-color="transparent">
                        <v-list-item
                            v-for="link in quickLinks"
                            :key="link.path"
                            :to="link.path"
                            class="footer-link px-0"
                        >
                            <template v-slot:prepend>
                                <v-icon size="small" class="mr-2">mdi-chevron-right</v-icon>
                            </template>
                            {{ link.title }}
                        </v-list-item>
                    </v-list>
                </v-col>

                <v-col cols="12" md="4">
                    <h4 class="text-h6 mb-4">Get In Touch</h4>
                    <div class="contact-info">
                        <div class="d-flex align-start mb-3">
                            <v-icon class="mr-3" color="primary">mdi-email</v-icon>
                            <span>ashutosh@example.com</span>
                        </div>
                        <div class="d-flex align-start mb-3">
                            <v-icon class="mr-3" color="primary">mdi-phone</v-icon>
                            <span>+91 1234567890</span>
                        </div>
                        <div class="d-flex align-start">
                            <v-icon class="mr-3" color="primary">mdi-map-marker</v-icon>
                            <span>Ahmedabad, Gujarat, India</span>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <v-divider class="my-6"></v-divider>

            <div class="text-center py-4">
                <p class="text-grey">
                    © {{ currentYear }} Portfolio. Made with 
                    <v-icon color="red" size="small" class="mx-1">mdi-heart</v-icon>
                    by Ashutosh
                </p>
            </div>
        </v-container>
    </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const socialLinks = [
    { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'mdi-twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'mdi-instagram', url: 'https://instagram.com' }
];

const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' }
];
</script>

<style scoped>
.footer {
    background: linear-gradient(180deg, #0F172A 0%, #1E293B 100%);
    border-top: 1px solid rgba(99, 102, 241, 0.2);
}

.gradient-text {
    background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.social-btn {
    transition: all 0.3s ease;
}

.social-btn:hover {
    transform: translateY(-3px);
    border-color: #6366F1;
}

.footer-link {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
}

.footer-link:hover {
    color: #6366F1;
    padding-left: 8px !important;
}
</style>

// ============================================
// FILE: resources/js/components/Layout/ScrollToTop.vue
// ============================================
<template>
    <transition name="fade">
        <v-btn
            v-show="visible"
            @click="scrollToTop"
            icon
            size="large"
            color="primary"
            class="scroll-to-top"
            elevation="8"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

const handleScroll = () => {
    visible.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    transition: all 0.3s ease;
}

.scroll-to-top:hover {
    transform: translateY(-5px);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>

// ============================================
// FILE: resources/views/app.blade.php
// ============================================
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Portfolio') }}</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body>
    <div id="app"></div>
</body>
</html>

// ============================================
// FILE: resources/css/app.css
// ============================================
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    body {
        @apply antialiased;
    }
}

@layer utilities {
    .gradient-bg {
        background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
    }
    
    .glass-effect {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .text-gradient {
        background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
}

/* Custom Animations */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
    50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.8); }
}

.animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
}

// ============================================
// FILE: routes/web.php
// ============================================
<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
// Create app
const app = createApp(App)

// Plugins
app
  .use(router)
  .use(createPinia())
  .use(vuetify)
  .use(createHead())
  .mount('#app')
