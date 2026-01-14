<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const submitForm = async () => {
  try {
    await axios.post('/contact', form);

    Swal.fire({
      icon: 'success',
      title: 'Message Sent',
      text: 'Thank you for contacting me! I will get back to you soon.',
    });

    form.name = '';
    form.email = '';
    form.message = '';
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Something went wrong. Please try again later.',
    });
  }
};
</script>

<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center text-dark fw-bold">Contact Me</h2>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <v-card class="shadow-lg rounded">
          <v-card-text>
            <form @submit.prevent="submitForm">

              <v-text-field
                label="Your Name"
                v-model="form.name"
                required
                outlined
                color="primary"
                class="mb-3"
              />

              <v-text-field
                label="Your Email"
                v-model="form.email"
                required
                outlined
                color="primary"
                class="mb-3"
              />

              <v-textarea
                label="Your Message"
                v-model="form.message"
                rows="4"
                required
                outlined
                color="primary"
                class="mb-3"
              />

              <v-btn
                type="submit"
                color="primary"
                class="mt-3 w-100"
                elevation="2"
              >
                Send Message
              </v-btn>
            </form>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-card {
  padding: 20px;
}

.v-card-text {
  padding: 20px;
}

.v-text-field, .v-textarea {
  font-size: 1rem;
}

.v-btn {
  font-size: 1.1rem;
  padding: 10px;
}

@media (max-width: 768px) {
  .v-card {
    padding: 15px;
  }

  .v-btn {
    font-size: 1rem;
  }
}
</style>
