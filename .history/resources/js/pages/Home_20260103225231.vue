<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Ashutosh Nandani | Software Developer',
  meta: [
    {
      name: 'description',
      content:
        'Ashutosh Nandani is a Software Developer specializing in Laravel, Vue & WordPress with 2+ years experience.',
    },
    {
      name: 'keywords',
      content:
        'Laravel Developer, Vue Developer, PHP Developer, WordPress Developer',
    },
  ],
})
</script>

<template>
  <!-- HERO -->
  <section class="bg-light py-5">
    <div class="container py-5">
      <div class="row align-items-center">
        
        <!-- LEFT -->
        <div class="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <h1 class="display-4 fw-bold text-primary">
            Ashutosh Nandani
          </h1>

          <h4 class="text-muted mb-4">
            Software Developer | Laravel | Vue | WordPress
          </h4>

          <p class="lead text-dark">
            Passionate Full-Stack Developer with 2+ years of experience
            building scalable and secure web applications using
            Laravel, Vue.js and WordPress.
          </p>

          <div class="mt-4">
            <a
              href="mailto:ashnandani123@gmail.com"
              class="btn btn-primary btn-lg me-2"
            >
              Hire Me
            </a>

            <a
              href="/resume/Ashutosh_Nandani_CV.pdf"
              target="_blank"
              class="btn btn-outline-primary btn-lg me-2"
            >
              Download CV
            </a>

            <a
              href="https://github.com/Ashu-1997-Thakkar"
              target="_blank"
              class="btn btn-dark btn-lg"
            >
              GitHub
            </a>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="col-md-6 text-center" data-aos="zoom-in">
          <img
            src="/images/hero-image.png"
            alt="Ashutosh Nandani"
            class="img-fluid rounded shadow"
            style="max-height: 380px"
          />
        </div>

      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section class="py-5 bg-white">
    <div class="container">
      <h2 class="fw-bold text-center mb-5">
        Technologies I Work With
      </h2>

      <div class="row justify-content-center">
        
        <div class="col-md-4 mb-4" data-aos="fade-up">
          <div class="card shadow-sm h-100 text-center p-4">
            <img
              src="/images/laravel-logo.png"
              class="mx-auto mb-3"
              style="height: 50px"
            />
            <h5 class="fw-bold">Laravel</h5>
            <p class="text-muted">
              REST APIs, Authentication, Payment Integration
            </p>
          </div>
        </div>

        <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="150">
          <div class="card shadow-sm h-100 text-center p-4">
            <img
              src="/images/vue-logo.png"
              class="mx-auto mb-3"
              style="height: 50px"
            />
            <h5 class="fw-bold">Vue.js</h5>
            <p class="text-muted">
              SPA, Vue 3, UI Animations
            </p>
          </div>
        </div>

        <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="card shadow-sm h-100 text-center p-4">
            <img
              src="/images/wordpress-logo.png"
              class="mx-auto mb-3"
              style="height: 50px"
            />
            <h5 class="fw-bold">WordPress</h5>
            <p class="text-muted">
              Custom Themes & Plugins
            </p>
          </div>
        </div>

      </div>

      <div class="text-center mt-4">
        <a href="#projects" class="btn btn-primary btn-lg">
          View My Work
        </a>
      </div>
    </div>
  </section>
</template>
