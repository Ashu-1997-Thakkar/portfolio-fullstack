<template>
  <v-app>
    <div class="d-flex flex-column min-vh-100">

      <!-- Navbar -->
      <Navbar />

      <!-- Page content -->
      <main class="flex-fill">
        <router-view />
      </main>

      <!-- Footer -->
      <Footer />

    </div>
  </v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// Scroll to top on route change
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
/* Global styles for the layout */
v-app {
  background-color: #f7f7f7; /* Light background */
  min-height: 100vh;
}

v-main {
  padding-top: 20px;
  padding-bottom: 40px;
}

@media (max-width: 768px) {
  v-main {
    padding-top: 15px;
    padding-bottom: 30px;
  }
}
</style>
