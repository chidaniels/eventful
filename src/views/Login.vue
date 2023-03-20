<template>
    <div class="m-auto bg-white border-solid border-1 border-gray-500 bg-gray-50 w-4/5 h-4/5">
    <Header/>
     <div class="mx-auto ">
        <h2 class="text-3xl w-2/5 font-bold m-auto mt-20">Welcome back,</h2>
        <p class="text-md w-2/5 m-auto mt-3 ">
            Hi, my name is Eventful Moments,
            I am a bucket... no, not the<br/>bucket of 
            water but i store awesome moments you
            will like to<br/>have in coming years.
        </p>     
      
        <form class="mt-10">
            <div class="flex flex-col w-2/5 m-auto">
                <label>Email</label>
                <input type="email" name="email" input class="mr-15 border-solid border-2 border-gray-300  rounded-lg block" >
            </div>
            <div class="flex flex-col w-2/5 m-auto mt-8">
                <label>Password</label>
                <input type="password" name="password" class=" mr-15 border-solid border-2 border-gray-300  rounded-lg block ">
            </div>
            <router-link to="/bucket">
                <button type="submit" class="bg-[#5271FF] text-white rounded-lg block mt-10 mx-auto text-sm px-7 py-2" >Login</button>
            </router-link>
        </form>
    </div>
    <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name:'Login',
components: {
    Header,
    Footer
}
}
</script>
