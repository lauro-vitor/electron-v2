<template>
    <div>
        <button type="submit">{{title}}</button>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style scoped>
    div {
        width: 100%;
        text-align: end;
    }
    button {
        background-color: #333;
        color:white;
        border: 0px;
        padding: 15px 10px;
        width:100px;
    }
    button:hover{
        background-color: #111;
        cursor:pointer;
    }
</style>