// ============================================
// FILE: resources/js/store/appStore.js
// ============================================

import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    globalLoading: false,
  }),

  actions: {
    startLoading() {
      this.globalLoading = true
    },
    stopLoading() {
      this.globalLoading = false
    },
  },
})
