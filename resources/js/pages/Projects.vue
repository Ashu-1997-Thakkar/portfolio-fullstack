<template>
  <div class="projects-page">
    <!-- ================= HERO SECTION ================= -->
    <section class="projects-hero">
      <div class="hero-bg">
        <div class="animated-blob blob-1"></div>
        <div class="animated-blob blob-2"></div>
        <div class="animated-blob blob-3"></div>
        <div class="grid-pattern"></div>
      </div>

      <v-container>
        <div class="hero-content" data-aos="fade-up">
          <span class="hero-badge">
            <v-icon size="18">mdi-folder-multiple</v-icon>
            Portfolio Showcase
          </span>
          <h1 class="hero-title">
            My <span class="gradient-text">Projects</span>
          </h1>
          <p class="hero-subtitle">
            Exploring innovation through code - A collection of my best work
          </p>
        </div>

        <!-- Stats Overview -->
        <div class="stats-grid" data-aos="fade-up" data-aos-delay="100">
          <div class="stat-item">
            <span class="stat-number">{{ projects.length }}+</span>
            <span class="stat-label">Projects Built</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ totalTechnologies }}</span>
            <span class="stat-label">Technologies</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Success Rate</span>
          </div>
        </div>
      </v-container>
    </section>

    <!-- ================= PROJECTS CONTENT ================= -->
    <section class="projects-content">
      <v-container>
        <!-- Filter Section -->
        <div class="filter-section" data-aos="fade-up">
          <h3 class="filter-title">Filter by Technology</h3>
          <div class="filter-chips">
            <button
              v-for="tech in techFilters"
              :key="tech"
              @click="setFilter(tech)"
              :class="['filter-chip', { active: activeFilter === tech }]"
            >
              <v-icon size="18">{{ getTechIcon(tech) }}</v-icon>
              <span>{{ tech }}</span>
            </button>
            <button
              @click="setFilter('All')"
              :class="['filter-chip reset', { active: activeFilter === 'All' }]"
            >
              <v-icon size="18">mdi-refresh</v-icon>
              <span>All Projects</span>
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.title"
            class="project-card"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <!-- Project Image -->
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="image-overlay">
                <div class="overlay-actions">
                  <a
                    :href="project.github"
                    target="_blank"
                    class="action-btn"
                    title="View Code"
                  >
                    <v-icon size="24">mdi-github</v-icon>
                  </a>
                  <a
                    :href="project.live"
                    target="_blank"
                    class="action-btn"
                    title="Live Demo"
                  >
                    <v-icon size="24">mdi-open-in-new</v-icon>
                  </a>
                </div>
              </div>
              <div class="project-status" :style="{ background: project.statusColor }">
                {{ project.status }}
              </div>
            </div>

            <!-- Project Content -->
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="project-meta">
                  <span class="meta-item">
                    <v-icon size="14">mdi-calendar</v-icon>
                    {{ project.year }}
                  </span>
                  <span class="meta-item">
                    <v-icon size="14">mdi-eye</v-icon>
                    {{ project.views }}
                  </span>
                </div>
              </div>

              <p class="project-description">{{ project.desc }}</p>

              <!-- Features List -->
              <div class="features-list">
                <div
                  v-for="feature in project.features"
                  :key="feature"
                  class="feature-item"
                >
                  <v-icon size="14" color="#6366f1">mdi-check-circle</v-icon>
                  <span>{{ feature }}</span>
                </div>
              </div>

              <!-- Tech Stack -->
              <div class="tech-stack">
                <span
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="tech-badge"
                  :style="{ borderColor: getTechColor(tech) }"
                >
                  <v-icon size="14" :color="getTechColor(tech)">{{ getTechIcon(tech) }}</v-icon>
                  {{ tech }}
                </span>
              </div>

              <!-- Project Footer -->
              <div class="project-footer">
                <div class="footer-links">
                  <a :href="project.github" target="_blank" class="footer-link">
                    <v-icon size="18">mdi-github</v-icon>
                    Code
                  </a>
                  <a :href="project.live" target="_blank" class="footer-link primary">
                    <v-icon size="18">mdi-open-in-new</v-icon>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="empty-state" data-aos="fade-up">
          <v-icon size="64" color="#cbd5e1">mdi-folder-open</v-icon>
          <h3>No projects found</h3>
          <p>Try selecting a different technology filter</p>
          <v-btn
            variant="outlined"
            color="primary"
            @click="setFilter('All')"
          >
            View All Projects
          </v-btn>
        </div>

        <!-- API Ready Note -->
        <div class="api-note" data-aos="fade-up">
          <div class="note-icon">
            <v-icon size="28" color="#6366f1">mdi-api</v-icon>
          </div>
          <div class="note-content">
            <h4>API & Database Ready</h4>
            <p>
              This projects section is fully structured for Laravel backend integration with MySQL database.
              Ready to fetch, filter, and display projects dynamically via REST API endpoints.
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-banner" data-aos="zoom-in">
          <div class="cta-content">
            <h2 class="cta-title">Like what you see?</h2>
            <p class="cta-text">
              Let's collaborate and build something amazing together
            </p>
            <div class="cta-buttons">
              <v-btn
                size="x-large"
                class="cta-primary"
                to="/contact"
              >
                <v-icon left>mdi-message-text</v-icon>
                Start a Project
              </v-btn>
              <v-btn
                size="x-large"
                variant="outlined"
                class="cta-secondary"
                href="/resume/Ashutosh-Hareshkumar-Nandani-1997.pdf"
                target="_blank"
              >
                <v-icon left>mdi-download</v-icon>
                Download CV
              </v-btn>
            </div>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/**
 * -----------------------------
 * API-READY STATE
 * -----------------------------
 * Later replace static data with:
 * useProjectStore().fetchProjects()
 * or axios.get('/api/projects')
 */

const projects = ref([
  {
    title: 'Facebook Clone',
    desc: 'A full-featured social media platform with real-time interactions, user authentication, and dynamic content management.',
    techStack: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
    features: [
      'User Authentication & Profiles',
      'Posts, Likes & Comments',
      'Friend System',
      'Real-time Notifications'
    ],
    github: 'https://github.com/Ashu-1997-Thakkar/facebook-clone',
    live: 'https://your-live-demo.com/facebook-clone',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    status: 'Completed',
    statusColor: '#22c55e',
    year: '2024',
    views: '1.2K'
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Complete online shopping solution with advanced features including cart management, secure checkout, and comprehensive admin dashboard.',
    techStack: ['Laravel', 'Blade', 'MySQL', 'Stripe'],
    features: [
      'Product Catalog & Search',
      'Shopping Cart & Checkout',
      'Payment Integration',
      'Order Management System'
    ],
    github: 'https://github.com/Ashu-1997-Thakkar/ecommerce-website',
    live: 'https://your-live-demo.com/ecommerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    status: 'Completed',
    statusColor: '#22c55e',
    year: '2024',
    views: '2.5K'
  },
  {
    title: 'Vtiger CRM Modules',
    desc: 'Custom CRM solution with specialized modules for streamlined customer management, sales tracking, and workflow automation.',
    techStack: ['PHP', 'MySQL', 'JavaScript'],
    features: [
      'Customer Management',
      'Sales Pipeline Tracking',
      'Custom Workflows',
      'Reporting Dashboard'
    ],
    github: 'https://github.com/Ashu-1997-Thakkar/vtiger-crm',
    live: 'https://your-live-demo.com/vtiger',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    status: 'In Progress',
    statusColor: '#f59e0b',
    year: '2023',
    views: '890'
  },
  {
    title: 'Task Management System',
    desc: 'Collaborative project management tool with task tracking, team collaboration features, and progress monitoring.',
    techStack: ['Laravel', 'Vue.js', 'MySQL'],
    features: [
      'Project & Task Creation',
      'Team Collaboration',
      'Progress Tracking',
      'File Attachments'
    ],
    github: 'https://github.com/Ashu-1997-Thakkar/task-manager',
    live: 'https://your-live-demo.com/task-manager',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    status: 'Completed',
    statusColor: '#22c55e',
    year: '2024',
    views: '1.8K'
  },
  {
    title: 'Blog Platform',
    desc: 'Modern blogging platform with rich text editor, categories, tags, and social sharing capabilities.',
    techStack: ['Laravel', 'Bootstrap', 'MySQL'],
    features: [
      'Rich Text Editor',
      'Categories & Tags',
      'Social Sharing',
      'Comment System'
    ],
    github: 'https://github.com/Ashu-1997-Thakkar/blog-platform',
    live: 'https://your-live-demo.com/blog',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
    status: 'Completed',
    statusColor: '#22c55e',
    year: '2023',
    views: '3.1K'
  },
  {
    title: 'Restaurant Booking System',
    desc: 'Online reservation system for restaurants with table management, booking calendar, and customer notifications.',
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'Stripe'],
    features: [
      'Real-time Table Availability',
      'Online Reservations',
      'Email Notifications',
      'Admin Dashboard'
    ],
    github: 'https://github.com/Ashu-1997-Thakkar/restaurant-booking',
    live: 'https://your-live-demo.com/booking',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    status: 'Completed',
    statusColor: '#22c55e',
    year: '2024',
    views: '1.5K'
  },
])

/* FILTER LOGIC */
const activeFilter = ref('All')

const techFilters = computed(() => {
  const set = new Set()
  projects.value.forEach(p => {
    p.techStack.forEach(t => set.add(t))
  })
  return Array.from(set)
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.value
  }
  return projects.value.filter(p =>
    p.techStack.includes(activeFilter.value)
  )
})

const totalTechnologies = computed(() => {
  const set = new Set()
  projects.value.forEach(p => {
    p.techStack.forEach(t => set.add(t))
  })
  return set.size
})

const setFilter = tech => {
  activeFilter.value = tech
}

/* Tech Icons & Colors */
const getTechIcon = (tech) => {
  const icons = {
    'Laravel': 'mdi-laravel',
    'PHP': 'mdi-language-php',
    'MySQL': 'mdi-database',
    'Vue.js': 'mdi-vuejs',
    'Bootstrap': 'mdi-bootstrap',
    'jQuery': 'mdi-jquery',
    'JavaScript': 'mdi-language-javascript',
    'Blade': 'mdi-file-code',
    'Stripe': 'mdi-credit-card',
  }
  return icons[tech] || 'mdi-code-tags'
}

const getTechColor = (tech) => {
  const colors = {
    'Laravel': '#FF2D20',
    'PHP': '#777BB4',
    'MySQL': '#4479A1',
    'Vue.js': '#42B883',
    'Bootstrap': '#7952B3',
    'jQuery': '#0769AD',
    'JavaScript': '#F7DF1E',
    'Blade': '#FF2D20',
    'Stripe': '#635BFF',
  }
  return colors[tech] || '#6366f1'
}
</script>

<style scoped>
/* ================= GLOBAL ================= */
.projects-page {
  background: #fff;
  overflow-x: hidden;
}

/* ================= HERO SECTION ================= */
.projects-hero {
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

.animated-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  animation: blobAnimation 20s ease-in-out infinite;
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
  top: 50%;
  right: -100px;
  animation-delay: -10s;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  bottom: -100px;
  left: 50%;
  animation-delay: -5s;
}

@keyframes blobAnimation {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  33% { transform: translate(30px, -50px) scale(1.1) rotate(120deg); }
  66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
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

/* ================= STATS GRID ================= */
.stats-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
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

.stat-item:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
}

/* ================= PROJECTS CONTENT ================= */
.projects-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 50%, #f8fafc 100%);
}

/* ================= FILTER SECTION ================= */
.filter-section {
  margin-bottom: 60px;
}

.filter-title {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 24px;
}

.filter-chips {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.filter-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #fff;
  border: 2px solid rgba(99, 102, 241, 0.15);
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-chip:hover {
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
}

.filter-chip.active {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
}

.filter-chip.reset {
  border-color: rgba(0, 0, 0, 0.1);
}

.filter-chip.reset:hover {
  border-color: rgba(0, 0, 0, 0.2);
}

.filter-chip.reset.active {
  background: #64748b;
}

/* ================= PROJECTS GRID ================= */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 32px;
  margin-bottom: 80px;
}

/* ================= PROJECT CARD ================= */
.project-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  border-color: rgba(99, 102, 241, 0.2);
}

/* Project Image */
.project-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.7)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.overlay-actions {
  display: flex;
  gap: 16px;
}

.action-btn {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  color: #0f172a;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.action-btn:hover {
  transform: scale(1.15);
  background: #6366f1;
  color: #fff;
}

.project-status {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
}

/* Project Content */
.project-content {
  padding: 28px;
}

.project-header {
  margin-bottom: 16px;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
  line-height: 1.3;
}

.project-meta {
  display: flex;
  gap: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
}

.project-description {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 20px;
}

/* Features List */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  padding: 16px;
  background: rgba(99, 102, 241, 0.03);
  border-radius: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #475569;
  font-weight: 500;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #fff;
  border: 1.5px solid;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.tech-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Project Footer */
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 12px;
  width: 100%;
}

.footer-link {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  background: rgba(99, 102, 241, 0.05);
  border-color: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  transform: translateY(-2px);
}

.footer-link.primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border: none;
}

.footer-link.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}

/* ================= EMPTY STATE ================= */
.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.empty-state h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #475569;
  margin: 20px 0 12px;
}

.empty-state p {
  color: #64748b;
  margin-bottom: 24px;
}

/* ================= API NOTE ================= */
.api-note {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(34, 211, 238, 0.05));
  border: 2px dashed rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  margin-bottom: 60px;
}

.note-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
}

.note-content h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
}

.note-content p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.7;
}

/* ================= CTA BANNER ================= */
.cta-banner {
  padding: 60px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1), transparent 60%);
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;
}

.cta-text {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary {
  background: #fff !important;
  color: #6366f1 !important;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 32px !important;
  height: 56px !important;
  border-radius: 50px !important;
  text-transform: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.cta-secondary {
  border: 2px solid rgba(255, 255, 255, 0.5) !important;
  color: #fff !important;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 32px !important;
  height: 56px !important;
  border-radius: 50px !important;
  text-transform: none;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  background: #fff !important;
  color: #6366f1 !important;
  border-color: #fff !important;
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(255, 255, 255, 0.3);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .projects-hero {
    padding: 120px 0 80px;
  }

  .projects-content {
    padding: 60px 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .api-note {
    flex-direction: column;
    text-align: center;
  }

  .cta-banner {
    padding: 40px 24px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .filter-chips {
    gap: 8px;
  }

  .filter-chip {
    padding: 10px 16px;
    font-size: 0.85rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-title {
    font-size: 1.8rem;
  }
}
</style>