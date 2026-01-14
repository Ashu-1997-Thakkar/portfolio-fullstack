<template>
  <v-app class="app-root">
    <!-- Top Navigation -->
    <Navbar />

    <!-- Main Content Area with App-like Transition -->
    <v-main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'

const route = useRoute()

// Smooth scroll to top on every route change
watch(
  () => route.fullPath,
  () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
)
</script>

<style scoped>
/* Root app background */
.app-root {
  background: linear-gradient(135deg, #f9fafb, #f1f5f9);
  min-height: 100vh;
}

/* Main content spacing */
.main-content {
  padding-top: 24px;
  padding-bottom: 48px;
}

/* Page transition (App-like feel) */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile optimization */
@media (max-width: 768px) {
  .main-content {
    padding-top: 16px;
    padding-bottom: 32px;
  }
}
</style>
