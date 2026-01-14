<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Contact Me</h2>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <v-card>
          <v-card-text>
            <form @submit.prevent="submitForm">

              <v-text-field
                label="Name"
                v-model="form.name"
                required
              />

              <v-text-field
                label="Email"
                v-model="form.email"
                required
              />

              <v-textarea
                label="Message"
                v-model="form.message"
                rows="4"
                required
              />

              <v-btn
                type="submit"
                color="primary"
                class="mt-3"
                block
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
      text: 'Thank you for contacting me!'
    });

    form.name = '';
    form.email = '';
    form.message = '';
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Something went wrong!'
    });
  }
};
</script>
