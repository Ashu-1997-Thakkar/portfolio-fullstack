<script setup>
import { useHead } from '@vueuse/head';
import { ref } from 'vue';

// Set meta and title for this page
useHead({
  title: 'About Me - Ashutosh Nandani',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Ashutosh Nandani, a dedicated Laravel & PHP Developer with expertise in WordPress, and a passion for building scalable web applications.',
    },
  ],
});

const skills = [
  { name: 'Laravel', level: 90, color: '#FF2D20', icon: 'mdi-laravel' },
  { name: 'PHP', level: 88, color: '#777BB4', icon: 'mdi-language-php' },
  { name: 'Vue.js', level: 85, color: '#42B883', icon: 'mdi-vuejs' },
  { name: 'MySQL', level: 82, color: '#4479A1', icon: 'mdi-database' },
  { name: 'JavaScript', level: 80, color: '#F7DF1E', icon: 'mdi-language-javascript' },
  { name: 'WordPress', level: 85, color: '#21759B', icon: 'mdi-wordpress' },
  { name: 'REST API', level: 88, color: '#6366F1', icon: 'mdi-api' },
  { name: 'Git', level: 75, color: '#F05032', icon: 'mdi-git' },
];

const experiences = [
  {
    title: 'Software & Website Developer',
    company: 'Information Technology Centre (ITC), Anand',
    period: 'Current',
    type: 'Full-time',
    description: 'Contributing to institutional and commercial software projects, WordPress development, and web solutions.',
    icon: 'mdi-briefcase',
    color: '#6366f1'
  },
  {
    title: 'Laravel Developer',
    company: 'DIGITriv / DIGIMatte Techno, Ahmedabad',
    period: 'Freelance',
    type: 'Contract',
    description: 'Providing freelance Laravel development services, building scalable web applications.',
    icon: 'mdi-laptop',
    color: '#22d3ee'
  },
  {
    title: 'PHP Developer',
    company: 'Krupa Info Service',
    period: 'Previous',
    type: 'Full-time',
    description: 'Worked on Vtiger CRM modules and custom PHP solutions.',
    icon: 'mdi-code-tags',
    color: '#a855f7'
  },
  {
    title: 'Laravel Developer',
    company: 'Windzoon Techno Pvt Ltd',
    period: 'Previous',
    type: 'Full-time',
    description: 'Developed e-commerce platforms and social networking applications using Laravel.',
    icon: 'mdi-shopping',
    color: '#ec4899'
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University',
    year: 'Completed',
    icon: 'mdi-school',
  },
  {
    degree: 'ITI Copa Course',
    institution: 'Industrial Training Institute',
    year: 'Completed',
    icon: 'mdi-certificate',
  },
  {
    degree: 'PHP with Laravel Certification',
    institution: 'Professional Course',
    year: 'Certified',
    icon: 'mdi-medal',
  },
];

const achievements = [
  { number: '15+', label: 'Projects Completed', icon: 'mdi-check-decagram' },
  { number: '3+', label: 'Years Experience', icon: 'mdi-clock-outline' },
  { number: '10+', label: 'Happy Clients', icon: 'mdi-account-group' },
  { number: '50+', label: 'Code Commits', icon: 'mdi-source-commit' },
];

const languages = [
  { name: 'English', flag: '🇬🇧' },
  { name: 'Hindi', flag: '🇮🇳' },
  { name: 'Gujarati', flag: '🇮🇳' },
];
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-bg">
        <div class="bg-gradient"></div>
        <div class="bg-pattern"></div>
      </div>
      
      <v-container>
        <div class="hero-content" data-aos="fade-up">
          <span class="hero-tag">Get To Know Me</span>
          <h1 class="hero-title">About Me</h1>
          <p class="hero-subtitle">
            Passionate Developer | Problem Solver | Continuous Learner
          </p>
        </div>
      </v-container>
    </section>

    <!-- Main Content -->
    <section class="about-content">
      <v-container>
        <v-row class="align-center">
          <!-- Left - Image -->
          <v-col cols="12" md="5" data-aos="fade-right">
            <div class="profile-section">
              <div class="profile-card">
                <div class="card-glow"></div>
                <div class="profile-frame">
                  <img
                    src="/images/ashutosh Image.png"
                    alt="Ashutosh Nandani"
                    class="profile-img"
                  />
                </div>
                
                <!-- Quick Info -->
                <div class="profile-info">
                  <h3 class="profile-name">Ashutosh Nandani</h3>
                  <p class="profile-role">Full Stack Developer</p>
                  <div class="profile-badges">
                    <span class="badge-item">
                      <v-icon size="16">mdi-map-marker</v-icon>
                      Gujarat, India
                    </span>
                    <span class="badge-item">
                      <v-icon size="16">mdi-briefcase</v-icon>
                      3+ Years
                    </span>
                  </div>
                </div>
              </div>

              <!-- Languages -->
              <div class="languages-card" data-aos="fade-up">
                <h4 class="card-title">Languages</h4>
                <div class="languages-list">
                  <div v-for="lang in languages" :key="lang.name" class="language-item">
                    <span class="lang-flag">{{ lang.flag }}</span>
                    <span class="lang-name">{{ lang.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <!-- Right - About Text -->
          <v-col cols="12" md="7" data-aos="fade-left">
            <div class="about-text-section">
              <div class="text-header">
                <span class="section-tag">My Story</span>
                <h2 class="section-heading">Who Am I?</h2>
              </div>

              <div class="text-content">
                <p class="intro-text">
                  I am a dedicated <strong>Software Developer</strong> with strong expertise in 
                  <span class="highlight">PHP</span>, <span class="highlight">Laravel</span>, and 
                  <span class="highlight">WordPress</span> development.
                </p>

                <p>
                  Currently working at <strong>Information Technology Centre (ITC), Anand</strong> 
                  as a Software & Website Developer, where I contribute to institutional and 
                  commercial software projects.
                </p>

                <p>
                  Over the past few years, I have developed a wide range of Laravel-based projects 
                  including an <strong>e-commerce platform</strong>, a <strong>Facebook-like social 
                  application</strong>, and various <strong>CRM solutions</strong>. I am also 
                  providing freelance Laravel development services, focusing on performance, 
                  clean architecture, and scalable solutions.
                </p>

                <p>
                  My journey in web development started with a passion for creating impactful 
                  digital solutions. I continuously learn new technologies and best practices to 
                  deliver high-quality software that makes a difference.
                </p>
              </div>

              <!-- Achievements Grid -->
              <div class="achievements-grid">
                <div
                  v-for="achievement in achievements"
                  :key="achievement.label"
                  class="achievement-box"
                  data-aos="zoom-in"
                >
                  <v-icon size="32" class="achievement-icon">{{ achievement.icon }}</v-icon>
                  <span class="achievement-number">{{ achievement.number }}</span>
                  <span class="achievement-label">{{ achievement.label }}</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <v-container>
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">My Arsenal</span>
          <h2 class="section-title">Technical Skills</h2>
          <p class="section-desc">Technologies and tools I work with</p>
        </div>

        <div class="skills-grid">
          <div
            v-for="(skill, index) in skills"
            :key="skill.name"
            class="skill-card"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div class="skill-header">
              <div class="skill-icon" :style="{ background: skill.color }">
                <v-icon size="28" color="white">{{ skill.icon }}</v-icon>
              </div>
              <div class="skill-info">
                <h4 class="skill-name">{{ skill.name }}</h4>
                <span class="skill-percent">{{ skill.level }}%</span>
              </div>
            </div>
            <div class="skill-bar">
              <div
                class="skill-progress"
                :style="{ width: skill.level + '%', background: skill.color }"
              ></div>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <v-container>
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Career Journey</span>
          <h2 class="section-title">Work Experience</h2>
          <p class="section-desc">My professional path and achievements</p>
        </div>

        <div class="timeline">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="timeline-item"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="timeline-marker" :style="{ background: exp.color }">
              <v-icon color="white" size="24">{{ exp.icon }}</v-icon>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div>
                  <h3 class="timeline-title">{{ exp.title }}</h3>
                  <p class="timeline-company">{{ exp.company }}</p>
                </div>
                <div class="timeline-meta">
                  <span class="timeline-period">{{ exp.period }}</span>
                  <span class="timeline-type" :style="{ borderColor: exp.color, color: exp.color }">
                    {{ exp.type }}
                  </span>
                </div>
              </div>
              <p class="timeline-desc">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Education Section -->
    <section class="education-section">
      <v-container>
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Academic Background</span>
          <h2 class="section-title">Education & Certifications</h2>
        </div>

        <v-row class="mt-8">
          <v-col
            cols="12"
            md="4"
            v-for="(edu, index) in education"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="education-card">
              <div class="edu-icon">
                <v-icon size="40" color="#6366f1">{{ edu.icon }}</v-icon>
              </div>
              <h4 class="edu-degree">{{ edu.degree }}</h4>
              <p class="edu-institution">{{ edu.institution }}</p>
              <span class="edu-year">{{ edu.year }}</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container>
        <div class="cta-content" data-aos="zoom-in">
          <h2 class="cta-title">Let's Work Together</h2>
          <p class="cta-text">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div class="cta-buttons">
            <v-btn
              size="x-large"
              class="cta-primary"
              to="/contact"
            >
              <v-icon left>mdi-message-text</v-icon>
              Get In Touch
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
      </v-container>
    </section>
  </div>
</template>

<style scoped>
/* ================= GLOBAL ================= */
.about-page {
  background: #fff;
  overflow-x: hidden;
}

/* ================= HERO SECTION ================= */
.about-hero {
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

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.3), transparent 50%),
              radial-gradient(circle at 70% 50%, rgba(34, 211, 238, 0.3), transparent 50%);
}

.bg-pattern {
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

.hero-tag {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #fff 0%, #22d3ee 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* ================= ABOUT CONTENT ================= */
.about-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
}

.profile-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.profile-card {
  position: relative;
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 60%);
  animation: glowRotate 10s linear infinite;
}

@keyframes glowRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.profile-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  border: 4px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
              linear-gradient(135deg, #6366f1, #22d3ee) border-box;
  margin-bottom: 20px;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  text-align: center;
}

.profile-name {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
}

.profile-role {
  font-size: 1.1rem;
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 16px;
}

.profile-badges {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
}

/* ================= LANGUAGES CARD ================= */
.languages-card {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
}

.languages-card .card-title {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.languages-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.language-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.lang-flag {
  font-size: 1.5rem;
}

.lang-name {
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
}

/* ================= ABOUT TEXT SECTION ================= */
.about-text-section {
  padding: 0 20px;
}

.text-header {
  margin-bottom: 32px;
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
  margin-bottom: 12px;
}

.section-heading {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 900;
  color: #0f172a;
  line-height: 1.2;
}

.text-content {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 40px;
}

.intro-text {
  font-size: 1.15rem;
  margin-bottom: 20px;
}

.text-content p {
  margin-bottom: 16px;
}

.highlight {
  color: #6366f1;
  font-weight: 600;
}

/* ================= ACHIEVEMENTS GRID ================= */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin-top: 32px;
}

.achievement-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(34, 211, 238, 0.05));
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.achievement-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
}

.achievement-icon {
  color: #6366f1;
  margin-bottom: 12px;
}

.achievement-number {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.achievement-label {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
  text-align: center;
}

/* ================= SKILLS SECTION ================= */
.skills-section {
  padding: 100px 0;
  background: #fff;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 16px;
}

.section-desc {
  font-size: 1.1rem;
  color: #64748b;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.skill-card {
  padding: 24px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(99, 102, 241, 0.2);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.skill-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.skill-info {
  flex: 1;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 4px;
}

.skill-percent {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background: #f1f5f9;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
}

/* ================= EXPERIENCE SECTION ================= */
.experience-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #fff 0%, #f8fafc 100%);
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 60px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #6366f1, #22d3ee);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-marker {
  position: absolute;
  left: -40px;
  top: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #fff, 0 4px 12px rgba(0, 0, 0, 0.2);
}

.timeline-content {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 12px;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 6px;
}

.timeline-company {
  font-size: 1rem;
  color: #6366f1;
  font-weight: 600;
}

.timeline-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.timeline-period {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 600;
}

.timeline-type {
  padding: 4px 12px;
  border: 1px solid;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.timeline-desc {
  color: #475569;
  line-height: 1.7;
}

/* ================= EDUCATION SECTION ================= */
.education-section {
  padding: 100px 0;
  background: #fff;
}

.education-card {
  padding: 32px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(34, 211, 238, 0.05));
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
}

.education-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
}

.edu-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(34, 211, 238, 0.1));
  border-radius: 50%;
}

.edu-degree {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
  line-height: 1.4;
}

.edu-institution {
  color: #64748b;
  margin-bottom: 12px;
  font-weight: 500;
}

.edu-year {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

/* ================= CTA SECTION ================= */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.2), transparent 60%),
              radial-gradient(circle at 70% 50%, rgba(34, 211, 238, 0.2), transparent 60%);
}

.cta-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
}

.cta-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #fff 0%, #22d3ee 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
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

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .about-hero {
    padding: 120px 0 80px;
  }

  .about-content,
  .skills-section,
  .experience-section,
  .education-section,
  .cta-section {
    padding: 60px 0;
  }

  .timeline {
    padding-left: 50px;
  }

  .timeline-marker {
    left: -35px;
    width: 40px;
    height: 40px;
  }

  .achievements-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .profile-name {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .timeline-header {
    flex-direction: column;
  }

  .timeline-meta {
    align-items: flex-start;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>