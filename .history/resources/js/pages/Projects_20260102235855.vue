<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Projects</h2>

    <vue-good-table
      :columns="columns"
      :rows="projects"
      :pagination-options="{ enabled: true }"
      :search-options="{ enabled: true }"
    />
  </div>
</template>

<script setup>
import 'vue-good-table-next/dist/vue-good-table-next.css';

const columns = [
  { label: 'Project', field: 'title' },
  { label: 'Technology', field: 'tech' },
  { label: 'Description', field: 'desc' },
];

const projects = [
  {
    title: 'Facebook Clone',
    tech: 'Laravel, MySQL, Bootstrap',
    desc: 'Social media application with user interaction features',
  },
  {
    title: 'E-Commerce Website',
    tech: 'Laravel, Blade, MySQL',
    desc: 'Product management, cart, and order system',
  },
  {
    title: 'Vtiger CRM Modules',
    tech: 'PHP, MySQL',
    desc: 'Custom CRM module development',
  },
];
</script>
