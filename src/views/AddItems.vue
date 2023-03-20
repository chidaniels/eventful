<template>
<div class="w-4/5 h-4/5 m-auto border-solid border-1 border-gray-500 text-md bg-gray-50">
    <Header/>
    <form class="mt-10 ml-20 pt-6">
        <div class="flex flex-col w-2/5 ml-0 ">
            <label>Date in the future</label>
            <input type="date" name="date"  class="border-solid border-2 border-gray-300  rounded-lg block">
        </div>
        <div class="flex flex-col w-2/5 mt-5">
            <label>Title</label>
            <input type="text" name="title" input class="border-solid border-2 border-gray-300  rounded-lg block">
        </div>
        <div class="flex flex-col  w-2/5 mt-5">
            <label>Details</label>
            <textarea name="txt" input class="border-solid border-2 border-gray-300  rounded-lg block py-12"></textarea>
        </div>
        <router-link to="/Update">
            <button type="submit" class="bg-[#5271FF] text-white rounded-lg block mt-10 text-sm ml-40 px-4 py-2">Save</button>
        </router-link>
    </form>
<div>
    <Footer/>
</div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
    name:'AddItems',
    components: {
        Header,
        Footer
    }
}
</script>