<template>
    <div>
        <p>{{title}}</p>
    </div>
</template>
<script>

export default {
    props:{
        title:String,
    }
}
</script>
<style scoped>
    div{
        margin-bottom: 30px;
    }
    p{
        font-size: 1.5em;
    }
</style>