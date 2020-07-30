<template>
  <div>
    <div  v-if="!errorDispatch && !contains" class="progressContainer">
      <v-progress-circular indeterminate :size="70" :width="7" color="black"></v-progress-circular>
    </div>
    <p v-else >{{messageDispatch}}</p>
  </div>
</template>
<script>
export default {
    props:{
        contains:Boolean,
        errorDispatch:Boolean,
        messageDispatch:String,
    },
};
</script>
<style  scoped>
    .progressContainer{
        text-align: center;
        margin-top:  200px;
    }
    p{
      font-size: 1.2em;
    }
</style>