<template>
  <v-footer class="bg-dark text-white text-center py-4">
    <v-container>
      <!-- Copyright Info -->
      <p class="mb-1">
        © {{ new Date().getFullYear() }} <strong>Ashutosh Hareshkumar Nandani</strong>
      </p>

      <!-- Social Media Links -->
      <div class="social-links mt-3">
        <a
          href="https://github.com/Ashu-1997-Thakkar"
          target="_blank"
          class="social-icon me-3"
        >
          <v-icon>mdi-github</v-icon>
        </a>

        <a
          href="https://linkedin.com/in/ashutosh-nandani-a527b9156"
          target="_blank"
          class="social-icon me-3"
        >
          <v-icon>mdi-linkedin</v-icon>
        </a>

        <a
          href="mailto:ashnandani123@gmail.com"
          class="social-icon"
        >
          <v-icon>mdi-email</v-icon>
        </a>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
// Vuetify icons import
import { VIcon } from 'vuetify/components';
</script>

<style scoped>
.social-links {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-icon {
  font-size: 2rem;
  color: white;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  color: #ffcc00;
  transform: scale(1.1);
}

.social-icon:focus {
  outline: none;
}
</style>
