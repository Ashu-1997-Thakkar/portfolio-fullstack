<template>
  <v-app>
    <Navbar />

    <!-- Main Content Area -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer Section -->
    <Footer />
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue';
import Navbar from './components/common/Navbar.vue';
import Footer from './components/common/Footer.vue';

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
