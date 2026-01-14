// ============================================
// FILE: resources/js/store/appStore.js
// ============================================

import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false,      // 🔥 FIXED
    darkMode: false,
  }),

  actions: {
    startLoading() {
      this.loading = true
    },
    stopLoading() {
      this.loading = false
    },

    toggleTheme() {
      this.darkMode = !this.darkMode
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
    },

    initTheme() {
      const saved = localStorage.getItem('theme')
      this.darkMode = saved === 'dark'
    },
  },
})
