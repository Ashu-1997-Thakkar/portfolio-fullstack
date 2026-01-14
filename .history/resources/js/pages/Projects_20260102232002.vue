<template>
  <div class="container mt-5">
    <h2 class="mb-3">Projects</h2>

    <vue-good-table
      :columns="columns"
      :rows="projects"
      :search-options="{ enabled: true }"
      :pagination-options="{ enabled: true }"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProjectStore } from '../store/projectStore';
import 'vue-good-table-next/dist/vue-good-table-next.css';

const store = useProjectStore();

const projects = store.projects;

const columns = [
  { label: 'Title', field: 'title' },
  { label: 'Tech Stack', field: 'tech_stack' },
  { label: 'GitHub', field: 'github_link' },
];

onMounted(() => {
  store.fetchProjects();
});
</script>
