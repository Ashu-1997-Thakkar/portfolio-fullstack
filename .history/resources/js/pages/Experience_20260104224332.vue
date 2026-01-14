<script setup>
import { ref, onMounted } from 'vue';

const experiences = ref([
  {
    company: 'Information Technology Centre (ITC)',
    role: 'WordPress Developer',
    location: 'Anand',
    duration: '2024 – Present',
    description: [
      'Developing and maintaining institutional & commercial websites',
      'Custom themes, plugins, performance optimization',
    ],
    icon: 'mdi-wordpress',
    color: 'primary',
  },
  {
    company: 'DIGITriv Techno',
    role: 'Laravel Developer (Freelance)',
    location: 'Remote',
    duration: '2024',
    description: [
      'Built scalable Laravel applications',
      'REST APIs, authentication, role management',
    ],
    icon: 'mdi-laravel',
    color: 'green',
  },
  {
    company: 'Windzoon Techno Pvt Ltd',
    role: 'Trainee Laravel Developer',
    location: 'Ahmedabad',
    duration: '03/2024 – 09/2024',
    description: [
      'Developed E-commerce & Facebook Clone',
      'Worked with MySQL, Blade, Bootstrap',
    ],
    icon: 'mdi-laravel',
    color: 'orange',
  },
  {
    company: 'Krupa Info Service',
    role: 'Junior PHP Developer',
    location: 'Ahmedabad',
    duration: '06/2023 – 01/2024',
    description: [
      'Vtiger CRM module development',
      'CRUD operations & database design',
    ],
    icon: 'mdi-php',
    color: 'red',
  },
]);

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>

<template>
  <v-container class="experience-page py-16">
    <div class="text-center mb-12">
      <h2 class="text-h3 fw-bold">
        Work <span class="gradient-text">Experience</span>
      </h2>
      <p class="text-grey mt-2">My professional journey so far</p>
    </div>

    <v-timeline align="center" side="end">
      <v-timeline-item
        v-for="(exp, index) in experiences"
        :key="index"
        :dot-color="exp.color"
        :icon="exp.icon"
        fill-dot
      >
        <v-card
          class="experience-card glass-effect"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <v-card-title class="d-flex align-center">
            <v-icon :color="exp.color" size="28" class="mr-3">
              {{ exp.icon }}
            </v-icon>
            <div>
              <h4 class="fw-bold mb-1">{{ exp.role }}</h4>
              <p class="text-grey text-sm mb-0">
                {{ exp.company }} • {{ exp.location }}
              </p>
            </div>
          </v-card-title>

          <v-card-subtitle class="text-primary fw-medium">
            {{ exp.duration }}
          </v-card-subtitle>

          <v-card-text>
            <ul class="exp-points">
              <li v-for="(point, i) in exp.description" :key="i">
                {{ point }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<style scoped>
.experience-page {
  overflow-x: hidden;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.experience-card {
  border-radius: 20px;
  padding: 10px;
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
}

.glass-effect {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.exp-points {
  padding-left: 18px;
}

.exp-points li {
  margin-bottom: 8px;
  color: #e5e7eb;
}

@media (max-width: 768px) {
  .experience-card {
    padding: 5px;
  }
}
</style>
