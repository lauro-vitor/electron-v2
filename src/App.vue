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
  body{
    margin:0;
  }
  
</style>