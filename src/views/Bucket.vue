<template>
    <div  class="bg-gray-50 border-solid border-1 border-gray-300 w-4/5 h-4/5">
        <Header/>
        <div class="grid grid-cols-2 gap-1 m-auto w-4/5 mb-5">
            <div>
            <h3 class="text-2xl  font-bold mt-5">Welcome John Doe,</h3>
            <P class="text-sm ">Here are items in your eventful moment bucket.</P>
            </div>
             <router-link to="/AddItems">
                <button class="bg-[#5271FF]  text-white mr-0 rounded-lg block mt-5 mx-auto
                text-sm px-4 py-2">Add Items</button>
             </router-link>
        </div>       
         <div class="grid grid-cols-2 gap-4 w-4/5 m-auto">
            <div class="bg-yellow-200">
            <h5 class="text-black-300 mb-2 text-sm font-bold">
                Lorem ipsum began as scrambled, nonsensical Latin derived
                 from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.
            </h5>
            <p class="text-sm">
                Until recently, the prevailing view assumed lorem ipsum was born 
                as a nonsense text. “It’s not Latin, though it looks like it, 
                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                Until recently, the prevailing  
            </p>
            <div class="mt-3 grid grid-cols-2 ">
            <a href="#" class="text-blue-500"> View Details</a>
            <p class="text-end">20/05/2025</p>
            </div>
            </div>

            <div class="border-[#60CED5] border-solid border-2">
            <h5 class="text-black-300 mb-2 text-sm font-bold">
                Lorem ipsum began as scrambled, nonsensical Latin derived
                 from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.            
            </h5>
            <p class="text-sm">
                Until recently, the prevailing view assumed lorem ipsum was born 
                as a nonsense text. “It’s not Latin, though it looks like it, 
                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                Until recently, the prevailing 
            </p>
            <div class="mt-3 grid grid-cols-2">
            <a href="#" class="text-blue-500"> View Details</a>
            <p class="text-end">20/05/2025</p>
            </div>
            </div>

            <div>
            <h5 class="text-black-300 mb-2 text-sm font-bold">
                Lorem ipsum began as scrambled, nonsensical Latin derived 
                from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.
            </h5>
            <p class="text-sm">
                Until recently, the prevailing view assumed lorem ipsum was born 
                as a nonsense text. “It’s not Latin, though it looks like it, 
                and it actually says nothing,” Before & After magazine answered a curious reader, 
                “Its ‘words’ loosely approximate the frequency with which letters occur in English,
                 which is why at a glance it looks pretty real.
                Until recently, the prevailing  
            </p>
            <div class="mt-3 grid grid-cols-2">
            <a href="#" class="text-blue-500"> View Details</a>
            <p class="text-end">20/05/2025</p>
            </div>
            </div>

            <div >
            <h5 class="text-black-300 mb-2 text-sm font-bold">
                Lorem ipsum began as scrambled, nonsensical Latin derived 
                from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.
            </h5>
            <p class="text-sm">
                Until recently, the prevailing view assumed lorem ipsum was born 
                as a nonsense text. “It’s not Latin, though it looks like it, 
                and it actually says nothing,” Before & After magazine answered a curious reader, 
                “Its ‘words’ loosely approximate the frequency with which letters occur in English, 
                which is why at a glance it looks pretty real.
                 Until recently, the prevailing 
            </p>
            <div class="mt-3 grid grid-cols-2">
            <a href="#" class="text-blue-500"> View Details</a>
            <p class="text-end">20/05/2025</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    name:'Bucket',
    components: {
        Header,
      
    }
    
}
</script>