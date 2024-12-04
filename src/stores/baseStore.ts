import { defineStore } from 'pinia'
import { baseService } from '../services/base-service'
const API_URL = import.meta.env.VITE_API_URL
export const useBaseStore = defineStore({
  id: 'base',
  state: () => ({
    snack: {
      status: false,
      message: 'sdd',
      color: ''
    },
    overlay: false,
    loginData: null,
    windowReSize: null
  }),
  actions: {
    overlayChange(status: boolean) {
      this.overlay = status
    },
    snackChange(data: any) {
      this.snack = data
    },
    //lay danh sach cac phong ban
    async login(url: string) {
      await baseService.fetch(API_URL + url).then((resp) => {
        this.loginData = 'sjdfhjsdhfjdf'
      })
      return this.loginData
    },
  },
  persist: true,
})
