// ============================================
// FILE: resources/js/store/projectStore.js
// ============================================

import { defineStore } from 'pinia'
import axios from 'axios'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [],
    experiences: [],
    loading: false,
    error: null,
  }),

  getters: {
    featuredProjects: (state) =>
      state.projects.filter(p => p.is_featured),
  },

  actions: {
    async fetchProjects() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('/projects')
        this.projects = res.data
      } catch (e) {
        this.error = 'Failed to load projects'
      } finally {
        this.loading = false
      }
    },

    async fetchExperiences() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('/experiences')
        this.experiences = res.data
      } catch (e) {
        this.error = 'Failed to load experience'
      } finally {
        this.loading = false
      }
    },
  },
})
