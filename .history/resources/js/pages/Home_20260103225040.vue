<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Ashutosh Nandani | Full Stack Developer',
  meta: [
    {
      name: 'description',
      content:
        'Ashutosh Nandani – Full Stack Developer specializing in Laravel, Vue.js & WordPress with 2+ years experience.',
    },
    {
      name: 'keywords',
      content:
        'Laravel Developer, Vue Developer, PHP Developer, WordPress Developer, Full Stack Developer',
    },
  ],
})
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen flex items-center justify-center
           bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden"
  >
    <!-- glowing blobs -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      <!-- LEFT -->
      <div data-aos="fade-right">
        <p class="text-primary font-semibold mb-3 tracking-wide uppercase">
          👋 Hello, I’m
        </p>

        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Ashutosh
          <span
            class="block text-transparent bg-clip-text
                   bg-gradient-to-r from-primary to-secondary"
          >
            Nandani
          </span>
        </h1>

        <h2 class="text-xl md:text-2xl text-gray-300 mb-6">
          Software Developer · Laravel · Vue · WordPress
        </h2>

        <p class="text-gray-400 max-w-xl mb-8 leading-relaxed">
          Passionate Full-Stack Developer with 2+ years of experience building
          scalable, secure and high-performance web applications.
          I specialize in Laravel backends, modern Vue interfaces
          and custom CMS solutions.
        </p>

        <!-- CTA -->
        <div class="flex flex-wrap gap-4">
          <a
            href="mailto:ashnandani123@gmail.com"
            class="px-6 py-3 rounded-xl bg-primary text-white font-semibold
                   hover:scale-105 transition shadow-lg"
          >
            Hire Me
          </a>

          <a
            href="/resume/Ashutosh_Nandani_CV.pdf"
            target="_blank"
            class="px-6 py-3 rounded-xl border border-primary
                   hover:bg-primary hover:text-white transition"
          >
            Download CV
          </a>

          <a
            href="https://github.com/Ashu-1997-Thakkar"
            target="_blank"
            class="px-6 py-3 rounded-xl border border-gray-600
                   hover:border-secondary hover:text-secondary transition"
          >
            GitHub
          </a>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="flex justify-center" data-aos="zoom-in">
        <div
          class="relative bg-white/10 backdrop-blur-xl
                 rounded-3xl p-6 shadow-2xl border border-white/20"
        >
          <img
            src="/images/hero-image.png"
            alt="Ashutosh Nandani"
            class="w-72 md:w-80 rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- TECH STACK -->
  <section class="py-24 bg-slate-950 text-white">
    <div class="max-w-6xl mx-auto px-6">
      <h3
        class="text-3xl md:text-4xl font-bold text-center mb-16"
        data-aos="fade-up"
      >
        Technologies I Work With
      </h3>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Laravel -->
        <div
          class="bg-white/5 backdrop-blur-lg border border-white/10
                 rounded-2xl p-8 text-center
                 hover:-translate-y-2 transition"
          data-aos="fade-up"
        >
          <img src="/images/laravel-logo.png" class="h-12 mx-auto mb-5" />
          <h4 class="text-xl font-semibold">Laravel</h4>
          <p class="text-gray-400 text-sm mt-3">
            REST APIs, Authentication, Queues, Payment Gateways
          </p>
        </div>

        <!-- Vue -->
        <div
          class="bg-white/5 backdrop-blur-lg border border-white/10
                 rounded-2xl p-8 text-center
                 hover:-translate-y-2 transition"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <img src="/images/vue-logo.png" class="h-12 mx-auto mb-5" />
          <h4 class="text-xl font-semibold">Vue.js</h4>
          <p class="text-gray-400 text-sm mt-3">
            Vue 3, SPA, Vite, Animations, UI/UX
          </p>
        </div>

        <!-- WordPress -->
        <div
          class="bg-white/5 backdrop-blur-lg border border-white/10
                 rounded-2xl p-8 text-center
                 hover:-translate-y-2 transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src="/images/wordpress-logo.png" class="h-12 mx-auto mb-5" />
          <h4 class="text-xl font-semibold">WordPress</h4>
          <p class="text-gray-400 text-sm mt-3">
            Custom Themes, Plugins, CMS Solutions
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <a
          href="#projects"
          class="inline-block px-10 py-4 rounded-xl font-semibold text-white
                 bg-gradient-to-r from-primary to-secondary
                 hover:scale-105 transition shadow-xl"
        >
          View My Work
        </a>
      </div>
    </div>
  </section>
</template>
