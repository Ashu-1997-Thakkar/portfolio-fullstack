<!-- ============================================ -->
<!-- FILE: resources/js/pages/Contact.vue -->
<!-- ============================================ -->
<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const validate = () => {
  errors.name = form.name ? '' : 'Name is required'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ? ''
    : 'Valid email required'
  errors.message = form.message ? '' : 'Message is required'

  return !errors.name && !errors.email && !errors.message
}

const submitForm = async () => {
  if (!validate()) return

  loading.value = true
  try {
    await axios.post('/api/contact', form)

    Swal.fire({
      icon: 'success',
      title: 'Message Sent 🚀',
      text: 'Thanks for reaching out! I will reply soon.',
      confirmButtonColor: '#6366F1'
    })

    form.name = ''
    form.email = ''
    form.message = ''
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong',
      text: 'Please try again later.'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container class="py-16">
    <div class="text-center mb-10" data-aos="fade-up">
      <h2 class="text-h3 font-weight-bold">
        Contact <span class="gradient-text">Me</span>
      </h2>
      <p class="text-grey mt-2">Let’s build something great together</p>
    </div>

    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="contact-card glass-effect pa-6" data-aos="zoom-in">
          <v-form @submit.prevent="submitForm">
            <v-text-field
              label="Full Name"
              v-model="form.name"
              :error-messages="errors.name"
              prepend-inner-icon="mdi-account"
              variant="outlined"
              class="mb-4"
            />

            <v-text-field
              label="Email Address"
              v-model="form.email"
              :error-messages="errors.email"
              prepend-inner-icon="mdi-email"
              variant="outlined"
              class="mb-4"
            />

            <v-textarea
              label="Message"
              v-model="form.message"
              :error-messages="errors.message"
              rows="4"
              prepend-inner-icon="mdi-message-text"
              variant="outlined"
              class="mb-6"
            />

            <v-btn
              type="submit"
              color="primary"
              size="large"
              block
              :loading="loading"
              prepend-icon="mdi-send"
            >
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.contact-card {
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.25);
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>
