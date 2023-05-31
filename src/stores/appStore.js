/*
 * General application related logic.
 */

export const useAppStore = defineStore('global-application', {
  state: () => ({
    currentTheme: 'light',
    globalSnackbar: {
      model: false,
      text: '',
      color: ''
    },
    scrollPosition: {
      y: 9,
      vmain: {}
    }
  }),

  persist: {
    //Persist only currentTheme
    paths: ['currentTheme', 'scrollPosition']
  },

  getters: {
    isDark: (state) => state.currentTheme === 'dark'
  },

  actions: {
    snackbar(text, type) {
      let color

      switch (type) {
        case 'error':
          // Vuetify error color (defined in theme)
          color = 'error'
          break

        default:
          // Vuetify primary color (defined in theme)
          color = 'primary'
          break
      }

      this.globalSnackbar = {
        model: true,
        text,
        color
      }
    }
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
