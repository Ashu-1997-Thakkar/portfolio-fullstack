// ============================================
// FILE: resources/js/store/appStore.js
// ============================================

import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    /* --------------------
       Global UI States
    -------------------- */
    loading: false,
    darkMode: false,

    /* --------------------
       App Meta
    -------------------- */
    appName: 'Ashutosh Portfolio',
  }),

  /* --------------------
     Getters
  -------------------- */
  getters: {
    isLoading: (state) => state.loading,
    isDarkMode: (state) => state.darkMode,
  },

  /* --------------------
     Actions
  -------------------- */
  actions: {
    /* Loader Controls */
    startLoading() {
      this.loading = true
    },

    stopLoading() {
      this.loading = false
    },

    /* Theme Controls */
    toggleTheme() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false')
    },

    initTheme() {
      const savedTheme = localStorage.getItem('darkMode')
      this.darkMode = savedTheme === 'true'
    },
  },
})
