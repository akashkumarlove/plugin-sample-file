import { defineStore } from 'pinia'


export const useUserStore = defineStore("user" , {
    state: () => ({
        text: ""
    }),

    actions: {
        setText(newText){
            this.text = newText
        }
    }
})