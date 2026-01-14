<template>
  <!-- ================= DESKTOP / TOP BAR ================= -->
<v-app-bar
  flat
  height="70"
  class="navbar"
  elevation="0"
    :class="{ scrolled: isScrolled }"
  >
    <v-container class="d-flex align-center">
      <!-- LOGO / BRAND -->
      <div class="brand" @click="goHome">
        <span class="brand-text">Ashutosh</span>
      </div>

      <v-spacer />

      <!-- DESKTOP LINKS -->
      <div class="nav-links d-none d-md-flex">
        <v-btn
          v-for="link in links"
          :key="link.name"
          :to="link.url"
          variant="text"
          class="nav-btn"
        >
          <span
            class="nav-text"
            :class="{ active: route.path === link.url }"
          >
            {{ link.name }}
          </span>
        </v-btn>
      </div>

      <!-- MOBILE MENU ICON -->
      <v-btn
        icon
        class="d-md-none"
        @click="drawer = true"
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
    <v-list nav>
      <v-list-item
        v-for="link in links"
        :key="link.name"
        :to="link.url"
        @click="drawer = false"
        class="drawer-item"
      >
        <v-list-item-title>
          {{ link.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const drawer = ref(false)
const isScrolled = ref(false)

const links = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Skills', url: '/skills' },
  { name: 'Experience', url: '/experience' },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
]

// Scroll effect (sticky + blur)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const goHome = () => {
  router.push('/')
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
  position: fixed;
  top: 0;
  left: 0;
   width: 100%;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* ================= BRAND ================= */
.brand {
  cursor: pointer;
}

.brand-text {
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ================= LINKS ================= */
.nav-links {
  gap: 8px;
}

.nav-btn {
  position: relative;
}

.nav-text {
  font-size: 0.95rem;
  font-weight: 500;
  color: #e5e7eb;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease;
}

.nav-text::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  transition: width 0.3s ease;
}

.nav-btn:hover .nav-text::after,
.nav-text.active::after {
  width: 100%;
}

.nav-text.active {
  color: #fff;
}

/* ================= MOBILE DRAWER ================= */
.mobile-drawer {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(16px);
}

.drawer-item {
  padding: 16px;
  font-size: 1.1rem;
}

.drawer-item:hover {
  background: rgba(99, 102, 241, 0.15);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .brand-text {
    font-size: 1.2rem;
  }
}
</style>
