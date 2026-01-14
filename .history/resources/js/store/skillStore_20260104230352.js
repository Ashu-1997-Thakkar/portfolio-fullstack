// ============================================
// FILE: resources/js/store/skillStore.js
// ============================================

import { defineStore } from 'pinia'
import axios from 'axios'

export const useSkillStore = defineStore('skill', {
  state: () => ({
    skills: [],
    loading: false,
    error: null,
  }),

  getters: {
    skillsByCategory: (state) => {
      return state.skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = []
        acc[skill.category].push(skill)
        return acc
      }, {})
    },
  },

  actions: {
    async fetchSkills() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('/skills')
        this.skills = res.data
      } catch (e) {
        this.error = 'Failed to load skills'
      } finally {
        this.loading = false
      }
    },

    async addSkill(data) {
      this.loading = true
      try {
        await axios.post('/skills', data)
        await this.fetchSkills()
      } catch (e) {
        this.error = 'Failed to add skill'
      } finally {
        this.loading = false
      }
    },
  },
})
