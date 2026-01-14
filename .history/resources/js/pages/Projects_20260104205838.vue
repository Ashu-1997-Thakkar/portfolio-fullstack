<template>
  <div class="projects-page">
    <v-container>
      <!-- ================= HEADER ================= -->
      <div class="text-center mb-10" data-aos="fade-up">
        <h1 class="page-title">
          My <span class="gradient-text">Projects</span>
        </h1>
        <p class="subtitle">
          Selected works showcasing my full-stack expertise
        </p>
      </div>

      <!-- ================= FILTER CHIPS ================= -->
      <div class="filters mb-8" data-aos="fade-up">
        <v-chip
          v-for="tech in techFilters"
          :key="tech"
          class="ma-2"
          :color="activeFilter === tech ? 'primary' : ''"
          variant="outlined"
          @click="setFilter(tech)"
        >
          {{ tech }}
        </v-chip>

        <v-chip
          class="ma-2"
          variant="outlined"
          color="grey"
          @click="setFilter('All')"
        >
          Reset
        </v-chip>
      </div>

      <!-- ================= PROJECT CARDS ================= -->
      <v-row>
        <v-col
          v-for="project in filteredProjects"
          :key="project.title"
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
        >
          <v-card
            class="project-card"
            elevation="0"
            @mouseenter="project.hover = true"
            @mouseleave="project.hover = false"
          >
            <!-- IMAGE -->
            <v-img
              :src="project.image"
              height="200"
              cover
            >
              <div class="image-overlay" />
            </v-img>

            <!-- CONTENT -->
            <v-card-text>
              <h3 class="project-title">
                {{ project.title }}
              </h3>

              <p class="project-desc">
                {{ project.desc }}
              </p>

              <!-- TECH TAGS -->
              <div class="tech-tags">
                <v-chip
                  v-for="tech in project.techStack"
                  :key="tech"
                  size="small"
                  class="ma-1"
                  color="primary"
                  variant="outlined"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>

            <!-- ACTIONS -->
            <v-card-actions class="justify-space-between px-4 pb-4">
              <v-btn
                icon
                variant="text"
                :href="project.github"
                target="_blank"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>

              <v-btn
                icon
                variant="text"
                :href="project.live"
                target="_blank"
              >
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- ================= API READY NOTE ================= -->
      <div class="api-note text-center mt-12" data-aos="fade-up">
        <p>
          🔗 This section is <strong>API-ready</strong> and can be powered by
          Laravel + MySQL anytime.
        </p>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

/**
 * -----------------------------
 * API-READY STATE
 * -----------------------------
 * Later replace static data with:
 * axios.get('/api/projects')
 */

const projects = ref([
  {
    title: 'Facebook Clone',
    desc: 'A social media platform with posts, likes, comments & authentication.',
    techStack: ['Laravel', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/Ashu-1997-Thakkar/facebook-clone',
    live: 'https://your-live-demo.com/facebook-clone',
    image: 'https://picsum.photos/500/300?random=1',
  },
  {
    title: 'E-Commerce Website',
    desc: 'Complete shopping platform with cart, orders & admin dashboard.',
    techStack: ['Laravel', 'Blade', 'MySQL'],
    github: 'https://github.com/Ashu-1997-Thakkar/ecommerce-website',
    live: 'https://your-live-demo.com/ecommerce-website',
    image: 'https://picsum.photos/500/300?random=2',
  },
  {
    title: 'Vtiger CRM Modules',
    desc: 'Custom CRM modules for managing customers and sales workflow.',
    techStack: ['PHP', 'MySQL'],
    github: 'https://github.com/Ashu-1997-Thakkar/vtiger-crm',
    live: 'https://your-live-demo.com/vtiger-crm',
    image: 'https://picsum.photos/500/300?random=3',
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

const setFilter = tech => {
  activeFilter.value = tech
}

onMounted(() => {
  // later API fetch here
})
</script>

<style scoped>
.projects-page {
  padding-bottom: 80px;
}

/* HEADER */
.page-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
}

.subtitle {
  color: #6b7280;
  margin-top: 10px;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* FILTERS */
.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* PROJECT CARD */
.project-card {
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.35s ease;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(99, 102, 241, 0.3);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.7)
  );
}

/* CONTENT */
.project-title {
  font-size: 1.25rem;
  font-weight: 700;
}

.project-desc {
  font-size: 0.95rem;
  color: #6b7280;
  margin: 10px 0;
}

.tech-tags {
  margin-top: 10px;
}

/* API NOTE */
.api-note {
  font-size: 0.95rem;
  color: #6b7280;
}
</style>
