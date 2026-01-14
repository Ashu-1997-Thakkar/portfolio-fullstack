<template>
  <div class="skills-page">
    <v-container>
      <!-- ================= HEADER ================= -->
      <div class="text-center mb-10" data-aos="fade-up">
        <h1 class="page-title">
          Technical <span class="gradient-text">Skills</span>
        </h1>
        <p class="subtitle">
          Technologies and tools I work with
        </p>
      </div>

      <!-- ================= CATEGORY TABS ================= -->
      <v-tabs
        v-model="activeCategory"
        align-tabs="center"
        class="mb-10"
        color="primary"
      >
        <v-tab
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </v-tab>
      </v-tabs>

      <!-- ================= SKILLS GRID ================= -->
      <v-row>
        <v-col
          v-for="skill in filteredSkills"
          :key="skill.name"
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
        >
          <v-card class="skill-card" elevation="0">
            <v-card-text>
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percent">{{ skill.level }}%</span>
              </div>

              <!-- Animated Progress -->
              <v-progress-linear
                :model-value="skill.level"
                height="10"
                rounded
                color="primary"
                class="mt-3"
              />

              <div class="skill-level">
                {{ getLevel(skill.level) }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- ================= API READY NOTE ================= -->
      <div class="api-note text-center mt-12" data-aos="fade-up">
        <p>
          ⚙️ Skills data is <strong>API & Pinia ready</strong> (Laravel backend compatible)
        </p>
      </div>
    </v-container>
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
  { name: 'Laravel (PHP)', level: 90, category: 'Backend' },
  { name: 'Core PHP', level: 80, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Backend' },
  { name: 'Vtiger CRM Modules', level: 65, category: 'Backend' },

  { name: 'Vue.js', level: 85, category: 'Frontend' },
  { name: 'JavaScript', level: 75, category: 'Frontend' },
  { name: 'HTML, CSS, Bootstrap', level: 85, category: 'Frontend' },
  { name: 'Blade Templates', level: 80, category: 'Frontend' },

  { name: 'WordPress', level: 75, category: 'CMS' },
  { name: '.NET (Basic)', level: 40, category: 'Other' },
])

/* Categories */
const categories = ['Backend', 'Frontend', 'CMS', 'Other']
const activeCategory = ref('Backend')

/* Filtered skills */
const filteredSkills = computed(() =>
  skills.value.filter(skill => skill.category === activeCategory.value)
)

/* Skill level text */
const getLevel = level => {
  if (level >= 80) return 'Expert'
  if (level >= 60) return 'Intermediate'
  return 'Beginner'
}
</script>

<style scoped>
.skills-page {
  padding-bottom: 80px;
}

/* HEADER */
.page-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
}

.subtitle {
  color: #6b7280;
  margin-top: 8px;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* SKILL CARD */
.skill-card {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  transition: all 0.35s ease;
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.25);
}

/* CONTENT */
.skill-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

.skill-name {
  font-size: 1rem;
}

.skill-percent {
  color: #6366f1;
}

.skill-level {
  margin-top: 6px;
  font-size: 0.85rem;
  color: #6b7280;
}

/* API NOTE */
.api-note {
  font-size: 0.95rem;
  color: #6b7280;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
}
</style>
