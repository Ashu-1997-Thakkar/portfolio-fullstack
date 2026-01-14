<!-- ============================================ -->
<!-- FILE: resources/js/App.vue -->
<!-- ============================================ -->

<template>
  <v-app :theme="theme" class="app-root">

    <!-- ================= SPLASH SCREEN ================= -->
    <!-- <transition name="fade">
      <div v-if="showSplash" class="splash-screen">
        <h1>Loading Portfolio...</h1>
        <p>Laravel • Vue • Full Stack</p>
      </div>
    </transition> -->

    <!-- ================= APP LAYOUT ================= -->
    <v-layout v-if="!showSplash">

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
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
import { useAppStore } from './store/appStore'

/* -------------------- STORE -------------------- */
const appStore = useAppStore()
const { darkMode } = storeToRefs(appStore)

/* -------------------- ROUTE -------------------- */
const route = useRoute()

/* -------------------- THEME -------------------- */
const theme = computed(() => (darkMode.value ? 'dark' : 'light'))

/* -------------------- SPLASH SCREEN -------------------- */
const showSplash = ref(true)

onMounted(() => {
  appStore.initTheme()

  // 2 seconds splash screen
  setTimeout(() => {
    showSplash.value = false
  }, 2000)
})
</script>

<style scoped>
/* ================= SPLASH ================= */
.splash-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #020617;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  text-align: center;
}

/* ================= FADE TRANSITION ================= */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ================= APP ROOT ================= */
.app-root {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #e0e7ff 100%);
}

/* Dark mode */
:deep(.v-theme--dark) .app-root {
  background: #020617;
}

/* ================= MAIN CONTENT ================= */
.main-content {
  padding-top: 24px;
  padding-bottom: 64px;
}

/* ================= PAGE TRANSITIONS ================= */
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

/* ================= MOBILE ================= */
@media (max-width: 768px) {
  .main-content {
    padding-top: 16px;
    padding-bottom: 48px;
  }
}
</style>
