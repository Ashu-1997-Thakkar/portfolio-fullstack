<!-- ============================================ -->
<!-- FILE: resources/js/pages/Home.vue -->
<!-- ============================================ -->

<template>
  <div class="home-page">
    <!-- ================= HERO SECTION ================= -->
    <section class="hero-section">
      <!-- Background Effects -->
      <div class="bg-effects">
        <span class="blob b1"></span>
        <span class="blob b2"></span>
        <span class="blob b3"></span>
      </div>

      <v-container>
        <v-row class="min-vh-100 align-center">
          <!-- LEFT CONTENT -->
          <v-col cols="12" md="6" data-aos="fade-right">
            <div class="hero-content">
              <p class="intro">
                <span class="wave">👋</span> Hi, my name is
              </p>

              <h1 class="hero-title">
                <span class="gradient-text">Ashutosh Nandani</span>
              </h1>

              <!-- Typing Effect -->
              <h2 class="typing-line">
                <span ref="typingText"></span>
                <span class="cursor">|</span>
              </h2>

              <p class="hero-desc">
                I’m a <strong>Laravel Full Stack Developer</strong> with hands-on
                experience in building scalable, secure and performance-driven
                web applications using
                <strong>Laravel, Vue.js & MySQL</strong>.
              </p>

              <!-- CTA -->
              <div class="cta-buttons">
                <v-btn
                  size="x-large"
                  class="primary-btn"
                  prepend-icon="mdi-rocket-launch"
                  to="/projects"
                >
                  View My Work
                </v-btn>

                <v-btn
                  size="x-large"
                  variant="outlined"
                  color="primary"
                  prepend-icon="mdi-email-outline"
                  to="/contact"
                >
                  Hire Me
                </v-btn>
              </div>

              <!-- SOCIAL LINKS -->
              <div class="socials">
                <v-btn
                  v-for="s in socialLinks"
                  :key="s.name"
                  :href="s.url"
                  icon
                  target="_blank"
                  :aria-label="s.name"
                >
                  <v-icon>{{ s.icon }}</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- RIGHT VISUAL -->
          <v-col cols="12" md="6" data-aos="fade-left">
            <div class="hero-visual">
              <div class="tech-chip t1">Laravel</div>
              <div class="tech-chip t2">Vue 3</div>
              <div class="tech-chip t3">MySQL</div>
              <div class="tech-chip t4">REST API</div>

              <div class="avatar glass">
                <v-icon size="170" color="primary">
                  mdi-code-tags
                </v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ================= QUICK STATS ================= -->
    <section class="stats-section" data-aos="fade-up">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <div class="stat-card">
              <h3>2+ Years</h3>
              <p>Professional Experience</p>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="stat-card">
              <h3>10+ Projects</h3>
              <p>Web Applications Built</p>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="stat-card">
              <h3>Laravel & Vue</h3>
              <p>Primary Tech Stack</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ================= CTA STRIP ================= -->
    <section class="cta-strip" data-aos="zoom-in">
      <v-container class="text-center">
        <h2>Looking for a reliable Full Stack Developer?</h2>
        <p class="cta-sub">
          Let’s turn your idea into a high-quality web application.
        </p>

        <v-btn
          size="x-large"
          color="white"
          class="text-primary mt-6"
          to="/contact"
        >
          Let’s Talk
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const typingText = ref(null)

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'mdi-github',
    url: 'https://github.com/Ashu-1997-Thakkar',
  },
  {
    name: 'LinkedIn',
    icon: 'mdi-linkedin',
    url: 'https://linkedin.com/in/ashutosh-nandani-a527b9156',
  },
]

/* --------------------
   Typing Animation
-------------------- */
onMounted(() => {
  const roles = [
    'Laravel Full Stack Developer',
    'Vue.js Frontend Engineer',
    'API & Database Specialist',
    'Problem Solver',
  ]

  let roleIndex = 0
  let charIndex = 0
  let deleting = false

  const typeEffect = () => {
    const current = roles[roleIndex]

    charIndex = deleting ? charIndex - 1 : charIndex + 1
    typingText.value.textContent = current.substring(0, charIndex)

    if (!deleting && charIndex === current.length) {
      setTimeout(() => (deleting = true), 1200)
    } else if (deleting && charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }

    setTimeout(typeEffect, deleting ? 60 : 90)
  }

  typeEffect()
})
</script>
