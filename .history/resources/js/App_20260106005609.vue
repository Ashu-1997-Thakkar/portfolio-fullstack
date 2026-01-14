<!-- ============================================ -->
<!-- FILE: resources/js/App.vue -->
<!-- ============================================ -->

<template>
  <v-app :theme="theme" class="app-root">

    <!-- 🔥 GLOBAL FULLSCREEN LOADER -->
    <v-overlay
      :model-value="isLoading"
      class="global-overlay"
      persistent
    >
      <v-progress-circular
        indeterminate
        size="64"
        width="5"
        color="primary"
      />
    </v-overlay>

    <!-- ✅ MAIN APP LAYOUT -->
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
import { computed, watch, onMounted } from 'vue'
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
   Init
-------------------- */
onMounted(() => {
  // Ensure theme restored on refresh
  if (appStore.initTheme) {
    appStore.initTheme()
  }
})

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

/* Dark mode background */
:deep(.v-theme--dark) .app-root {
  background: #020617;
}

/* ============================================
   Main Content
   (Navbar height = 72px)
============================================ */
.main-content {
  padding-top: 80px; /* 🔥 FIX: navbar overlap */
  padding-bottom: 64px;
}

/* ============================================
   GLOBAL LOADER OVERLAY
============================================ */
.global-overlay {
  z-index: 9999;
  background: rgba(2, 6, 23, 0.65);
  backdrop-filter: blur(8px);
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
   Mobile Optimizations
============================================ */
@media (max-width: 768px) {
  .main-content {
    padding-top: 72px;
    padding-bottom: 48px;
  }
}
</style>
