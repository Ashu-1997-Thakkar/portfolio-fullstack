<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Ashutosh Nandani | Full Stack Developer',
  meta: [
    {
      name: 'description',
      content:
        'Ashutosh Nandani – Full Stack Developer (Laravel, Vue, WordPress)',
    },
  ],
})
</script>

<template>
  <!-- HERO -->
  <section class="home-hero d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">

        <!-- LEFT CONTENT -->
        <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
          <span class="badge bg-primary mb-3 px-3 py-2">
            👋 Hello, I’m
          </span>

          <h1 class="display-4 fw-bold mt-3">
            Ashutosh
            <span class="text-primary d-block">Nandani</span>
          </h1>

          <h5 class="text-muted mb-4">
            Software Developer · Laravel · Vue · WordPress
          </h5>

          <p class="lead text-secondary">
            I build clean, scalable and modern web applications
            using Laravel backend and Vue powered UI.
          </p>

          <div class="mt-4 d-flex flex-wrap gap-3">
            <a
              href="mailto:ashnandani123@gmail.com"
              class="btn btn-primary btn-lg px-4"
            >
              Hire Me
            </a>

            <a
              href="/resume/Ashutosh_Nandani_CV.pdf"
              target="_blank"
              class="btn btn-outline-primary btn-lg px-4"
            >
              Download CV
            </a>

            <a
              href="https://github.com/Ashu-1997-Thakkar"
              target="_blank"
              class="btn btn-dark btn-lg px-4"
            >
              GitHub
            </a>
          </div>
        </div>

        <!-- RIGHT CARD (VIDEO INSPIRED GLASS LOOK) -->
        <div class="col-lg-6 d-flex justify-content-center" data-aos="zoom-in">
          <v-card
            elevation="12"
            class="glass-card pa-6 text-center"
            max-width="380"
          >
            <img
              src="/images/hero-image.png"
              class="img-fluid rounded mb-4"
              alt="Ashutosh"
            />

            <h5 class="fw-bold mb-1">2+ Years Experience</h5>
            <p class="text-muted mb-3">
              Building real-world applications
            </p>

            <div class="d-flex justify-content-center gap-3">
              <v-icon icon="mdi-laravel" size="28" color="red"></v-icon>
              <v-icon icon="mdi-vuejs" size="28" color="green"></v-icon>
              <v-icon icon="mdi-wordpress" size="28" color="blue"></v-icon>
            </div>
          </v-card>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  min-height: 90vh;
  background: linear-gradient(
    120deg,
    #f8f9fa 60%,
    #eef2ff 40%
  );
}

.glass-card {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
}
</style>
