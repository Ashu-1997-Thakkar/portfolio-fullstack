// ============================================
// FILE: resources/js/store/appStore.js
// ============================================

import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // Global UI states
    loading: false,
    darkMode: false,

    // App meta
    appName: 'Ashutosh Portfolio',
  }),

  getters: {
    isLoading: (state) => state.loading,
    isDarkMode: (state) => state.darkMode,
  },

  actions: {
    /* --------------------
       Loader Controls
    -------------------- */
    startLoading() {
      this.loading = true
    },

    stopLoading() {
      this.loading = false
    },

    /* --------------------
       Theme Controls
    -------------------- */
    toggleTheme() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.darkMode)
    },

    initTheme() {
      const savedTheme = localStorage.getItem('darkMode')
      this.darkMode = savedTheme === 'true'
    },
  },
})
