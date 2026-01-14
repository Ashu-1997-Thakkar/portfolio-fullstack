<!-- ============================================ -->
<!-- FILE: resources/js/App.vue -->
<!-- ============================================ -->
<template>
  <v-app class="app-root">
    <!-- Global Loader -->
    <transition name="fade">
      <div v-if="isLoading" class="global-loader">
        <v-progress-circular
          indeterminate
          size="64"
          color="primary"
        />
      </div>
    </transition>

    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
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
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'

const route = useRoute()
const isLoading = ref(false)

// App-like loading effect on route change
watch(
  () => route.fullPath,
  () => {
    isLoading.value = true

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    setTimeout(() => {
      isLoading.value = false
    }, 400)
  }
)
</script>

<style scoped>
/* ============================================
   App Root
============================================ */
.app-root {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc, #eef2ff);
}

/* ============================================
   Main Content
============================================ */
.main-content {
  padding-top: 24px;
  padding-bottom: 56px;
}

/* ============================================
   Global Loader
============================================ */
.global-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ============================================
   Page Transitions (App-like)
============================================ */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Fade transition (Loader) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ============================================
   Mobile Optimizations
============================================ */
@media (max-width: 768px) {
  .main-content {
    padding-top: 16px;
    padding-bottom: 40px;
  }
}
</style>
