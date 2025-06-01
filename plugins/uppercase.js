export default defineNuxtPlugin(() => {
    return {
        provide: {
            toUppercase: (text) => {
                if (!text){
                    return " "
                }
                else{
                    return text.toUpperCase()
                }
            }
        }
    }
})