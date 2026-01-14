<!-- ============================================ -->
<!-- FILE: resources/js/App.vue -->
<!-- ============================================ -->

<template>
  <v-app :theme="theme" class="app-root">

    <!-- GLOBAL FULLSCREEN LOADER -->
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

    <!-- NAVBAR -->
    <Navbar />

    <!-- MAIN CONTENT -->
    <v-main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <!-- FOOTER -->
    <Footer />

  </v-app>
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
import { useAppStore } from './store/appStore'

const appStore = useAppStore()
const { loading, darkMode } = storeToRefs(appStore)

const route = useRoute()

const isLoading = computed(() => loading.value)
const theme = computed(() => (darkMode.value ? 'dark' : 'light'))

onMounted(() => {
  appStore.initTheme()
})

watch(
  () => route.fullPath,
  () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
)
</script>

<style scoped>
/* APP ROOT */
.app-root {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #f8fafc 0%,
    #eef2ff 50%,
    #e0e7ff 100%
  );
}

/* DARK MODE */
:deep(.v-theme--dark) .app-root {
  background: #020617;
}
/* Smooth theme transition */
.app-root {
  min-height: 100vh;
  transition: background 0.4s ease, color 0.4s ease;
}

/* Vuetify theme transition */
:deep(.v-application) {
  transition: background-color 0.4s ease, color 0.4s ease;
}

/* MAIN CONTENT (navbar height offset) */
.main-content {
  padding-top: 80px;
  padding-bottom: 64px;
}

/* GLOBAL LOADER */
.global-overlay {
  z-index: 9999;
  background: rgba(2, 6, 23, 0.65);
  backdrop-filter: blur(8px);
}

/* PAGE TRANSITION */
.page-enter-active,
.page-leave-active {
  transition: all 0.35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

/* MOBILE */
@media (max-width: 768px) {
  .main-content {
    padding-top: 72px;
    padding-bottom: 48px;
  }
}
</style>
