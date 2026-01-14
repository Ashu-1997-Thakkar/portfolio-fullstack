<!-- ============================================ -->
<!-- FILE: resources/js/App.vue -->
<!-- ============================================ -->

<template>
  <v-app :theme="theme" class="app-root">
    <!-- Global App Loader (API + Route) -->
    <transition name="fade">
      <div v-if="isLoading" class="global-loader">
        <v-progress-circular
          indeterminate
          size="60"
          width="5"
          color="primary"
        />
      </div>
    </transition>

    <!-- App Layout -->
    <v-layout>

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

    </v-layout>
  </v-app>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'

import { useAppStore } from './store/appStore'

/* --------------------
   Store
-------------------- */
const appStore = useAppStore()
const { loading, darkMode } = storeToRefs(appStore)

/* --------------------
   Route
-------------------- */
const route = useRoute()

/* --------------------
   Computed
-------------------- */
const isLoading = computed(() => loading.value)
const theme = computed(() => (darkMode.value ? 'dark' : 'light'))

/* --------------------
   UX Enhancements
-------------------- */
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
/* ============================================
   App Root
============================================ */
.app-root {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #f8fafc 0%,
    #eef2ff 50%,
    #e0e7ff 100%
  );
}

/* Dark mode override */
:deep(.v-theme--dark) .app-root {
  background: linear-gradient(
    135deg,
    #020617 0%,
    #020617 100%
  );
}

/* ============================================
   Main Content
============================================ */
.main-content {
  padding-top: 24px;
  padding-bottom: 64px;
}

/* ============================================
   Global Loader
============================================ */
.global-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(2, 6, 23, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ============================================
   Page Transitions
============================================ */
.page-enter-active,
.page-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

/* ============================================
   Fade Transition
============================================ */
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
    padding-bottom: 48px;
  }
}
</style>
