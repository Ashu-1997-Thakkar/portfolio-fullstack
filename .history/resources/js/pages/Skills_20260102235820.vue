<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Technical Skills</h2>

    <div class="row">
      <div class="col-md-4 mb-3" v-for="skill in skills" :key="skill">
        <v-card>
          <v-card-text class="text-center fw-bold">
            {{ skill }}
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  'PHP with Laravel',
  'Core PHP',
  'WordPress',
  'HTML, CSS, Bootstrap',
  'JavaScript, AJAX',
  'Blade Templates',
  'MySQL Database',
  'Vtiger CRM Modules',
  '.NET (Basic)',
];
</script>
