<!-- ============================================ -->
<!-- FILE: resources/js/components/common/Navbar.vue -->
<!-- ============================================ -->

<template>
  <!-- ================= APP BAR ================= -->
 <v-app-bar
  flat
  height="70"
  class="navbar"
  elevation="0"
    :class="{ scrolled: isScrolled }"
  >
    <v-container class="d-flex align-center">

      <!-- BRAND -->
      <div class="brand" @click="goHome">
        <span class="brand-text">Ashutosh</span>
        <span class="brand-dot">Nandani (Thakkar)</span>
      </div>

      <v-spacer />

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

      <!-- THEME TOGGLE -->
      <v-btn
        icon
        class="theme-toggle d-none d-md-flex"
        @click="toggleTheme"
        aria-label="Toggle theme"
      >
        <v-icon>
          {{ isDark ? 'mdi-weather-sunny' : 'mdi-moon-waning-crescent' }}
        </v-icon>
      </v-btn>

      <!-- MOBILE MENU BUTTON -->
      <v-btn
        icon
        class="d-md-none"
        @click="drawer = true"
        aria-label="Open menu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

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
      <span class="brand-text">Ashutosh</span>
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
        class="drawer-item"
        :active="route.path === link.url"
      >
        <v-list-item-title>{{ link.name }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- CTA -->
    <div class="drawer-cta">
      <v-btn
        color="primary"
        block
        size="large"
        @click="goContact"
      >
        Hire Me
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
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

const toggleTheme = () => {
  appStore.toggleTheme()
}

const goHome = () => router.push('/')
const goContact = () => {
  drawer.value = false
  router.push('/contact')
}

// Scroll blur effect
const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ================= NAVBAR ================= */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: transparent;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(2, 6, 23, 0.75);
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

/* ================= BRAND ================= */
.brand {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-dot {
  color: #22d3ee;
  font-size: 2rem;
  line-height: 1;
  margin-left: 2px;
}

/* ================= LINKS ================= */
.nav-links {
  gap: 6px;
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
  left: 10%;
  bottom: 4px;
  width: 80%;
  height: 2px;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
}

/* ================= THEME TOGGLE ================= */
.theme-toggle {
  margin-left: 8px;
}

/* ================= MOBILE DRAWER ================= */
.mobile-drawer {
  background: rgba(2, 6, 23, 0.95);
  backdrop-filter: blur(18px);
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.drawer-item {
  padding: 16px;
  font-size: 1.05rem;
}

.drawer-item.v-list-item--active {
  background: rgba(99, 102, 241, 0.18);
}

/* ================= CTA ================= */
.drawer-cta {
  padding: 16px;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .brand-text {
    font-size: 1.3rem;
  }
}
</style>
