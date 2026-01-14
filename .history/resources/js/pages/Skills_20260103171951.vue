<script setup>
const skills = [
  { name: 'PHP with Laravel', level: 90 },
  { name: 'Core PHP', level: 80 },
  { name: 'WordPress', level: 75 },
  { name: 'HTML, CSS, Bootstrap', level: 85 },
  { name: 'JavaScript, AJAX', level: 70 },
  { name: 'Blade Templates', level: 80 },
  { name: 'MySQL Database', level: 85 },
  { name: 'Vtiger CRM Modules', level: 65 },
  { name: '.NET (Basic)', level: 40 },
];
</script>

<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center text-dark fw-bold">Technical Skills</h2>

    <div class="row">
      <div class="col-md-6 col-lg-4 mb-4" v-for="(skill, index) in skills" :key="index">
        <v-card class="shadow-lg rounded">
          <v-card-title class="text-center fw-bold">{{ skill.name }}</v-card-title>
          <v-card-text>
            <v-progress-linear
              :value="skill.level"
              color="indigo"
              height="15"
              class="mb-2"
            >
              <span>{{ skill.level }}%</span>
            </v-progress-linear>
            <div class="text-muted text-center">
              Level: {{ skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Intermediate' : 'Beginner' }}
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-card-title {
  font-size: 1.25rem;
}

.v-card-text {
  font-size: 1rem;
}

.v-progress-linear {
  border-radius: 8px;
}

@media (max-width: 768px) {
  .v-card-title {
    font-size: 1.1rem;
  }
}
</style>
