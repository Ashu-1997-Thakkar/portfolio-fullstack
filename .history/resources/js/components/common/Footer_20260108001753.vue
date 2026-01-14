<!-- ============================================ -->
<!-- FILE: resources/js/components/common/Footer.vue -->
<!-- ============================================ -->
<template>
  <footer class="footer-root">
    <!-- Animated Background -->
    <div class="footer-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="grid-pattern"></div>
    </div>

    <v-container class="footer-container">
      <!-- Main Footer Content -->
      <v-row class="footer-main">
        <!-- Left Section - Brand & Info -->
        <v-col cols="12" md="4" class="footer-col">
          <div class="brand-section">
            <div class="footer-brand">
              <span class="brand-name">Ashutosh</span>
              <span class="brand-surname">Nandani</span>
            </div>
            <p class="brand-tagline">
              Full Stack Developer specializing in Laravel, Vue.js, and MySQL
            </p>
            <div class="availability-badge">
              <span class="pulse-dot"></span>
              <span>Available for Freelance</span>
            </div>
          </div>
        </v-col>

        <!-- Middle Section - Quick Links -->
        <v-col cols="12" md="4" class="footer-col">
          <div class="links-section">
            <h4 class="section-title">Quick Links</h4>
            <div class="footer-links">
              <router-link
                v-for="link in quickLinks"
                :key="link.url"
                :to="link.url"
                class="footer-link"
              >
                <v-icon size="16">{{ link.icon }}</v-icon>
                {{ link.name }}
              </router-link>
            </div>
          </div>
        </v-col>

        <!-- Right Section - Contact & Social -->
        <v-col cols="12" md="4" class="footer-col">
          <div class="contact-section">
            <h4 class="section-title">Get In Touch</h4>
            <div class="contact-links">
              <a
                v-for="contact in contactInfo"
                :key="contact.value"
                :href="contact.link"
                target="_blank"
                class="contact-link"
              >
                <v-icon size="18" :color="contact.color">{{ contact.icon }}</v-icon>
                <span>{{ contact.value }}</span>
              </a>
            </div>

            <!-- Social Links -->
            <div class="social-links">
              <a
                v-for="social in socials"
                :key="social.icon"
                :href="social.link"
                target="_blank"
                class="social-btn"
                :style="{ '--social-color': social.color }"
                :title="social.label"
              >
                <v-icon size="20">{{ social.icon }}</v-icon>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom Footer -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>
            © {{ year }}
            <strong class="gradient-text">Ashutosh Hareshkumar Nandani</strong>
            • All rights reserved
          </p>
        </div>

        <div class="footer-meta">
          <span class="meta-item">
            <v-icon size="14">mdi-heart</v-icon>
            Built with Laravel & Vue.js
          </span>
          <span class="separator">•</span>
          <span class="meta-item">
            <v-icon size="14">mdi-code-tags</v-icon>
            Designed & Developed by Me
          </span>
        </div>
      </div>

      <!-- Back to Top Button -->
      <button @click="scrollToTop" class="back-to-top" :class="{ visible: showBackToTop }">
        <v-icon size="24">mdi-arrow-up</v-icon>
      </button>
    </v-container>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const year = new Date().getFullYear()
const showBackToTop = ref(false)

const quickLinks = [
  { name: 'Home', url: '/', icon: 'mdi-home' },
  { name: 'About', url: '/about', icon: 'mdi-account' },
  { name: 'Skills', url: '/skills', icon: 'mdi-code-tags' },
  { name: 'Experience', url: '/experience', icon: 'mdi-briefcase' },
  { name: 'Projects', url: '/projects', icon: 'mdi-folder-multiple' },
  { name: 'Contact', url: '/contact', icon: 'mdi-message-text' },
]

const contactInfo = [
  {
    icon: 'mdi-email',
    value: 'ashnandani123@gmail.com',
    link: 'mailto:ashnandani123@gmail.com',
    color: '#EA4335'
  },
  {
    icon: 'mdi-phone',
    value: '+91 7490026191',
    link: 'tel:+917490026191',
    color: '#22d3ee'
  },
  {
    icon: 'mdi-map-marker',
    value: 'Vadodara, Gujarat, India',
    link: 'https://maps.google.com/?q=Vadodara,Gujarat',
    color: '#6366f1'
  },
]

const socials = [
  {
    icon: 'mdi-github',
    link: 'https://github.com/Ashu-1997-Thakkar',
    label: 'GitHub',
    color: '#181717'
  },
  {
    icon: 'mdi-linkedin',
    link: 'https://linkedin.com/in/ashutosh-nandani-a527b9156',
    label: 'LinkedIn',
    color: '#0A66C2'
  },
  {
    icon: 'mdi-twitter',
    link: 'https://x.com/ashutoshna76158',
    label: 'Twitter',
    color: '#1DA1F2'
  },
  {
    icon: 'mdi-whatsapp',
    link: 'https://wa.me/917490026191',
    label: 'WhatsApp',
    color: '#25D366'
  },
  {
    icon: 'mdi-email',
    link: 'mailto:ashnandani123@gmail.com',
    label: 'Email',
    color: '#EA4335'
  },
]

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ================= FOOTER ROOT ================= */
.footer-root {
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 80px 0 0;
  overflow: hidden;
}

/* Animated Background */
.footer-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
  animation: orbFloat 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  top: -100px;
  right: -100px;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #22d3ee, #3b82f6);
  bottom: -100px;
  left: -100px;
  animation-delay: -10s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
}

.footer-container {
  position: relative;
  z-index: 2;
}

/* ================= MAIN FOOTER ================= */
.footer-main {
  margin-bottom: 40px;
}

.footer-col {
  display: flex;
  align-items: flex-start;
}

/* ================= BRAND SECTION ================= */
.brand-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
}

.brand-name {
  font-size: 1.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.brand-surname {
  font-size: 1.5rem;
  font-weight: 900;
  color: #22d3ee;
  letter-spacing: -0.5px;
}

.brand-tagline {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 300px;
}

.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 50px;
  color: #22c55e;
  font-size: 0.85rem;
  font-weight: 600;
  width: fit-content;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

/* ================= LINKS SECTION ================= */
.links-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  width: fit-content;
}

.footer-link:hover {
  color: #22d3ee;
  transform: translateX(5px);
}

/* ================= CONTACT SECTION ================= */
.contact-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: #fff;
  transform: translateX(5px);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.social-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: var(--social-color);
  color: #fff;
  border-color: var(--social-color);
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* ================= DIVIDER ================= */
.footer-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  margin: 40px 0 32px;
}

/* ================= BOTTOM FOOTER ================= */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
}

.copyright {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.copyright p {
  margin: 0;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.separator {
  color: rgba(255, 255, 255, 0.3);
}

/* ================= BACK TO TOP BUTTON ================= */
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.6);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .footer-root {
    padding: 60px 0 0;
  }

  .footer-main {
    text-align: center;
  }

  .footer-col {
    justify-content: center;
    margin-bottom: 40px;
  }

  .brand-section,
  .links-section,
  .contact-section {
    align-items: center;
  }

  .brand-tagline {
    text-align: center;
  }

  .footer-links,
  .contact-links {
    align-items: center;
  }

  .footer-link,
  .contact-link {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-meta {
    justify-content: center;
  }

  .back-to-top {
    bottom: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 600px) {
  .footer-root {
    padding: 40px 0 0;
  }

  .brand-name {
    font-size: 1.5rem;
  }

  .brand-surname {
    font-size: 1.3rem;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .footer-meta {
    flex-direction: column;
    gap: 8px;
  }

  .separator {
    display: none;
  }

  .back-to-top {
    width: 44px;
    height: 44px;
  }
}
</style>