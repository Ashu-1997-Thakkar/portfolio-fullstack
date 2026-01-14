<template>
  <div class="home-page">
    <!-- ================= HERO SECTION ================= -->
    <section class="hero-section">
      <!-- Animated Gradient Background -->
      <div class="animated-bg">
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
                <span class="wave">👋</span> Hello, I’m
              </p>

              <h1 class="hero-title">
                <span class="gradient-text">Ashutosh</span>
              </h1>

              <!-- Typing Animation -->
              <h2 class="typing-line">
                <span ref="typingText"></span><span class="cursor">|</span>
              </h2>

              <p class="hero-desc">
                Full Stack Developer focused on building scalable,
                high-performance web applications using
                <strong>Laravel & Vue.js</strong>.
              </p>

              <!-- CTA BUTTONS -->
              <div class="cta-buttons">
                <v-btn
                  size="x-large"
                  class="primary-btn"
                  prepend-icon="mdi-rocket-launch"
                  to="/projects"
                >
                  View Projects
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

              <!-- SOCIAL -->
              <div class="socials">
                <v-btn
                  v-for="s in socialLinks"
                  :key="s.name"
                  :href="s.url"
                  icon
                  target="_blank"
                >
                  <v-icon>{{ s.icon }}</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- RIGHT VISUAL -->
          <v-col cols="12" md="6" data-aos="fade-left">
            <div class="hero-visual">
              <div class="tech-card t1">Laravel</div>
              <div class="tech-card t2">Vue 3</div>
              <div class="tech-card t3">MySQL</div>

              <div class="main-avatar glass">
                <v-icon size="180" color="primary">
                  mdi-code-tags
                </v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ================= CTA STRIP ================= -->
    <section class="cta-strip" data-aos="zoom-in">
      <v-container class="text-center">
        <h2>Let’s build something impactful together 🚀</h2>
        <v-btn
          size="x-large"
          color="white"
          class="text-primary mt-6"
          to="/contact"
        >
          Start a Conversation
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const typingText = ref(null)

const socialLinks = [
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: 'mdi-twitter', url: 'https://twitter.com' },
]

// Typing animation
onMounted(() => {
  const roles = [
    'Full Stack Developer',
    'Laravel Specialist',
    'Vue.js Engineer',
    'Problem Solver',
  ]

  let role = 0
  let char = 0
  let deleting = false

  const type = () => {
    const text = roles[role]

    char = deleting ? char - 1 : char + 1
    typingText.value.textContent = text.substring(0, char)

    if (!deleting && char === text.length) {
      setTimeout(() => (deleting = true), 1200)
    } else if (deleting && char === 0) {
      deleting = false
      role = (role + 1) % roles.length
    }

    setTimeout(type, deleting ? 60 : 100)
  }

  type()
})
</script>

<style scoped>
/* ========== HERO BASE ========== */
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
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  margin-bottom: 10px;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typing-line {
  min-height: 48px;
  font-size: 1.8rem;
  color: #6366f1;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.hero-desc {
  max-width: 520px;
  margin: 20px 0 30px;
  color: #555;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.primary-btn {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #fff;
}

/* ========== SOCIAL ========== */
.socials {
  margin-top: 30px;
}

.socials .v-btn:hover {
  transform: translateY(-4px);
}

/* ========== VISUAL ========== */
.hero-visual {
  position: relative;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-avatar {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.tech-card {
  position: absolute;
  padding: 10px 18px;
  border-radius: 14px;
  font-weight: 600;
  background: rgba(15, 23, 42, 0.85);
  color: #fff;
  animation: float 6s ease-in-out infinite;
}

.t1 { top: 10%; left: 15%; }
.t2 { bottom: 20%; right: 10%; animation-delay: -2s; }
.t3 { top: 60%; left: 5%; animation-delay: -4s; }

@keyframes float {
  50% {
    transform: translateY(-18px);
  }
}

/* ========== BACKGROUND BLOBS ========== */
.animated-bg .blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
}

.b1 {
  width: 300px;
  height: 300px;
  background: #6366f1;
  top: -50px;
  left: -50px;
}

.b2 {
  width: 250px;
  height: 250px;
  background: #22d3ee;
  bottom: 10%;
  right: 10%;
}

.b3 {
  width: 200px;
  height: 200px;
  background: #4f46e5;
  top: 50%;
  left: 40%;
}

/* ========== CTA STRIP ========== */
.cta-strip {
  padding: 100px 0;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  color: #fff;
}

.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Responsive */
@media (max-width: 960px) {
  .cta-buttons {
    flex-direction: column;
  }
}
</style>
