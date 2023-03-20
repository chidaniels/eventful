<template>
  <div class="container bg-[#008289] border-solid border-1 border-[#707070] mx-auto my-auto px-8 py-3">
    <nav class="flex items-center">
      <ul>
        <li class="inline-block pl-10 pr-80 ">
          <router-link to="#" class="pr-10 text-white italic" >Eventful Moments</router-link>
        </li>
        <li class="inline-block pl-80 ">
          <router-link to="#" class="text-white text-right">Login</router-link>
        </li>
        <li class="inline-block pl-20">
          <router-link to="./CreateAccount" class="text-white">Register</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'

}
</script>

