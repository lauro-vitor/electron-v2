<template>

    <p v-if="message">{{message}}</p>
    <p v-else id="hidden">{{auxMessage}}</p>
</template>
<script>
export default {
    data: () =>({
        auxMessage: 'Mensagem'
    }),
    props:{
        message:String,
    }
}
</script>
<style scoped>
    p{
        color:red;
        margin: 10px 0 0 0;
    }
    #hidden{
        visibility: hidden;
    }
</style>