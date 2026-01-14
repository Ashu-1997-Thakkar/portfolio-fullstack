<!-- ============================================ -->
<!-- FILE: resources/js/pages/Contact.vue -->
<!-- ============================================ -->
<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const contactInfo = [
  {
    icon: 'mdi-email',
    title: 'Email',
    value: 'ashnandani123@gmail.com',
    link: 'mailto:ashnandani123@gmail.com',
    color: '#EA4335'
  },
  {
    icon: 'mdi-phone',
    title: 'Phone',
    value: '+91 7490026191',
    link: 'tel:+917490026191',
    color: '#22d3ee'
  },
  {
    icon: 'mdi-map-marker',
    title: 'Location',
    value: 'Vadodara, Gujarat, India',
    link: 'https://maps.google.com/?q=Vadodara,Gujarat',
    color: '#6366f1'
  },
  {
    icon: 'mdi-clock-outline',
    title: 'Availability',
    value: 'Mon - Sat (9AM - 6PM)',
    link: null,
    color: '#a855f7'
  }
]

const socialLinks = [
  { icon: 'mdi-github', url: 'https://github.com/Ashu-1997-Thakkar', color: '#181717', label: 'GitHub' },
  { icon: 'mdi-linkedin', url: 'https://linkedin.com/in/ashutosh-nandani-a527b9156', color: '#0A66C2', label: 'LinkedIn' },
  { icon: 'mdi-twitter', url: 'https://x.com/ashutoshna76158', color: '#1DA1F2', label: 'Twitter' },
  { icon: 'mdi-whatsapp', url: 'https://wa.me/917490026191', color: '#25D366', label: 'WhatsApp' },
]

const validate = () => {
  errors.name = form.name ? '' : 'Name is required'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ? ''
    : 'Valid email required'
  errors.subject = form.subject ? '' : 'Subject is required'
  errors.message = form.message ? '' : 'Message is required'

  return !errors.name && !errors.email && !errors.subject && !errors.message
}

const submitForm = async () => {
  if (!validate()) return

  loading.value = true
  try {
    await axios.post('/api/contact', form)

    Swal.fire({
      icon: 'success',
      title: 'Message Sent Successfully! 🚀',
      text: 'Thanks for reaching out! I will get back to you as soon as possible.',
      confirmButtonColor: '#6366F1',
      confirmButtonText: 'Great!'
    })

    // Reset form
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops! Something went wrong',
      text: 'Please try again later or contact me directly via email.',
      confirmButtonColor: '#EF4444'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="contact-page">
    <!-- ================= HERO SECTION ================= -->
    <section class="contact-hero">
      <div class="hero-bg">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
        <div class="grid-overlay"></div>
      </div>

      <v-container>
        <div class="hero-content" data-aos="fade-up">
          <span class="hero-badge">
            <v-icon size="18">mdi-message-text</v-icon>
            Get In Touch
          </span>
          <h1 class="hero-title">
            Let's Work <span class="gradient-text">Together</span>
          </h1>
          <p class="hero-subtitle">
            Have a project in mind? I'd love to hear from you. Send me a message and let's discuss how we can collaborate.
          </p>
        </div>
      </v-container>
    </section>

    <!-- ================= CONTACT CONTENT ================= -->
    <section class="contact-content">
      <v-container>
        <v-row>
          <!-- LEFT - Contact Info -->
          <v-col cols="12" md="5" data-aos="fade-right">
            <div class="info-section">
              <div class="info-header">
                <h2 class="section-title">Contact Information</h2>
                <p class="section-desc">
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
                </p>
              </div>

              <!-- Contact Cards -->
              <div class="info-cards">
                <a
                  v-for="info in contactInfo"
                  :key="info.title"
                  :href="info.link"
                  :target="info.link ? '_blank' : ''"
                  class="info-card"
                  :class="{ 'no-link': !info.link }"
                  data-aos="fade-up"
                >
                  <div class="info-icon" :style="{ background: info.color + '20' }">
                    <v-icon size="28" :color="info.color">{{ info.icon }}</v-icon>
                  </div>
                  <div class="info-details">
                    <span class="info-title">{{ info.title }}</span>
                    <span class="info-value">{{ info.value }}</span>
                  </div>
                </a>
              </div>

              <!-- Social Links -->
              <div class="social-section" data-aos="fade-up">
                <h3 class="social-title">Follow Me</h3>
                <div class="social-links">
                  <a
                    v-for="social in socialLinks"
                    :key="social.label"
                    :href="social.url"
                    target="_blank"
                    class="social-btn"
                    :style="{ '--social-color': social.color }"
                    :title="social.label"
                  >
                    <v-icon size="24">{{ social.icon }}</v-icon>
                  </a>
                </div>
              </div>

              <!-- Availability Badge -->
              <div class="availability-badge" data-aos="fade-up">
                <div class="pulse-dot"></div>
                <span>Available for Freelance Projects</span>
              </div>
            </div>
          </v-col>

          <!-- RIGHT - Contact Form -->
          <v-col cols="12" md="7" data-aos="fade-left">
            <div class="form-section">
              <div class="form-card">
                <div class="form-header">
                  <h2 class="form-title">Send Me a Message</h2>
                  <p class="form-desc">Fill out the form below and I'll get back to you within 24 hours.</p>
                </div>

                <form @submit.prevent="submitForm" class="contact-form">
                  <!-- Name Field -->
                  <div class="form-group">
                    <label class="form-label">
                      <v-icon size="18">mdi-account</v-icon>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      v-model="form.name"
                      placeholder="John Doe"
                      class="form-input"
                      :class="{ 'error': errors.name }"
                    />
                    <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                  </div>

                  <!-- Email & Phone -->
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">
                        <v-icon size="18">mdi-email</v-icon>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        v-model="form.email"
                        placeholder="john@example.com"
                        class="form-input"
                        :class="{ 'error': errors.email }"
                      />
                      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                    </div>

                    <div class="form-group">
                      <label class="form-label">
                        <v-icon size="18">mdi-phone</v-icon>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        v-model="form.phone"
                        placeholder="+91 9876543210"
                        class="form-input"
                      />
                    </div>
                  </div>

                  <!-- Subject Field -->
                  <div class="form-group">
                    <label class="form-label">
                      <v-icon size="18">mdi-tag</v-icon>
                      Subject *
                    </label>
                    <input
                      type="text"
                      v-model="form.subject"
                      placeholder="What's this about?"
                      class="form-input"
                      :class="{ 'error': errors.subject }"
                    />
                    <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
                  </div>

                  <!-- Message Field -->
                  <div class="form-group">
                    <label class="form-label">
                      <v-icon size="18">mdi-message-text</v-icon>
                      Your Message *
                    </label>
                    <textarea
                      v-model="form.message"
                      placeholder="Tell me about your project..."
                      rows="5"
                      class="form-input"
                      :class="{ 'error': errors.message }"
                    ></textarea>
                    <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
                  </div>

                  <!-- Submit Button -->
                  <button type="submit" class="submit-btn" :disabled="loading">
                    <span v-if="!loading">
                      <v-icon size="20">mdi-send</v-icon>
                      Send Message
                    </span>
                    <span v-else>
                      <v-icon size="20" class="rotating">mdi-loading</v-icon>
                      Sending...
                    </span>
                  </button>
                </form>
              </div>

              <!-- Response Time Info -->
              <div class="response-info" data-aos="fade-up">
                <v-icon size="20" color="#22d3ee">mdi-information</v-icon>
                <span>I typically respond within 24 hours during business days.</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ================= MAP SECTION (Optional) ================= -->
    <section class="map-section" data-aos="fade-up">
      <v-container>
        <div class="map-card">
          <div class="map-header">
            <h3 class="map-title">Find Me Here</h3>
            <p class="map-desc">3,Ambika Residency, Behind radhakrishna party plot, Opp Zen School, Vadtal Road, Bakrol, Anand, Gujarat</p>
            <p class="map-desc">India</p>
            <p class="map-desc">Pincode:388315</p>
          </div>
          <div class="map-embed">
            <iframe
              src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3703778273543!2d72.91764427398482!3d22.565246733242308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f0025d3a0fd%3A0xa00712dd27ae39!2sAmbica%20residency!5e0!3m2!1sen!2sin!4v1767810790711!5m2!1sen!2sin"
              width="100%"
              height="400"
              style="border:0; border-radius: 16px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
/* ================= GLOBAL ================= */
.contact-page {
  background: #fff;
  overflow-x: hidden;
}

/* ================= HERO SECTION ================= */
.contact-hero {
  position: relative;
  padding: 140px 0 100px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  animation: shapeFloat 20s ease-in-out infinite;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  top: -100px;
  left: -100px;
}

.shape-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #22d3ee, #3b82f6);
  bottom: -100px;
  right: -100px;
  animation-delay: -10s;
}

.shape-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -5s;
}

@keyframes shapeFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 20px;
  letter-spacing: -2px;
  color: #fff;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

/* ================= CONTACT CONTENT ================= */
.contact-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
}

/* ================= INFO SECTION ================= */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.info-header {
  margin-bottom: 12px;
}

.section-title {
  font-size: 2rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 12px;
}

.section-desc {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.7;
}

/* Info Cards */
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.info-card.no-link {
  cursor: default;
}

.info-card:hover:not(.no-link) {
  transform: translateX(8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(99, 102, 241, 0.2);
}

.info-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  flex-shrink: 0;
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
}

/* Social Section */
.social-section {
  padding: 28px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(34, 211, 238, 0.05));
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 16px;
}

.social-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
}

.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-btn {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  color: #475569;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-btn:hover {
  background: var(--social-color);
  color: #fff;
  border-color: var(--social-color);
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Availability Badge */
.availability-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-radius: 50px;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.3);
}

.pulse-dot {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

/* ================= FORM SECTION ================= */
.form-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.form-header {
  margin-bottom: 32px;
}

.form-title {
  font-size: 2rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 8px;
}

.form-desc {
  font-size: 1rem;
  color: #64748b;
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
}

.form-input {
  padding: 14px 16px;
  font-size: 1rem;
  color: #0f172a;
  background: #fff;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.form-input.error {
  border-color: #ef4444;
}

.form-input.error:focus {
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
}

.form-input::placeholder {
  color: #94a3b8;
}

textarea.form-input {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  font-size: 0.85rem;
  color: #ef4444;
  font-weight: 500;
}

/* Submit Button */
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.rotating {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Response Info */
.response-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  color: #475569;
  font-weight: 500;
}

/* ================= MAP SECTION ================= */
.map-section {
  padding: 60px 0 100px;
  background: #fff;
}

.map-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.map-header {
  text-align: center;
  margin-bottom: 32px;
}

.map-title {
  font-size: 2rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 8px;
}

.map-desc {
  font-size: 1rem;
  color: #64748b;
}

.map-embed {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .contact-hero {
    padding: 120px 0 80px;
  }

  .contact-content {
    padding: 60px 0;
  }

  .form-card {
    padding: 28px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .map-section {
    padding: 40px 0 60px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .section-title,
  .form-title,
  .map-title {
    font-size: 1.5rem;
  }

  .form-card {
    padding: 24px;
  }

  .social-links {
    justify-content: center;
  }
}
</style>