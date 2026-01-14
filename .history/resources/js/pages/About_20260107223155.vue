<script setup>
import { useHead } from '@vueuse/head';

// Set meta and title for this page
useHead({
  title: 'About Me - Ashutosh Nandani',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Ashutosh Nandani, a dedicated Laravel & PHP Developer with expertise in WordPress, and a passion for building scalable web applications.',
    },
  ],
});
</script>

<template>
  <div class="container mt-5">
    <!-- About Section Title -->
    <h2 class="mb-4 text-center text-dark fw-bold">About Me</h2>

    <!-- About Content -->
    <div class="row justify-content-center">
      <div class="col-md-8">
        <p>
          I am a dedicated <strong>Software Developer</strong> with strong expertise in <strong>PHP, Laravel</strong>, and <strong>WordPress</strong> development. 
          Currently working at <strong>Information Technology Centre (ITC), Anand</strong> as a Software & Website Developer.
        </p>

        <p>
          Over the past few years, I have developed a wide range of Laravel-based projects including an <strong>e-commerce platform</strong> and a <strong>Facebook-like social application</strong>. 
          I am also providing freelance Laravel development services, focusing on performance, clean architecture, and scalable solutions.
        </p>

        <p>
          I hold a <strong>BCA degree</strong>, completed an <strong>ITI Copa course</strong>, and have earned a professional <strong>PHP with Laravel certification</strong>.
        </p>

        <p>
          Languages: <strong>English</strong>, <strong>Hindi</strong>, <strong>Gujarati</strong>.
        </p>
      </div>
    </div>

    <!-- Skills & Tools -->
    <div class="mt-5 text-center">
      <h4 class="fw-bold text-dark">My Skills</h4>
      <div class="d-flex justify-content-center mt-3">
        <v-chip class="mr-2" color="primary" text-color="white">Laravel</v-chip>
        <v-chip class="mr-2" color="success" text-color="white">PHP</v-chip>
        <v-chip class="mr-2" color="indigo" text-color="white">MySQL</v-chip>
        <v-chip class="mr-2" color="orange" text-color="white">WordPress</v-chip>
        <v-chip class="mr-2" color="blue" text-color="white">JavaScript</v-chip>
        <v-chip class="mr-2" color="purple" text-color="white">Vue.js</v-chip>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-dark {
  color: #333;
}

.fw-bold {
  font-weight: 700;
}

@media (max-width: 768px) {
  .text-center {
    text-align: center;
  }

  .fw-bold {
    font-size: 1.25rem;
  }
}
</style>
