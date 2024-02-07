import { defineStore } from 'pinia'

export const counteStore = defineStore('counter', {
    state() {
        return {
            count: 100
        }
    },
    actions: {
        
    }
})