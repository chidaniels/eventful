<template>
    <div class="w-4/5 h-4/5 border-solid border-1 border-gray-200  bg-gray-50">
        <Header/>
        <h3 class="text-xl w-4/5 font-bold m-auto mt-6">
            Lorem ipsum,began as scrambled, nonsensitical latin derived from cicero ist century
        </h3>
        <p  class="text-md text-blue-200 w-4/5 m-auto">20/05/2025</p>
        <p class="mt-5 w-4/5 m-auto text-sm">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
            and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency 
            with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed
            magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which 
            is why at a glance it looks pretty real. 
            <br/>
            <br/>
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
            and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the
            frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view
            Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters 
            occur in English, which is why at a glance it looks pretty real. 
            <br/>
            <br/>
            Until recently, the prevailing
            view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says 
            nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which 
            letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem 
            magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English,
            which is why at a glance it looks pretty real.
        </p>
        <div class="flex mt-10 ml-20 ">
            <button class=" text-white rounded-lg block 
             text-sm px-10 py-2 bg-[#5271FF] ml-10 ">Edit</button>
             <button class=" text-white rounded-lg block
           text-sm px-10 py-2 bg-orange-400 ml-10">Delete</button>
        </div>
        <div>
        <Footer/>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name:'EditDelete',
    components: {
        Header,
        Footer
    }
}
</script>