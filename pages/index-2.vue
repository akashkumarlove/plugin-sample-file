<template>
    <div class="h-screen w-screen flex flex-col items-center justify-center">
        <div class="text text-3xl">
            Showing User Text
        </div>

        <div class="content mt-5 text-red-500">
            Simple Text =  
               {{ userText }}
        </div>
       
        <div class="content mt-5 text-red-500">
            UpperCase Text = 
               {{ $toUppercase(userText) }}
        </div>
    </div>
</template>

<script setup>
       
       const route = useRoute()
       const {$toUppercase} = useNuxtApp()


       const userText = route.query.text
</script>
