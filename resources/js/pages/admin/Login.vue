<template>
  <div class="container mt-5">
    <h3>Admin Login</h3>
    <input v-model="email" placeholder="Email" class="form-control mb-2" />
    <input v-model="password" type="password" placeholder="Password" class="form-control mb-2" />
    <button class="btn btn-primary" @click="login">Login</button>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = async () => {
  const res = await axios.post('/admin/login', {
    email: email.value,
    password: password.value,
  });

  localStorage.setItem('token', res.data.token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
};
</script>
