<template>
  <v-app-bar color="primary" dark app>
    <v-container class="d-flex align-center">
      <!-- Logo and Title -->
      <v-toolbar-title class="fw-bold">
        Ashutosh Nandani
      </v-toolbar-title>

      <v-spacer />

      <!-- Navbar Links with active link highlight -->
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        variant="text"
        :class="{'active-link': $route.path === link.url}"
        class="navbar-link"
      >
        {{ link.name }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

// Navbar Links
const links = ref([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Skills', url: '/skills' },
  { name: 'Experience', url: '/experience' },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
]);
</script>

<style scoped>
.navbar-link {
  font-size: 1rem;
  text-transform: capitalize;
  margin-left: 15px;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: #ffcc00; /* Hover effect for active links */
}

.active-link {
  color: #ffcc00; /* Active link color */
  font-weight: bold;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .v-toolbar-title {
    font-size: 1.5rem;
  }

  .navbar-link {
    font-size: 0.9rem;
  }
}
</style>
