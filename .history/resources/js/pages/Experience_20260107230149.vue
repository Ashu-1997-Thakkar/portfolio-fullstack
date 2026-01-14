<script setup>
import { ref } from 'vue';
import { VTimeline, VTimelineItem } from 'vuetify/components';

const experiences = ref([
  {
    company: 'Information Technology Centre (ITC)',
    role: 'WordPress Developer',
    duration: 'Present | Anand',
    description: 'Developing and maintaining institutional and commercial websites using WordPress.',
    color: 'primary',
    icon: 'mdi-wordpress',
  },
  {
    company: 'DIGITriv Techno (Freelance)',
    role: 'Laravel Developer',
    duration: 'Remote',
    description: 'Delivered custom Laravel web applications focusing on performance and best practices.',
    color: 'green',
    icon: 'mdi-laravel',
  },
  {
    company: 'Windzoon Techno Pvt Ltd',
    role: 'Trainee Laravel Developer',
    duration: '03/2024 – 09/2024 | Ahmedabad, India',
    description: 'Developed Laravel projects including e-commerce and Facebook clone.',
    color: 'orange',
    icon: 'mdi-laravel',
  },
  {
    company: 'Krupa Info Service',
    role: 'Junior PHP Developer',
    duration: '06/2023 – 01/2024 | Ahmedabad, India',
    description: 'Worked on PHP projects, Vtiger CRM modules, MySQL schemas, and CRUD operations.',
    color: 'red',
    icon: 'mdi-php',
  },
]);
</script>

<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center text-dark fw-bold">Professional Experience</h2>

    <v-timeline>
      <v-timeline-item
        v-for="(exp, index) in experiences"
        :key="index"
        :dot-color="exp.color"
        :icon="exp.icon"
        class="mb-4"
      >
        <h5 class="fw-bold">{{ exp.company }}</h5>
        <p class="text-muted">{{ exp.role }} | {{ exp.duration }}</p>
        <p>{{ exp.description }}</p>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style scoped>
.v-timeline-item {
  padding: 20px;
}

.v-timeline-item h5 {
  font-size: 1.25rem;
}

.v-timeline-item p {
  font-size: 1rem;
}

.v-timeline-item .v-icon {
  font-size: 2rem;
}

@media (max-width: 768px) {
  .v-timeline-item {
    padding: 15px;
  }
}
</style>
