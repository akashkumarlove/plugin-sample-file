<template>
    <div class="h-screen w-screen flex flex-col items-center justify-center">
        <div class="text text-3xl">
            Showing User Text
        </div>

        <div class="content text-2xl mt-5 text-red-500">
            Simple Text 
            <div class="text-black text-sm  ">
                {{ store.text }}
            </div>
               
        </div>
       
        <div class="content text-2xl mt-5 text-red-500">
            UpperCase Text 
            <div class="text-black text-sm">
                 {{ $toUppercase(store.text) }}
            </div>
               
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
     
     const { $toUppercase } = useNuxtApp()

     const store = useUserStore()
</script>
