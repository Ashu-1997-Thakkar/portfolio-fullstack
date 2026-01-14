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
                web applications using <strong>Laravel, Vue.js & MySQL</strong>.
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

// Typing animation (professional roles)
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

<style scoped>
/* ================= HERO ================= */
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-content {
  z-index: 2;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.hero-title {
  font-size: clamp(2.8rem, 6vw, 4.6rem);
  font-weight: 900;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typing-line {
  min-height: 46px;
  font-size: 1.7rem;
  color: #6366f1;
  margin-top: 6px;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-desc {
  max-width: 540px;
  margin: 22px 0 30px;
  color: #555;
}

/* ================= CTA ================= */
.cta-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.primary-btn {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #fff;
}

/* ================= SOCIAL ================= */
.socials {
  margin-top: 28px;
}

.socials .v-btn:hover {
  transform: translateY(-4px);
}

/* ================= VISUAL ================= */
.hero-visual {
  position: relative;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.tech-chip {
  position: absolute;
  padding: 10px 18px;
  border-radius: 14px;
  font-weight: 600;
  background: rgba(15, 23, 42, 0.85);
  color: #fff;
  animation: float 6s ease-in-out infinite;
}

.t1 { top: 8%; left: 12%; }
.t2 { top: 18%; right: 10%; animation-delay: -2s; }
.t3 { bottom: 18%; left: 8%; animation-delay: -4s; }
.t4 { bottom: 10%; right: 12%; animation-delay: -6s; }

@keyframes float {
  50% { transform: translateY(-16px); }
}

/* ================= BACKGROUND ================= */
.bg-effects .blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
}

.b1 {
  width: 320px;
  height: 320px;
  background: #6366f1;
  top: -80px;
  left: -80px;
}

.b2 {
  width: 260px;
  height: 260px;
  background: #22d3ee;
  bottom: 10%;
  right: 10%;
}

.b3 {
  width: 200px;
  height: 200px;
  background: #4f46e5;
  top: 45%;
  left: 40%;
}

/* ================= STATS ================= */
.stats-section {
  padding: 80px 0;
}

.stat-card {
  text-align: center;
  padding: 40px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
}

.stat-card h3 {
  font-size: 2rem;
  color: #6366f1;
  margin-bottom: 8px;
}

/* ================= CTA STRIP ================= */
.cta-strip {
  padding: 100px 0;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  color: #fff;
}

.cta-sub {
  max-width: 600px;
  margin: 12px auto 0;
}

/* ================= GLASS ================= */
.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .cta-buttons {
    flex-direction: column;
  }

  .hero-visual {
    height: 360px;
    margin-top: 40px;
  }
}
</style>
