<!-- ============================================ -->
<!-- FILE: resources/js/components/common/Footer.vue -->
<!-- ============================================ -->
<template>
  <v-footer class="footer-root">
    <v-container>
      <v-row align="center" justify="center">
        <!-- Name / Copyright -->
        <v-col cols="12" md="6" class="text-center text-md-start">
          <p class="mb-1 footer-text">
            © {{ year }}
            <strong class="gradient-text">
              Ashutosh Hareshkumar Nandani
            </strong>
          </p>
          <p class="footer-subtext">
            Full Stack Developer • Laravel • Vue • MySQL
          </p>
        </v-col>

        <!-- Social Icons -->
        <v-col cols="12" md="6" class="text-center text-md-end">
          <v-btn
            v-for="social in socials"
            :key="social.icon"
            :href="social.link"
            target="_blank"
            icon
            variant="text"
            class="social-btn"
          >
            <v-icon size="28">{{ social.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const year = new Date().getFullYear()

const socials = [
  {
    icon: 'mdi-github',
    link: 'https://github.com/Ashu-1997-Thakkar',
  },
  {
    icon: 'mdi-linkedin',
    link: 'https://linkedin.com/in/ashutosh-nandani-a527b9156',
  },
  {
    icon: 'mdi-email',
    link: 'mailto:ashnandani123@gmail.com',
  },
]
</script>

<style scoped>
/* ============================================
   Footer Base
============================================ */
.footer-root {
  padding: 28px 0;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

/* Text */
.footer-text {
  color: #e5e7eb;
  font-size: 1rem;
}

.footer-subtext {
  color: #94a3b8;
  font-size: 0.9rem;
}

/* Gradient Name */
.gradient-text {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Social Buttons */
.social-btn {
  margin-left: 8px;
  transition: transform 0.3s ease, color 0.3s ease;
  color: #e5e7eb;
}

.social-btn:hover {
  transform: translateY(-4px) scale(1.1);
  color: #6366f1;
}

/* Mobile */
@media (max-width: 768px) {
  .footer-text,
  .footer-subtext {
    text-align: center;
  }

  .social-btn {
    margin: 0 6px;
  }
}
</style>
