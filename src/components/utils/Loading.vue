<template>
  <div>
    <div v-if="!contains" class="progressContainer">
      <v-progress-circular indeterminate :size="70" :width="7" color="black"></v-progress-circular>
    </div>
    <p v-else-if="nonContains">Ainda Não possui usuários cadastrados</p>
  </div>
</template>
<script>
export default {
    props:{
        contains:Boolean,
        nonContains:Boolean,
    }
};
</script>
<style  scoped>
    .progressContainer{
        text-align: center;
        margin-top:  200px;
    }
</style>