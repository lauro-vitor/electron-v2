<template>
    <div class="card-container center">
       <div class="card-title">
           {{title}}
       </div>
       <div class="card-body">
           {{body}}
       </div>
       <div class="card-button" >
           <RouterLinkButton title="ir para" v-bind:link="path"/>
       </div>
       
    </div>
</template>
<script>
import RouterLinkButton from '../utils/RouterLinkButton'
export default {
    components:{
        RouterLinkButton
    },
    props:{
        title:String,
        body:String,
        path:String
    }
}
</script>
<style scoped>
  *{
      font-size: 1.2em;
  }
  .card-container{
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .center{
    text-align: center;
  }
  .card-title{
    background-color: #ccc;
    padding: 5px;
  }
  .card-body{
      margin-top: 10px;
      margin-bottom: 30px;
  }
  .card-button {
      
    margin-bottom: 8%;
  }
  
</style>