<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })

// /shzl/api/v1/party/personnel
</script>
<script>
import axios from 'axios';
export default {
  data(){
   return{

   } 
  },
  created(){
    // console.log(this.$store.state.name);
    axios.get(`/shzl/api/v1/party/personnel`).then(res=>{
      console.log(res);
    })
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

<style lang="scss" scoped>
  div{
    color:#fff;
  }
</style>
