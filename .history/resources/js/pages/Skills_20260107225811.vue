<template>
  <div class="skills-page">
    <!-- ================= HERO SECTION ================= -->
    <section class="skills-hero">
      <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="grid-pattern"></div>
      </div>
      
      <v-container>
        <div class="hero-content" data-aos="fade-up">
          <span class="hero-badge">
            <v-icon size="18">mdi-code-tags</v-icon>
            My Expertise
          </span>
          <h1 class="hero-title">
            Technical <span class="gradient-text">Skills</span>
          </h1>
          <p class="hero-subtitle">
            Technologies and tools I've mastered to build exceptional web applications
          </p>
        </div>
      </v-container>
    </section>

    <!-- ================= SKILLS CONTENT ================= -->
    <section class="skills-content">
      <v-container>
        <!-- Category Filter -->
        <div class="category-filter" data-aos="fade-up">
          <button
            v-for="category in categories"
            :key="category.value"
            @click="activeCategory = category.value"
            :class="['category-btn', { active: activeCategory === category.value }]"
          >
            <v-icon size="20">{{ category.icon }}</v-icon>
            <span>{{ category.label }}</span>
            <span class="count-badge">{{ getCategoryCount(category.value) }}</span>
          </button>
        </div>

        <!-- Skills Grid -->
        <div class="skills-grid">
          <div
            v-for="(skill, index) in filteredSkills"
            :key="skill.name"
            class="skill-card"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <!-- Card Header -->
            <div class="card-header">
              <div class="skill-icon" :style="{ background: skill.color }">
                <v-icon size="32" color="white">{{ skill.icon }}</v-icon>
              </div>
              <div class="skill-badge" :style="{ background: skill.color + '20', color: skill.color }">
                {{ getLevel(skill.level) }}
              </div>
            </div>

            <!-- Skill Info -->
            <div class="skill-info">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <p class="skill-desc">{{ skill.description }}</p>
            </div>

            <!-- Progress Section -->
            <div class="progress-section">
              <div class="progress-header">
                <span class="progress-label">Proficiency</span>
                <span class="progress-value">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: skill.level + '%', background: skill.color }"
                >
                  <div class="progress-glow" :style="{ background: skill.color }"></div>
                </div>
              </div>
            </div>

            <!-- Years Experience -->
            <div class="skill-footer">
              <div class="experience-tag">
                <v-icon size="16">mdi-clock-outline</v-icon>
                <span>{{ skill.years }}+ years</span>
              </div>
              <div class="projects-tag">
                <v-icon size="16">mdi-folder-outline</v-icon>
                <span>{{ skill.projects }}+ projects</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Overview -->
        <div class="stats-overview" data-aos="fade-up">
          <div class="stat-card">
            <div class="stat-icon">
              <v-icon size="32" color="#6366f1">mdi-code-braces</v-icon>
            </div>
            <div class="stat-content">
              <span class="stat-value">{{ totalSkills }}</span>
              <span class="stat-label">Total Skills</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <v-icon size="32" color="#22d3ee">mdi-star</v-icon>
            </div>
            <div class="stat-content">
              <span class="stat-value">{{ expertSkills }}</span>
              <span class="stat-label">Expert Level</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <v-icon size="32" color="#a855f7">mdi-chart-line</v-icon>
            </div>
            <div class="stat-content">
              <span class="stat-value">{{ averageLevel }}%</span>
              <span class="stat-label">Avg. Proficiency</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <v-icon size="32" color="#ec4899">mdi-update</v-icon>
            </div>
            <div class="stat-content">
              <span class="stat-value">Always</span>
              <span class="stat-label">Learning</span>
            </div>
          </div>
        </div>

        <!-- Tools & Technologies -->
        <div class="tools-section" data-aos="fade-up">
          <div class="section-header">
            <h2 class="section-title">Tools & Technologies</h2>
            <p class="section-subtitle">Additional tools I use in my workflow</p>
          </div>

          <div class="tools-grid">
            <div
              v-for="tool in tools"
              :key="tool.name"
              class="tool-chip"
              :style="{ borderColor: tool.color }"
            >
              <v-icon size="24" :color="tool.color">{{ tool.icon }}</v-icon>
              <span>{{ tool.name }}</span>
            </div>
          </div>
        </div>

        <!-- API Note -->
        <div class="api-note" data-aos="fade-up">
          <div class="note-icon">
            <v-icon size="24" color="#6366f1">mdi-api</v-icon>
          </div>
          <div class="note-content">
            <h4>API & Pinia Ready</h4>
            <p>Skills data is structured for Laravel backend integration with Pinia store management</p>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/**
 * ------------------------------------
 * API / PINIA READY STATE
 * Later replace with:
 * useSkillStore().fetchSkills()
 * ------------------------------------
 */
const skills = ref([
  // Backend
  { 
    name: 'Laravel',
    level: 90,
    category: 'Backend',
    icon: 'mdi-laravel',
    color: '#FF2D20',
    description: 'Expert in building scalable web applications with Laravel framework',
    years: 3,
    projects: 15
  },
  { 
    name: 'Core PHP',
    level: 85,
    category: 'Backend',
    icon: 'mdi-language-php',
    color: '#777BB4',
    description: 'Strong foundation in PHP for custom solutions and integrations',
    years: 3,
    projects: 20
  },
  { 
    name: 'MySQL',
    level: 88,
    category: 'Backend',
    icon: 'mdi-database',
    color: '#4479A1',
    description: 'Database design, optimization, and complex query management',
    years: 3,
    projects: 25
  },
  { 
    name: 'REST API',
    level: 87,
    category: 'Backend',
    icon: 'mdi-api',
    color: '#6366F1',
    description: 'Designing and implementing RESTful APIs for scalable systems',
    years: 2,
    projects: 12
  },

  // Frontend
  { 
    name: 'Vue.js',
    level: 85,
    category: 'Frontend',
    icon: 'mdi-vuejs',
    color: '#42B883',
    description: 'Building reactive and dynamic user interfaces with Vue 3',
    years: 2,
    projects: 10
  },
  { 
    name: 'JavaScript',
    level: 82,
    category: 'Frontend',
    icon: 'mdi-language-javascript',
    color: '#F7DF1E',
    description: 'Modern ES6+ JavaScript for interactive web applications',
    years: 3,
    projects: 20
  },
  { 
    name: 'HTML & CSS',
    level: 90,
    category: 'Frontend',
    icon: 'mdi-language-html5',
    color: '#E34F26',
    description: 'Semantic HTML5 and modern CSS3 with responsive design',
    years: 4,
    projects: 30
  },
  { 
    name: 'Bootstrap',
    level: 85,
    category: 'Frontend',
    icon: 'mdi-bootstrap',
    color: '#7952B3',
    description: 'Rapid UI development with Bootstrap framework',
    years: 3,
    projects: 15
  },
  { 
    name: 'Tailwind CSS',
    level: 80,
    category: 'Frontend',
    icon: 'mdi-tailwind',
    color: '#06B6D4',
    description: 'Utility-first CSS framework for custom designs',
    years: 1,
    projects: 8
  },

  // CMS & Tools
  { 
    name: 'WordPress',
    level: 80,
    category: 'CMS',
    icon: 'mdi-wordpress',
    color: '#21759B',
    description: 'Theme development, plugin customization, and CMS solutions',
    years: 2,
    projects: 12
  },
  { 
    name: 'Vtiger CRM',
    level: 70,
    category: 'CMS',
    icon: 'mdi-account-cog',
    color: '#FF6B6B',
    description: 'Custom module development and CRM integrations',
    years: 1,
    projects: 5
  },

  // Other
  { 
    name: 'Git & GitHub',
    level: 85,
    category: 'Other',
    icon: 'mdi-git',
    color: '#F05032',
    description: 'Version control and collaborative development workflows',
    years: 3,
    projects: 30
  },
  { 
    name: 'Docker',
    level: 65,
    category: 'Other',
    icon: 'mdi-docker',
    color: '#2496ED',
    description: 'Containerization for consistent development environments',
    years: 1,
    projects: 4
  },
  { 
    name: '.NET Basics',
    level: 45,
    category: 'Other',
    icon: 'mdi-dot-net',
    color: '#512BD4',
    description: 'Fundamental knowledge of .NET framework',
    years: 1,
    projects: 2
  },
])

const tools = ref([
  { name: 'VS Code', icon: 'mdi-microsoft-visual-studio-code', color: '#007ACC' },
  { name: 'Postman', icon: 'mdi-api', color: '#FF6C37' },
  { name: 'PhpStorm', icon: 'mdi-language-php', color: '#000000' },
  { name: 'Figma', icon: 'mdi-draw', color: '#F24E1E' },
  { name: 'Chrome DevTools', icon: 'mdi-google-chrome', color: '#4285F4' },
  { name: 'NPM', icon: 'mdi-npm', color: '#CB3837' },
  { name: 'Composer', icon: 'mdi-package-variant', color: '#885630' },
  { name: 'Linux', icon: 'mdi-linux', color: '#FCC624' },
])

/* Categories with icons */
const categories = [
  { label: 'Backend', value: 'Backend', icon: 'mdi-server' },
  { label: 'Frontend', value: 'Frontend', icon: 'mdi-palette' },
  { label: 'CMS & Tools', value: 'CMS', icon: 'mdi-wrench' },
  { label: 'Other', value: 'Other', icon: 'mdi-dots-horizontal' },
]

const activeCategory = ref('Backend')

/* Filtered skills */
const filteredSkills = computed(() =>
  skills.value.filter(skill => skill.category === activeCategory.value)
)

/* Get category count */
const getCategoryCount = (category) => {
  return skills.value.filter(skill => skill.category === category).length
}

/* Skill level text */
const getLevel = level => {
  if (level >= 85) return 'Expert'
  if (level >= 70) return 'Advanced'
  if (level >= 50) return 'Intermediate'
  return 'Beginner'
}

/* Stats */
const totalSkills = computed(() => skills.value.length)
const expertSkills = computed(() => skills.value.filter(s => s.level >= 85).length)
const averageLevel = computed(() => {
  const sum = skills.value.reduce((acc, skill) => acc + skill.level, 0)
  return Math.round(sum / skills.value.length)
})
</script>

<style scoped>
/* ================= GLOBAL ================= */
.skills-page {
  background: #fff;
  overflow-x: hidden;
}

/* ================= HERO SECTION ================= */
.skills-hero {
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

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  animation: orbFloat 15s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  top: -100px;
  left: -100px;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #22d3ee, #3b82f6);
  bottom: -100px;
  right: -100px;
  animation-delay: -7s;
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
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
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

/* ================= SKILLS CONTENT ================= */
.skills-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 50%, #f8fafc 100%);
}

/* ================= CATEGORY FILTER ================= */
.category-filter {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: #fff;
  border: 2px solid rgba(99, 102, 241, 0.1);
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.category-btn:hover {
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
}

.category-btn.active {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
}

.count-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
}

.category-btn.active .count-badge {
  background: rgba(255, 255, 255, 0.2);
}

/* ================= SKILLS GRID ================= */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 80px;
}

.skill-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 28px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  border-color: rgba(99, 102, 241, 0.2);
}

.skill-card:hover::before {
  opacity: 0.3;
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.skill-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.skill-badge {
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Skill Info */
.skill-info {
  margin-bottom: 20px;
}

.skill-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
}

.skill-desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
}

/* Progress Section */
.progress-section {
  margin-bottom: 16px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.progress-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.progress-value {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
}

.progress-bar {
  height: 10px;
  background: #f1f5f9;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  border-radius: 50px;
  position: relative;
  transition: width 1s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.progress-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  filter: blur(8px);
  opacity: 0.6;
}

/* Skill Footer */
.skill-footer {
  display: flex;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.experience-tag,
.projects-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
}

/* ================= STATS OVERVIEW ================= */
.stats-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 80px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(34, 211, 238, 0.05));
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
}

.stat-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
}

/* ================= TOOLS SECTION ================= */
.tools-section {
  margin-bottom: 60px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #64748b;
}

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.tool-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #fff;
  border: 2px solid;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #475569;
  transition: all 0.3s ease;
  cursor: default;
}

.tool-chip:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* ================= API NOTE ================= */
.api-note {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(34, 211, 238, 0.05));
  border: 2px dashed rgba(99, 102, 241, 0.2);
  border-radius: 16px;
}

.note-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
}

.note-content h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 6px;
}

.note-content p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .skills-hero {
    padding: 120px 0 80px;
  }

  .skills-content {
    padding: 60px 0;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .category-filter {
    justify-content: center;
  }

  .stats-overview {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .category-btn {
    padding: 12px 16px;
    font-size: 0.85rem;
  }

  .stats-overview {
    grid-template-columns: 1fr;
  }

  .api-note {
    flex-direction: column;
    text-align: center;
  }
}
</style>