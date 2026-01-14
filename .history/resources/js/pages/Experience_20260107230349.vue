<script setup>
import { ref, onMounted } from 'vue';

const experiences = ref([
  {
    company: 'Information Technology Centre (ITC)',
    role: 'WordPress Developer',
    location: 'Anand, Gujarat',
    duration: '2024 – Present',
    type: 'Full-time',
    description: [
      'Developing and maintaining institutional & commercial websites with modern WordPress practices',
      'Custom theme development with responsive design and performance optimization',
      'Plugin customization and integration for enhanced functionality',
      'Performance optimization achieving 90+ PageSpeed scores'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS3'],
    icon: 'mdi-wordpress',
    color: '#21759B',
    achievements: [
      '15+ websites delivered',
      'Improved site speed by 40%'
    ]
  },
  {
    company: 'DIGITriv / DIGIMatte Techno',
    role: 'Laravel Developer (Freelance)',
    location: 'Ahmedabad (Remote)',
    duration: '2024',
    type: 'Freelance',
    description: [
      'Built scalable web applications using Laravel framework with clean architecture',
      'Designed and implemented RESTful APIs for mobile and web integration',
      'Implemented secure authentication and role-based access control systems',
      'Database optimization and complex query management'
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Git'],
    icon: 'mdi-laravel',
    color: '#FF2D20',
    achievements: [
      '8+ projects completed',
      '100% client satisfaction'
    ]
  },
  {
    company: 'Windzoon Techno Pvt Ltd',
    role: 'Trainee Laravel Developer',
    location: 'Ahmedabad',
    duration: 'March 2024 – September 2024',
    type: 'Training',
    description: [
      'Developed full-featured E-commerce platform with cart, checkout, and payment integration',
      'Built Facebook Clone with real-time features including posts, likes, comments, and messaging',
      'Worked extensively with MySQL database design and optimization',
      'Implemented responsive UI using Blade templates and Bootstrap framework'
    ],
    technologies: ['Laravel', 'MySQL', 'Blade', 'Bootstrap', 'jQuery'],
    icon: 'mdi-code-braces',
    color: '#F59E0B',
    achievements: [
      '2 major projects',
      'Learned advanced Laravel'
    ]
  },
  {
    company: 'Krupa Info Service',
    role: 'Junior PHP Developer',
    location: 'Ahmedabad',
    duration: 'June 2023 – January 2024',
    type: 'Full-time',
    description: [
      'Vtiger CRM custom module development and integration',
      'Implemented CRUD operations with data validation and security',
      'Database design and optimization for improved query performance',
      'Client requirement analysis and feature implementation'
    ],
    technologies: ['PHP', 'Vtiger CRM', 'MySQL', 'JavaScript', 'HTML/CSS'],
    icon: 'mdi-account-cog',
    color: '#EF4444',
    achievements: [
      '5+ CRM modules built',
      'Enhanced system efficiency'
    ]
  },
]);

const stats = ref([
  { icon: 'mdi-briefcase', value: '3+', label: 'Years Experience' },
  { icon: 'mdi-office-building', value: '4', label: 'Companies' },
  { icon: 'mdi-folder-multiple', value: '25+', label: 'Projects' },
  { icon: 'mdi-star', value: '100%', label: 'Success Rate' },
]);

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>

<template>
  <div class="experience-page">
    <!-- ================= HERO SECTION ================= -->
    <section class="experience-hero">
      <div class="hero-bg">
        <div class="gradient-circle circle-1"></div>
        <div class="gradient-circle circle-2"></div>
        <div class="grid-overlay"></div>
      </div>

      <v-container>
        <div class="hero-content" data-aos="fade-up">
          <span class="hero-badge">
            <v-icon size="18">mdi-briefcase</v-icon>
            Career Journey
          </span>
          <h1 class="hero-title">
            Work <span class="gradient-text">Experience</span>
          </h1>
          <p class="hero-subtitle">
            My professional journey and the amazing teams I've worked with
          </p>
        </div>

        <!-- Stats Cards -->
        <div class="stats-row" data-aos="fade-up" data-aos-delay="100">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <div class="stat-icon">
              <v-icon size="32" color="#6366f1">{{ stat.icon }}</v-icon>
            </div>
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </v-container>
    </section>

    <!-- ================= TIMELINE SECTION ================= -->
    <section class="timeline-section">
      <v-container>
        <div class="timeline-wrapper">
          <!-- Timeline Line -->
          <div class="timeline-line"></div>

          <!-- Experience Items -->
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="timeline-item"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Timeline Dot -->
            <div class="timeline-dot" :style="{ background: exp.color }">
              <v-icon color="white" size="28">{{ exp.icon }}</v-icon>
            </div>

            <!-- Experience Card -->
            <div class="experience-card">
              <!-- Card Header -->
              <div class="card-header">
                <div class="company-info">
                  <div class="company-icon" :style="{ background: exp.color + '20' }">
                    <v-icon size="32" :color="exp.color">{{ exp.icon }}</v-icon>
                  </div>
                  <div class="company-details">
                    <h3 class="role-title">{{ exp.role }}</h3>
                    <div class="company-meta">
                      <span class="company-name">{{ exp.company }}</span>
                      <span class="separator">•</span>
                      <span class="location">
                        <v-icon size="14">mdi-map-marker</v-icon>
                        {{ exp.location }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="duration-badge" :style="{ borderColor: exp.color, color: exp.color }">
                  <v-icon size="16">mdi-calendar</v-icon>
                  {{ exp.duration }}
                </div>
              </div>

              <!-- Type Badge -->
              <div class="type-badge" :style="{ background: exp.color + '15', color: exp.color }">
                {{ exp.type }}
              </div>

              <!-- Description -->
              <div class="card-content">
                <ul class="description-list">
                  <li v-for="(point, i) in exp.description" :key="i">
                    <v-icon size="16" color="#6366f1">mdi-check-circle</v-icon>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies -->
              <div class="technologies">
                <span class="tech-label">Technologies:</span>
                <div class="tech-chips">
                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="tech-chip"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Achievements -->
              <div class="achievements">
                <div
                  v-for="achievement in exp.achievements"
                  :key="achievement"
                  class="achievement-item"
                >
                  <v-icon size="18" :color="exp.color">mdi-trophy</v-icon>
                  <span>{{ achievement }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Download Resume CTA -->
        <div class="cta-section" data-aos="fade-up">
          <div class="cta-content">
            <h3 class="cta-title">Want to know more about my experience?</h3>
            <p class="cta-text">Download my detailed resume with all projects and achievements</p>
            <v-btn
              size="x-large"
              class="cta-btn"
              href="/resume/Ashutosh-Hareshkumar-Nandani-1997.pdf"
              target="_blank"
            >
              <v-icon left>mdi-download</v-icon>
              Download Full Resume
            </v-btn>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
/* ================= GLOBAL ================= */
.experience-page {
  background: #fff;
  overflow-x: hidden;
}

/* ================= HERO SECTION ================= */
.experience-hero {
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

.gradient-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.35;
  animation: circleFloat 20s ease-in-out infinite;
}

.circle-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  top: -100px;
  right: -100px;
}

.circle-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #22d3ee, #3b82f6);
  bottom: -100px;
  left: -100px;
  animation-delay: -10s;
}

@keyframes circleFloat {
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
  margin-bottom: 60px;
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
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

/* ================= STATS ROW ================= */
.stats-row {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.2);
  border-radius: 50%;
  margin-bottom: 16px;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-align: center;
}

/* ================= TIMELINE SECTION ================= */
.timeline-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 50%, #f8fafc 100%);
}

.timeline-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

/* Timeline Line */
.timeline-line {
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #6366f1 0%, #22d3ee 50%, #a855f7 100%);
  border-radius: 2px;
}

/* ================= TIMELINE ITEM ================= */
.timeline-item {
  position: relative;
  padding-left: 120px;
  margin-bottom: 60px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* Timeline Dot */
.timeline-dot {
  position: absolute;
  left: 16px;
  top: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 1),
              0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

/* ================= EXPERIENCE CARD ================= */
.experience-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
}

.experience-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  border-radius: 24px 24px 0 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.experience-card:hover {
  transform: translateX(12px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  border-color: rgba(99, 102, 241, 0.2);
}

.experience-card:hover::before {
  opacity: 0.4;
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 16px;
}

.company-info {
  display: flex;
  gap: 16px;
  flex: 1;
}

.company-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  flex-shrink: 0;
}

.company-details {
  flex: 1;
}

.role-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
  line-height: 1.3;
}

.company-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 0.95rem;
  color: #64748b;
}

.company-name {
  font-weight: 600;
  color: #475569;
}

.separator {
  color: #cbd5e1;
}

.location {
  display: flex;
  align-items: center;
  gap: 4px;
}

.duration-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border: 2px solid;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  white-space: nowrap;
}

/* Type Badge */
.type-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
}

/* Card Content */
.card-content {
  margin-bottom: 24px;
}

.description-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.description-list li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  color: #475569;
  line-height: 1.7;
}

.description-list li span {
  flex: 1;
}

/* Technologies */
.technologies {
  margin-bottom: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.tech-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 12px;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-chip {
  padding: 6px 14px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(34, 211, 238, 0.08));
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
  transition: all 0.2s ease;
}

.tech-chip:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(34, 211, 238, 0.15));
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

/* Achievements */
.achievements {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
}

/* ================= CTA SECTION ================= */
.cta-section {
  margin-top: 80px;
  padding: 60px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.3);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 12px;
}

.cta-text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
}

.cta-btn {
  background: #fff !important;
  color: #6366f1 !important;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 32px !important;
  height: 56px !important;
  border-radius: 50px !important;
  text-transform: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .experience-hero {
    padding: 120px 0 80px;
  }

  .timeline-section {
    padding: 60px 0;
  }

  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .timeline-line {
    left: 20px;
  }

  .timeline-dot {
    left: 0;
    width: 44px;
    height: 44px;
  }

  .timeline-item {
    padding-left: 80px;
  }

  .experience-card {
    padding: 24px;
  }

  .card-header {
    flex-direction: column;
  }

  .duration-badge {
    align-self: flex-start;
  }

  .cta-section {
    padding: 40px 24px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .stats-row {
    grid-template-columns: 1fr;
  }

  .company-info {
    flex-direction: column;
    text-align: center;
  }

  .company-icon {
    margin: 0 auto;
  }

  .company-meta {
    justify-content: center;
  }

  .role-title {
    font-size: 1.3rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-text {
    font-size: 1rem;
  }
}
</style>