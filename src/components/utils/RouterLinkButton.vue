<template>
    <router-link v-bind:to="link">{{title}}</router-link>   
</template>
<script>
export default {
    props:{
        link:String,
        title:String,
    }
}
</script>
<style scoped>
   a {  

        margin: auto 0 auto 20px;
        background-color: #ebebeb;
        color: black;
        border: 0px;
        padding: 15px 10px;
        width:100px;
        text-decoration:none;
        border-radius: 5px;
    }
    a:hover{
        background-color: #dedede;
    }
</style>