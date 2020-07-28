<template>
  <div class="home">
    <div class="col col1">
      <Card title="Usuários" body="Gerencie os usuários" path="/users"/>
    </div>
    <div class="col col2" >
      <Card title="Membros" body="Gerencie os membros" path="/persons"/>
    </div>
  </div>  
</template>

<script>
import Card from '../components/home/Card'
export default {
  name: 'Home',
  components:{
    Card
  }
}
</script>
<style scoped>
  .home{
    height: 100%;
  }
 .col{
   width:40%;
   margin: 0 10% 0 10%;
 }
 .col1{
   float:right;
 }
</style>
