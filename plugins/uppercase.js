export default defineNuxtPlugin(() => {
    return {
        provide: {
            toUppercase: (text) => (text || "").toUpperCase()
        }
    }
})