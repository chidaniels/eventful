<template>
    <div class="m-auto  w-4/5 h-4/5 bg-white border-solid border-1 border-gray-300" >
    <Header/>
     <div class="mx-auto">
        <h2 class="text-3xl w-2/5 font-bold m-auto mt-20">Create an account,</h2>
        <form class="mt-10">
            <div class="flex flex-col w-2/5  m-auto">
                <label>Fullname</label>
                <input type="text" v-model="fullname" name="fullname" class="mr-20 border-solid border-2 border-gray-300  rounded-lg block">
            </div>
            <div class="flex flex-col w-2/5 m-auto mt-7">
                <label>Email</label>
                <input type="email" v-model="email" name="email" class="mr-20 border-solid border-2 border-gray-300 rounded-lg block">
            </div>
            <div class="flex flex-col m-auto w-2/5 mt-7">
                <label>Password</label>
                <input type="password" v-model="password" name="password" class="mr-20 border-solid border-2 border-gray-300  rounded-lg block ">
            </div>
            <router-link to="/Login">
                <button type="submit" v-on:click="create" class="bg-[#5271FF] text-white rounded-lg block mt-10 mx-auto  text-sm  px-5 py-3">Create</button>
            </router-link>
        </form>
        <div>
            <Footer/>
        </div>
    </div>
</div>
 

</template>

<script>
import axios from 'axios'

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name:'Login',
components: {
    Header,
    Footer
},
data()
{
    return {
        fullname:"",
        email:"",
        password:""
    }
},
methods: {
   async create()
    {
        let result = await axios.post("https://eventful-moments.onrender.com/api/v1/users/signup", {
            fullname:this.fullname,
            email:this.email,
            password:this.password
        });
        console.warn(result);
        if (result.status==200)
        {
            localStorage.setItem("user-info",JSON.stringify(result.data))
        }
    }
},
mounted()
{
   let user=localStorage.getItem("user-info")
   if(!user){
        this.$router.push({name:"CreateAccount"})
     }
}

}
</script>
