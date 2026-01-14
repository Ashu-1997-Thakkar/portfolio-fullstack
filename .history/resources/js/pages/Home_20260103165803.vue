<script setup>
import { useHead } from '@vueuse/head';

// Set meta and title for this page
useHead({
  title: 'Ashutosh Nandani | Laravel & Vue Developer',
  meta: [
    {
      name: 'description',
      content:
        'Ashutosh Nandani is a Laravel and WordPress Developer with 2+ years experience in web development.',
    },
    {
      name: 'keywords',
      content:
        'Laravel Developer, PHP Developer, WordPress Developer, Vue Developer, Ahmedabad',
    },
  ],
});
</script>

<template>
  <div class="container mt-5 text-center">
    <h1 class="fw-bold">Ashutosh Hareshkumar Nandani</h1>
    <h4 class="text-muted">Software Developer | Laravel & WordPress</h4>

    <p class="mt-4">
      Passionate PHP Laravel Developer with 2+ years of experience in building
      scalable and user-focused web applications. Specialized in Laravel-based
      full-stack development with hands-on experience in WordPress, CRM systems,
      and custom web solutions.
    </p>

    <div class="mt-4">
      <a
        href="mailto:ashnandani123@gmail.com"
        class="btn btn-primary me-2"
      >
        Hire Me
      </a>

      <a
        href="https://github.com/Ashu-1997-Thakkar"
        target="_blank"
        class="btn btn-outline-dark"
      >
        GitHub
      </a>
      <a
  href="/resume/Ashutosh_Nandani_CV.pdf"
  target="_blank"
  class="btn btn-success mt-3"
>
  Download Resume
</a>
    </div>
  </div>
</template>
