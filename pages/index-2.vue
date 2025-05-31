<template>
    <div class="h-screen w-screen flex flex-col items-center justify-center">
        <div class="text text-3xl">
            Showing User Text
        </div>

        <div class="content text-2xl mt-5 text-red-500">
            Simple Text 
            <div class="text-black text-sm">
                {{ userText }}
            </div>
               
        </div>
       
        <div class="content text-2xl mt-5 text-red-500">
            UpperCase Text 
            <div class="text-black text-sm">
                 {{ $toUppercase(userText) }}
            </div>
               
        </div>
    </div>
</template>

<script setup>

     
     import { onMounted , ref } from 'vue'
     const userText = ref('')
       
    //    const route = useRoute()
       const {$toUppercase} = useNuxtApp()


    //    const userText = route.query.text

      
 onMounted(() => {

       userText.value = localStorage.getItem('userText')
    })

</script>
