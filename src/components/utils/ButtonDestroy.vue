<template>
    <button  v-on:click="$emit('click',$event.target.value)">Excluir</button>
</template>
<script>
export default {
    props:{
        title:String,
        path:String,
    }
}
</script>
<style scoped>
   button {  

        margin: auto 0 auto 10px;
        background-color: #ebebeb;
        color: black;
        border: 0px;
        padding: 15px 10px;
        width:100px;
        text-decoration:none;
        border-radius: 5px;
    }
    button:hover{
        background-color: #dedede;
    }
</style>