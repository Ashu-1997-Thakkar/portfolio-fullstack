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
          <v-col cols="12" md="6">
            <div class="hero-content">
              <p class="intro">
                <span class="wave">👋</span> Hi, my name is
              </p>

              <h1 class="hero-title">
                <span class="name-first">Ashutosh</span><br />
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
      src="/images/hero/fullstack developer.png"
      alt="Full Stack Developer Illustration"
      class="hero-image"
    />
  </div>
</div>


          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const typingText = ref(null)

const socialLinks = [
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/Ashu-1997-Thakkar' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://linkedin.com/in/ashutosh-nandani-a527b9156' },
  { name: 'Twitter', icon: 'mdi-twitter', url: 'https://twitter.com/AshuNandani' },
  { name: 'Instagram', icon: 'mdi-instagram', url: 'https://instagram.com/ashu_nandani' },
  
]

onMounted(() => {
  const roles = [
    'Vue.js Frontend Engineer',
    'Laravel Full Stack Developer',
    'API & Database Specialist',
  ]

  let i = 0, j = 0, del = false

  const type = () => {
    const text = roles[i]
    j = del ? j - 1 : j + 1
    typingText.value.textContent = text.slice(0, j)

    if (!del && j === text.length) setTimeout(() => del = true, 1200)
    if (del && j === 0) { del = false; i = (i + 1) % roles.length }

    setTimeout(type, del ? 60 : 90)
  }

  type()
})
</script>

<style scoped>
.hero-visual {
  position: relative;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-image {
  width: 360px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  animation: float 6s ease-in-out infinite;
}

/* Smooth floating animation */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
  100% { transform: translateY(0); }
}

/* ================= HERO ================= */
.hero-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #f8fafc, #eef2ff);
}

.hero-content {
  z-index: 2;
}

.intro {
  font-size: 1rem;
  color: #64748b;
}

.hero-title {
  margin-top: 6px;
  line-height: 1.05;
}

.name-first {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  color: #4f46e5;
}

.name-last {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typing-line {
  margin-top: 14px;
  font-size: 1.4rem;
  color: #4f46e5;
  min-height: 40px;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-desc {
  max-width: 520px;
  margin: 22px 0 34px;
  color: #475569;
  font-size: 1rem;
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
  border-radius: 14px;
}

.secondary-btn {
  border-radius: 14px;
  border: 2px solid #6366f1 !important;
  color: #6366f1 !important;
  font-weight: 700;
  letter-spacing: 0.6px;
  padding: 14px 28px !important;
  height: 52px !important;
  background: transparent !important;
  transition: all 0.3s ease;
}

/* hover effect */
.secondary-btn:hover {
  background: linear-gradient(135deg, #6366f1, #22d3ee) !important;
  color: #ffffff !important;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.35);
}

/* icon color fix */
.secondary-btn :deep(.v-icon) {
  color: inherit;
}
.secondary-btn {
  border-radius: 14px;
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
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.tech-chip {
  position: absolute;
  padding: 8px 18px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.8rem;
  background: rgba(15, 23, 42, 0.9);
  color: #fff;
  animation: float 6s ease-in-out infinite;
}

.t1 { top: 10%; left: 12%; }
.t2 { top: 18%; right: 12%; animation-delay: -2s; }
.t3 { bottom: 18%; left: 10%; animation-delay: -4s; }
.t4 { bottom: 10%; right: 14%; animation-delay: -6s; }

@keyframes float {
  50% { transform: translateY(-14px); }
}

/* ================= BACKGROUND ================= */
.bg-effects .blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.35;
}

.b1 { width: 320px; height: 320px; background: #6366f1; top: -80px; left: -80px; }
.b2 { width: 260px; height: 260px; background: #22d3ee; bottom: 12%; right: 10%; }
.b3 { width: 220px; height: 220px; background: #4f46e5; top: 45%; left: 45%; }

/* ================= GLASS ================= */
.glass {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.35);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .hero-visual {
    height: 340px;
    margin-top: 40px;
  }
  .cta-buttons {
    flex-direction: column;
  }
}
</style>
