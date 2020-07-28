<template>
    <div>
        <div id="container">
            <h2>{{title}}</h2>
            <RouterLinkButton v-bind:link="path" v-bind:title="titleButton"/>     
        </div>
    </div>
</template>
<script>
import RouterLinkButton from '../utils/RouterLinkButton'
export default {
    props:{
        title:String,
        titleButton:String,
        path:String
    },
    components:{
        RouterLinkButton,
    }
}
</script>
<style scoped>
    div{
        height: 80px;
    }
    div#container{
        margin-top: 20px;
        height: 50px;
    }
    h2 {
       display:inline;
    }
</style>