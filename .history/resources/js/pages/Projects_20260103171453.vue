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
    desc: 'A social media application with user interaction features like posts, comments, and likes.',
    github: 'https://github.com/Ashu-1997-Thakkar/facebook-clone',
    live: 'https://your-live-demo.com/facebook-clone',
    image: '/images/facebook-clone.jpg',
  },
  {
    title: 'E-Commerce Website',
    tech: 'Laravel, Blade, MySQL',
    desc: 'An online store for managing products, cart, and orders, with user and admin dashboards.',
    github: 'https://github.com/Ashu-1997-Thakkar/ecommerce-website',
    live: 'https://your-live-demo.com/ecommerce-website',
    image: '/images/ecommerce.jpg',
  },
  {
    title: 'Vtiger CRM Modules',
    tech: 'PHP, MySQL',
    desc: 'Custom CRM module development for managing customer relations and sales workflows.',
    github: 'https://github.com/Ashu-1997-Thakkar/vtiger-crm',
    live: 'https://your-live-demo.com/vtiger-crm',
    image: '/images/vtiger-crm.jpg',
  },
];
</script>

<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center text-dark fw-bold">Projects</h2>

    <div class="row">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col-md-4 mb-4"
      >
        <div class="card shadow-lg rounded border-0">
          <img
            :src="project.image"
            alt="Project Image"
            class="card-img-top rounded-top"
            style="height: 200px; object-fit: cover"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ project.title }}</h5>
            <p class="card-text">{{ project.desc }}</p>
            <p class="card-text">
              <strong>Technologies:</strong> {{ project.tech }}
            </p>

            <div class="d-flex justify-content-between">
              <a
                :href="project.github"
                target="_blank"
                class="btn btn-outline-dark btn-sm"
              >
                GitHub
              </a>
              <a
                :href="project.live"
                target="_blank"
                class="btn btn-primary btn-sm"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.25rem;
}

.card-body {
  padding: 1.25rem;
}

@media (max-width: 768px) {
  .card-img-top {
    height: 150px;
  }
}
</style>
