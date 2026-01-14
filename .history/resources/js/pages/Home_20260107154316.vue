<template>
  <div class="home-page">
    <!-- ================= SPLASH SCREEN ================= -->
    <transition name="fade">
      <div v-if="showSplash" class="splash-screen">
        <h1>Loading Portfolio...</h1>
        <p>Laravel • Vue • Full Stack</p>
      </div>
    </transition>

    <!-- ================= HERO SECTION ================= -->
    <section v-if="!showSplash" class="hero-section">
      <!-- Background Effects -->
      <div class="bg-effects">
        <span class="blob b1"></span>
        <span class="blob b2"></span>
        <span class="blob b3"></span>
      </div>

      <v-container>
        <v-row class="min-vh-100 align-center">
          <!-- LEFT CONTENT -->
          <v-col cols="12" md="6">
            <div class="hero-content">
              <p class="intro">
                <span class="wave">👋</span> Hi, my name is
              </p>

              <h1 class="hero-title">
                <span class="name-first">Mr Ashutosh</span><br />
                <span class="name-last">Nandani</span>
              </h1>

              <h2 class="typing-line">
                <span ref="typingText"></span>  
                <span class="cursor">|</span>
              </h2>

              <p class="hero-desc">
                I’m a <strong>Laravel Full Stack Developer</strong> focused on
                building clean, scalable and high-performance applications
                using <strong>Laravel, Vue.js & MySQL</strong>.
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
                  class="secondary-btn"
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
                  class="social-btn"
                  :style="{ '--icon-color': s.color }"
                >
                  <v-icon>{{ s.icon }}</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- RIGHT VISUAL -->
          <v-col cols="12" md="6">
            <div class="hero-visual">
              <div class="avatar glass">
                <img
                  src="/images/hero/fullstack-developer.png"
                  alt="Full Stack Developer Illustration"
                  class="hero-image"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ================= ABOUT ME SECTION ================= -->
    <div class="about-section">
      <v-container>
        <v-row class="align-center">
          <!-- LEFT CONTENT -->
          <v-col cols="12" md="6">
            <div class="about-content">
              <h2 class="about-title">Who am I?</h2>
              <p class="about-text">
                I'm Ashutosh Nandani, a passionate Full Stack Developer
                focused on building scalable and high-performance applications
                using Laravel, Vue.js, and MySQL.
              </p>
              <p class="about-desc">
                I have worked on numerous projects and I am always eager to
                learn new technologies to improve my skills and deliver the best
                possible results for my clients.
              </p>

              <p class="technologies">
                <strong>Technologies I have worked with:</strong>
                <div class="tech-list">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Vue.js</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                  <span>PHP</span>
                </div>
              </p>

              <!-- Resume Button -->
              <v-btn
                size="large"
                variant="outlined"
                color="primary"
                href="/path/to/your/resume.pdf"
                target="_blank"
              >
                Resume
              </v-btn>
            </div>
          </v-col>

          <!-- RIGHT IMAGE -->
          <v-col cols="12" md="6">
            <div class="about-image">
              <img
                src="/images/your-image.png" <!-- Replace with your image path -->
                alt="Full Stack Developer Illustration"
                class="image-style"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showSplash = ref(true) // This is to control the splash screen visibility

// Social Links
const socialLinks = [
  {
    name: 'GitHub',
    icon: 'mdi-github',
    url: 'https://github.com/Ashu-1997-Thakkar',
    color: '#181717',
  },
  {
    name: 'LinkedIn',
    icon: 'mdi-linkedin',
    url: 'https://linkedin.com/in/ashutosh-nandani-a527b9156',
    color: '#0A66C2',
  },
  {
    name: 'Email',
    icon: 'mdi-email-outline',
    url: 'mailto:ashnandani123@gmail.com',
    color: '#EA4335',
  },
  {
    name: 'WhatsApp',
    icon: 'mdi-whatsapp',
    url: 'https://wa.me/917490026191', // Replace with your number
    color: '#25D366',
  },
  {
    name: 'Twitter',
    icon: 'mdi-twitter',
    url: 'https://x.com/ashutoshna76158',
    color: '#1DA1F2',
  },
  {
    name: 'Portfolio',
    icon: 'mdi-web',
    url: '/',
  },
]

// Handling splash screen logic
onMounted(() => {
  setTimeout(() => {
    showSplash.value = false; // Hide splash screen after 2 seconds
  }, 2000)
})
</script>

<style scoped>
.splash-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #020617;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  text-align: center;
}

/* ================= HERO ================= */
.hero-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #f8fafc, #eef2ff);
}

/* More styling */
.hero-content {
  z-index: 2;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
}

.hero-visual {
  position: relative;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 260px;
  height: 260px;
  border-radius: 50%;
}

.hero-image {
  width: 360px;
  max-width: 100%;
  height: auto;
}

.about-section {
  padding: 60px 0;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
}

.about-text {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
}

.about-desc {
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
}

.technologies {
  font-size: 1rem;
  color: #444;
  margin-bottom: 20px;
}

.tech-list {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.tech-list span {
  background-color: #f0f0f0;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  color: #333;
}
</style>
