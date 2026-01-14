<!-- ============================================ -->
<!-- FILE: resources/js/components/common/Navbar.vue -->
<!-- ============================================ -->

<template>
  <!-- ================= APP BAR ================= -->
  <v-app-bar
    flat
    height="70"
    class="navbar"
    :class="{ scrolled: isScrolled }"
  >
    <v-container class="d-flex align-center justify-space-between">

      <!-- BRAND -->
      <div class="brand" @click="goHome">
        <span class="brand-name">Ashutosh</span>
        <span class="brand-surname"> Nandani(Thakkar)</span>
      </div>

      <!-- DESKTOP LINKS -->
      <nav class="nav-links d-none d-md-flex">
        <v-btn
          v-for="link in links"
          :key="link.name"
          :to="link.url"
          variant="text"
          class="nav-btn"
          :class="{ active: route.path === link.url }"
        >
          {{ link.name }}
        </v-btn>
      </nav>

      <!-- RIGHT ACTIONS -->
      <div class="right-actions">
        <!-- Theme toggle -->
        <v-btn
          icon
          class="theme-toggle d-none d-md-flex"
          @click="toggleTheme"
        >
          <v-icon>
            {{ isDark ? 'mdi-weather-sunny' : 'mdi-moon-waning-crescent' }}
          </v-icon>
        </v-btn>

        <!-- Mobile menu -->
        <v-btn
          icon
          class="d-md-none"
          @click="drawer = true"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>

    </v-container>
  </v-app-bar>

  <!-- ================= MOBILE DRAWER ================= -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="mobile-drawer"
  >
    <div class="drawer-header">
      <div class="drawer-brand">
        Ashutosh <span>Nandani</span>
      </div>
      <v-btn icon @click="drawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-list nav>
      <v-list-item
        v-for="link in links"
        :key="link.name"
        :to="link.url"
        @click="drawer = false"
        :active="route.path === link.url"
      >
        <v-list-item-title>{{ link.name }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <div class="drawer-cta">
      <v-btn block color="primary" size="large" @click="goContact">
        Hire Me
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '../../store/appStore'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const drawer = ref(false)
const isScrolled = ref(false)

const isDark = computed(() => appStore.darkMode)

const links = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Skills', url: '/skills' },
  { name: 'Experience', url: '/experience' },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
]

const toggleTheme = () => appStore.toggleTheme()
const goHome = () => router.push('/')
const goContact = () => {
  drawer.value = false
  router.push('/contact')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
/* ================= NAVBAR ================= */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(2, 6, 23, 0.85);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

/* ================= BRAND ================= */
.brand {
  cursor: pointer;
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-surname {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(130deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ================= LINKS ================= */
.nav-links {
  gap: 8px;
}

.nav-btn {
  font-weight: 500;
  color: #e5e7eb;
  position: relative;
}

.nav-btn.active {
  color: #fff;
}

.nav-btn.active::after {
  content: '';
  position: absolute;
  left: 12%;
  bottom: 4px;
  width: 76%;
  height: 2px;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
}

/* ================= RIGHT ================= */
.right-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* ================= MOBILE DRAWER ================= */
.mobile-drawer {
  background: rgba(2, 6, 23, 0.96);
  backdrop-filter: blur(18px);
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.drawer-brand {
  font-size: 1.2rem;
  font-weight: 700;
}

.drawer-brand span {
  color: #22d3ee;
}

.drawer-cta {
  padding: 16px;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .brand-name {
    font-size: 1.25rem;
  }
}
</style>
