<template>
    <div class="w-4/5 h-4/5 border-solid border-1 border-gray-500 text-md bg-gray-50">
        <Header/>
        <form class="mt-10 ml-20 pt-6">
            <div class="flex flex-col w-2/5 ml-0 ">
                <label>Date in the future</label>
                <input type="date" name="date" placeholder="02/07/2023" class="border-solid border-2 border-gray-300 text-gray-50 rounded-lg block">
            </div>
            <div class="flex flex-col w-2/5 mt-5">
                <label>Title</label>
                <input type="text" name="title" placeholder="lorem ipsum began as scrambled, nonensical latin derived from" 
                class="border-solid border-2 border-gray-300 text-gray-50 rounded-lg block">
            </div>
            <div class="flex flex-col w-2/5 mt-6">
                <label>Details</label>
                <textarea name="txt" placeholder="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 
                “It’s notLatin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious
                reader,“Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it 
                looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, 
                though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its
                ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks
                 pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin,
                 though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its
                 ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks 
                 pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though 
                 it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ 
                 loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty 
                 real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though 
                 it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ 
                 loosely approximate the frequency with which letters occur in English,which is why at a glance it looks pretty real. 
                 Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, 
                 and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the
                  frequency with which letters occur in English, which is why at a glance it looks pretty real."
                class="border-solid border-2 border-gray-300 text-gray-50 rounded-lg block py-12"></textarea>
            </div>
            <router-link to="/EditDelete">
                <button type="submit" class="bg-[#5271FF] text-white 
                rounded-lg block mt-10 mx-10 text-sm ml-40 px-4 py-2">Update</button>
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
        },
    mounted()
{
    let user=localStorage.getItem("user-info")
    if(!user){
       this.$router.push({name:"EditDelete"})
    }
}
  
    }
    </script>