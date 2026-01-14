<!-- ============================================ -->
<!-- FILE: resources/js/pages/Home.vue -->
<!-- ============================================ -->

<template>
  <div class="home-page">
    <!-- ================= HERO SECTION ================= -->
    <section class="hero-section">
      <!-- Animated Background -->
      <div class="hero-bg">
        <div class="grid-overlay"></div>
        <div class="gradient-blob blob-1"></div>
        <div class="gradient-blob blob-2"></div>
        <div class="gradient-blob blob-3"></div>
        <div class="particles">
          <span v-for="n in 20" :key="n" class="particle" :style="getParticleStyle(n)"></span>
        </div>
      </div>

      <v-container class="hero-container">
        <v-row class="align-center justify-center">
          <!-- LEFT CONTENT -->
          <v-col cols="12" lg="6" md="6">
            <div class="hero-content" data-aos="fade-right">
              <!-- Badge -->
              <div class="status-badge">
                <span class="pulse-dot"></span>
                <span class="badge-text">Available for Freelance</span>
              </div>

              <!-- Greeting -->
              <div class="greeting">
                <span class="wave-emoji">👋</span>
                <span class="greeting-text">Hello, I'm</span>
              </div>

              <!-- Name -->
              <h1 class="hero-name">
                <span class="name-line">Ashutosh</span>
                <span class="name-line gradient-text">Nandani</span>
              </h1>

              <!-- Typing Animation -->
              <div class="typing-container">
                <span class="typing-prefix">I'm a</span>
                <span ref="typingText" class="typing-text"></span>
                <span class="cursor-blink">|</span>
              </div>

              <!-- Description -->
              <p class="hero-description">
                Passionate <strong>Full Stack Developer</strong> specializing in building 
                scalable web applications with <span class="highlight">Laravel</span>, 
                <span class="highlight">Vue.js</span>, and <span class="highlight">MySQL</span>. 
                Transforming ideas into powerful digital solutions.
              </p>

              <!-- CTA Buttons -->
              <div class="cta-group">
                <v-btn
                  size="x-large"
                  class="cta-primary"
                  to="/projects"
                >
                  <v-icon left>mdi-rocket-launch-outline</v-icon>
                  View Projects
                </v-btn>

                <v-btn
                  size="x-large"
                  variant="outlined"
                  class="cta-secondary"
                  to="/contact"
                >
                  <v-icon left>mdi-message-text-outline</v-icon>
                  Let's Talk
                </v-btn>
              </div>

              <!-- Social Links -->
              <div class="social-links">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="social-icon"
                  :style="{ '--social-color': social.color }"
                  :aria-label="social.name"
                >
                  <v-icon>{{ social.icon }}</v-icon>
                </a>
              </div>
            </div>
          </v-col>

          <!-- RIGHT VISUAL -->
          <v-col cols="12" lg="6" md="6">
            <div class="hero-visual" data-aos="fade-left">
              <!-- 3D Card Effect -->
              <div class="visual-card">
                <div class="card-glow"></div>
                <div class="image-wrapper">
                  <img
                    src="/images/hero/fullstack developer.png"
                    alt="Full Stack Developer"
                    class="hero-img"
                  />
                </div>
                
                <!-- Floating Tech Badges -->
                <div class="floating-badge badge-1">
                  <v-icon size="20">mdi-laravel</v-icon>
                  <span>Laravel</span>
                </div>
                <div class="floating-badge badge-2">
                  <v-icon size="20">mdi-vuejs</v-icon>
                  <span>Vue.js</span>
                </div>
                <div class="floating-badge badge-3">
                  <v-icon size="20">mdi-database</v-icon>
                  <span>MySQL</span>
                </div>
                <div class="floating-badge badge-4">
                  <v-icon size="20">mdi-api</v-icon>
                  <span>REST API</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <span class="scroll-text">Scroll Down</span>
        </div>
      </v-container>
    </section>

    <!-- ================= ABOUT SECTION ================= -->
    <section class="about-section">
      <v-container>
        <!-- Section Header -->
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Get To Know</span>
          <h2 class="section-title">About Me</h2>
          <div class="title-underline"></div>
        </div>

        <v-row class="align-center mt-12">
          <!-- LEFT - Image -->
          <v-col cols="12" md="5" data-aos="fade-right">
            <div class="about-image-wrapper">
              <div class="image-frame">
                <div class="frame-border"></div>
                <img
                  src="/images/ashutosh Image.png"
                  alt="Ashutosh Nandani"
                  class="about-img"
                />
              </div>
              <!-- Experience Badge -->
              <div class="experience-badge">
                <div class="badge-content">
                  <span class="badge-number">2+</span>
                  <span class="badge-label">Years Experience</span>
                </div>
              </div>
            </div>
          </v-col>

          <!-- RIGHT - Content -->
          <v-col cols="12" md="7" data-aos="fade-left">
            <div class="about-content">
              <h3 class="about-heading">
                Full Stack Developer & Problem Solver
              </h3>

              <div class="about-text">
                <p>
                  Hi! I'm <strong>Ashutosh Nandani</strong>, a passionate Full Stack Developer 
                  specializing in building scalable and user-focused web applications with expertise 
                  in <strong>Laravel</strong>, <strong>Vue.js</strong>, and <strong>MySQL</strong>.
                </p>

                <p>
                  Currently working as a <strong>WordPress Developer</strong> at Information Technology 
                  Centre (ITC), Anand, while providing freelance Laravel development services. 
                  I have hands-on experience with <strong>Vtiger CRM</strong>, e-commerce platforms, 
                  and complex web applications.
                </p>

                <p>
                  With a <strong>BCA degree</strong> and professional certifications in PHP with Laravel, 
                  I'm committed to delivering high-quality software solutions that make a real impact.
                </p>
              </div>

              <!-- Tech Stack Grid -->
              <div class="tech-grid">
                <div class="tech-item" v-for="tech in techStack" :key="tech">
                  <v-icon size="16" color="#6366f1">mdi-check-circle</v-icon>
                  <span>{{ tech }}</span>
                </div>
              </div>

              <!-- Quick Stats -->
              <div class="stats-row">
                <div class="stat-box">
                  <span class="stat-value">15+</span>
                  <span class="stat-label">Projects Completed</span>
                </div>
                <div class="stat-box">
                  <span class="stat-value">3+</span>
                  <span class="stat-label">Years Experience</span>
                </div>
                <div class="stat-box">
                  <span class="stat-value">10+</span>
                  <span class="stat-label">Happy Clients</span>
                </div>
              </div>

              <!-- Download Resume -->
              <v-btn
                size="large"
                class="resume-btn"
                href="/resume/Ashutosh-Hareshkumar-Nandani-1997.pdf"
                target="_blank"
              >
                <v-icon left>mdi-download</v-icon>
                Download Resume
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ================= SKILLS PREVIEW ================= -->
    <section class="skills-preview">
      <v-container>
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">What I Do</span>
          <h2 class="section-title">My Expertise</h2>
          <div class="title-underline"></div>
        </div>

        <v-row class="mt-12">
          <v-col cols="12" md="4" v-for="(skill, i) in expertiseAreas" :key="i" data-aos="fade-up" :data-aos-delay="i * 100">
            <div class="expertise-card">
              <div class="card-icon" :style="{ background: skill.gradient }">
                <v-icon size="32" color="white">{{ skill.icon }}</v-icon>
              </div>
              <h4 class="card-title">{{ skill.title }}</h4>
              <p class="card-desc">{{ skill.desc }}</p>
              <div class="card-footer">
                <v-icon size="18" color="#6366f1">mdi-arrow-right</v-icon>
                <span>Learn More</span>
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
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/Ashu-1997-Thakkar', color: '#181717' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://linkedin.com/in/ashutosh-nandani-a527b9156', color: '#0A66C2' },
  { name: 'Email', icon: 'mdi-email-outline', url: 'mailto:ashnandani123@gmail.com', color: '#EA4335' },
  { name: 'WhatsApp', icon: 'mdi-whatsapp', url: 'https://wa.me/917490026191', color: '#25D366' },
  { name: 'Twitter', icon: 'mdi-twitter', url: 'https://x.com/ashutoshna76158', color: '#1DA1F2' },
]

const techStack = [
  'Laravel', 'Vue.js', 'MySQL', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 
  'REST API', 'Git', 'WordPress', 'Tailwind CSS', 'Bootstrap'
]

const expertiseAreas = [
  {
    icon: 'mdi-code-tags',
    title: 'Backend Development',
    desc: 'Building robust server-side applications with Laravel, PHP, and MySQL for scalable solutions.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: 'mdi-palette-outline',
    title: 'Frontend Development',
    desc: 'Creating responsive and interactive user interfaces using Vue.js, JavaScript, and modern CSS.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: 'mdi-api',
    title: 'API Development',
    desc: 'Designing and implementing RESTful APIs for seamless data communication between systems.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
]

const getParticleStyle = (n) => {
  const randomX = Math.random() * 100
  const randomY = Math.random() * 100
  const randomDelay = Math.random() * 10
  const randomDuration = 15 + Math.random() * 10
  
  return {
    left: `${randomX}%`,
    top: `${randomY}%`,
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`
  }
}

onMounted(() => {
  const roles = [
    'Full Stack Developer',
    'Laravel Expert',
    'Vue.js Engineer',
    'API Specialist',
  ]

  let i = 0, j = 0, isDeleting = false

  const type = () => {
    const currentRole = roles[i]
    
    if (isDeleting) {
      j--
    } else {
      j++
    }
    
    typingText.value.textContent = currentRole.substring(0, j)

    let typeSpeed = isDeleting ? 50 : 100

    if (!isDeleting && j === currentRole.length) {
      typeSpeed = 2000
      isDeleting = true
    } else if (isDeleting && j === 0) {
      isDeleting = false
      i = (i + 1) % roles.length
      typeSpeed = 500
    }

    setTimeout(type, typeSpeed)
  }

  type()
})
</script>

<style scoped>
/* ================= GLOBAL STYLES ================= */
.home-page {
  overflow-x: hidden;
}

/* ================= HERO SECTION ================= */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  overflow: hidden;
  padding: 100px 0 60px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.gradient-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  animation: blobFloat 20s ease-in-out infinite;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  top: -100px;
  left: -100px;
}

.blob-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #22d3ee, #3b82f6);
  bottom: -100px;
  right: -100px;
  animation-delay: -10s;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -5s;
}

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(99, 102, 241, 0.6);
  border-radius: 50%;
  animation: particleFloat 20s ease-in-out infinite;
}

@keyframes particleFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
}

.hero-container {
  position: relative;
  z-index: 2;
}

/* ================= HERO CONTENT ================= */
.hero-content {
  color: #fff;
  padding: 20px 0;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.3);
  border-radius: 50px;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #22d3ee;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.badge-text {
  font-size: 0.85rem;
  font-weight: 600;
  color: #22d3ee;
  letter-spacing: 0.5px;
}

.greeting {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.wave-emoji {
  font-size: 2rem;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20%, 40% { transform: rotate(-8deg); }
  50% { transform: rotate(14deg); }
  60% { transform: rotate(0deg); }
}

.greeting-text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.hero-name {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -2px;
}

.name-line {
  display: block;
  color: #fff;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 50%, #a855f7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.typing-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  min-height: 50px;
}

.typing-prefix {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.typing-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #22d3ee;
}

.cursor-blink {
  font-size: 1.5rem;
  color: #22d3ee;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  max-width: 580px;
  margin-bottom: 32px;
}

.hero-description .highlight {
  color: #22d3ee;
  font-weight: 600;
}

/* ================= CTA BUTTONS ================= */
.cta-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.cta-primary {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
  color: #fff !important;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 32px !important;
  height: 56px !important;
  border-radius: 12px !important;
  text-transform: none;
  letter-spacing: 0.3px;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
  transition: all 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.6);
}

.cta-secondary {
  border: 2px solid rgba(34, 211, 238, 0.5) !important;
  color: #22d3ee !important;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 32px !important;
  height: 56px !important;
  border-radius: 12px !important;
  text-transform: none;
  letter-spacing: 0.3px;
  background: rgba(34, 211, 238, 0.05) !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  background: #22d3ee !important;
  color: #0f172a !important;
  border-color: #22d3ee !important;
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(34, 211, 238, 0.4);
}

/* ================= SOCIAL LINKS ================= */
.social-links {
  display: flex;
  gap: 12px;
}

.social-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-icon:hover {
  background: var(--social-color);
  color: #fff;
  border-color: var(--social-color);
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* ================= HERO VISUAL ================= */
.hero-visual {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-card {
  position: relative;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1;
  perspective: 1000px;
}

.card-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%);
  filter: blur(40px);
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(34, 211, 238, 0.1));
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: cardFloat 6s ease-in-out infinite;
}

@keyframes cardFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
}

/* ================= FLOATING BADGES ================= */
.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  animation: badgeFloat 3s ease-in-out infinite;
}

.badge-1 {
  top: 10%;
  left: -10%;
  animation-delay: 0s;
}

.badge-2 {
  top: 20%;
  right: -15%;
  animation-delay: 0.5s;
}

.badge-3 {
  bottom: 20%;
  left: -15%;
  animation-delay: 1s;
}

.badge-4 {
  bottom: 10%;
  right: -10%;
  animation-delay: 1.5s;
}

@keyframes badgeFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* ================= SCROLL INDICATOR ================= */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

.mouse {
  width: 28px;
  height: 45px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.wheel {
  width: 4px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  animation: wheelScroll 1.5s ease-in-out infinite;
}

@keyframes wheelScroll {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
}

.scroll-text {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ================= ABOUT SECTION ================= */
.about-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #22d3ee);
  border-radius: 2px;
  margin: 0 auto;
}

/* ================= ABOUT IMAGE ================= */
.about-image-wrapper {
  position: relative;
  max-width: 450px;
  margin: 0 auto;
}

.image-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.frame-border {
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background: linear-gradient(135deg, #6366f1, #22d3ee, #a855f7);
  border-radius: 20px;
  z-index: -1;
  animation: borderRotate 3s linear infinite;
}

@keyframes borderRotate {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

.about-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

.experience-badge {
  position: absolute;
  bottom: 30px;
  right: -30px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
  animation: badgeFloat 3s ease-in-out infinite;
}

.badge-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.badge-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}

.badge-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-weight: 600;
}

/* ================= ABOUT CONTENT ================= */
.about-content {
  padding: 0 20px;
}

.about-heading {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 24px;
  line-height: 1.3;
}

.about-text {
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 32px;
}

.about-text p {
  margin-bottom: 16px;
}

/* ================= TECH GRID ================= */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 32px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: translateX(5px);
}

.tech-item span {
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
}

/* ================= STATS ROW ================= */
.stats-row {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.stat-box {
  flex: 1;
  min-width: 140px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(34, 211, 238, 0.05));
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
}

/* ================= RESUME BUTTON ================= */
.resume-btn {
  background: linear-gradient(135deg, #6366f1, #8b5cf6) !important;
  color: #fff !important;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 32px !important;
  height: 52px !important;
  border-radius: 12px !important;
  text-transform: none;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
}

.resume-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);
}

/* ================= SKILLS PREVIEW ================= */
.skills-preview {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.expertise-card {
  padding: 32px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.expertise-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border-color: rgba(99, 102, 241, 0.3);
}

.card-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 12px;
}

.card-desc {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 24px;
  flex: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6366f1;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: gap 0.3s ease;
}

.expertise-card:hover .card-footer {
  gap: 12px;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .hero-section {
    padding: 80px 0 40px;
  }

  .hero-visual {
    height: 400px;
    margin-top: 60px;
  }

  .visual-card {
    max-width: 350px;
  }

  .floating-badge {
    font-size: 0.75rem;
    padding: 8px 12px;
  }

  .badge-1,
  .badge-3 {
    left: 0;
  }

  .badge-2,
  .badge-4 {
    right: 0;
  }

  .cta-group {
    flex-direction: column;
    align-items: stretch;
  }

  .about-section {
    padding: 60px 0;
  }

  .skills-preview {
    padding: 60px 0;
  }

  .experience-badge {
    right: 10px;
    bottom: 20px;
  }

  .stats-row {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .hero-name {
    font-size: 2.5rem;
  }

  .typing-prefix,
  .typing-text {
    font-size: 1.2rem;
  }

  .social-links {
    justify-content: center;
  }

  .scroll-indicator {
    display: none;
  }
}
</style>