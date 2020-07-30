<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar'

export default {
  name: 'App',  
  components: {
    Navbar,
    
  }
}
</script>
<style >
  ::-webkit-scrollbar{
    display: none;
  }
  body{
    margin:0;
  }
  
</style>