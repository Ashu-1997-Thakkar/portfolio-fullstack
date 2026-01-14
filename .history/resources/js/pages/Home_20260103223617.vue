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
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="fw-bold display-3 text-primary">Ashutosh Hareshkumar Nandani</h1>
      <h4 class="text-muted mb-4">Software Developer | Laravel & WordPress</h4>

      <!-- Description -->
      <p class="lead mt-4 mb-4 text-dark">
        Passionate Laravel & PHP Developer with over 2 years of experience in building scalable and user-friendly web applications.
        Specialized in full-stack development using Laravel, with hands-on experience in WordPress, CRM systems, and custom web solutions.
      </p>

      <!-- Contact & Links -->
      <div class="mt-5">
        <a
          href="mailto:ashnandani123@gmail.com"
          class="btn btn-lg btn-primary me-3"
        >
          Hire Me
        </a>
        <a
          href="https://github.com/Ashu-1997-Thakkar"
          target="_blank"
          class="btn btn-lg btn-outline-dark me-3"
        >
          GitHub
        </a>
        <a
          href="/resume/Ashutosh_Nandani_CV.pdf"
          target="_blank"
          class="btn btn-lg btn-success mt-3"
        >
          Download Resume
        </a>
      </div>
    </div>

    <!-- Animation Section -->
    <div class="mt-5">
      <img
        src="/images/hero-image.png"
        alt="Ashutosh Nandani - Developer"
        class="img-fluid shadow-lg rounded"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
    </div>

    <!-- Skills + Call to Action -->
    <div class="mt-5">
      <h3 class="fw-bold text-dark mb-4">Technologies I Work With</h3>
      <div class="row justify-content-center">
        <div class="col-md-3 mb-3">
          <div class="tech-card bg-light p-4 rounded shadow-sm">
            <h5 class="text-center">Laravel</h5>
            <img src="/images/laravel-logo.png" alt="Laravel" class="img-fluid mx-auto d-block" style="height: 50px;" />
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="tech-card bg-light p-4 rounded shadow-sm">
            <h5 class="text-center">Vue.js</h5>
            <img src="/images/vue-logo.png" alt="Vue.js" class="img-fluid mx-auto d-block" style="height: 50px;" />
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="tech-card bg-light p-4 rounded shadow-sm">
            <h5 class="text-center">WordPress</h5>
            <img src="/images/wordpress-logo.png" alt="WordPress" class="img-fluid mx-auto d-block" style="height: 50px;" />
          </div>
        </div>
      </div>

      <a href="#projects" class="btn btn-lg btn-primary mt-4">
        View My Work
      </a>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  padding-top: 50px;
  padding-bottom: 30px;
}

.tech-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
