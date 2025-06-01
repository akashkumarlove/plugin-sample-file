<template>
    <div class=" h-screen w-screen flex flex-col items-center justify-center ">
        <div class="heading text-3xl">
           Enter Your Text
        </div>
        <div class="input mt-6">
            <input v-model="inputText" name="text" placeholder="enter your text" type="text" class="text-red-500"/>
        </div>

        <div class="button hover:bg-amber-950 hover:text-blue-700 bg-black text-white rounded-lg py-3 px-8 mt-9 cursor-pointer">
            <button @click="nextPage" class="cursor-pointer">Click to Navigate on 2nd Page</button>
        </div>
        
    </div>
</template>

<script setup>

const router = useRouter()

const inputText = useState("userText" , () => "")

const nextPage = () => {
    router.push("/index-2")
}
</script>

