<template>
  <router-link
    v-bind:to="link" >
        {{name}}
  </router-link> 
</template>
<script>

export default {
    props:{
        name:String,
        link:String,
    },
    
}
</script>
<style scoped>
     a {
        padding: 20px;
        margin-right: 10px;
        color: white;
        text-decoration: none;
    }
    a:hover, .router-link-exact-active{
        background-color:#111;
    }
   
</style>