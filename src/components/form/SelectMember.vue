<template>
    <div>
    <TitleInput title="Membro:" />
      <select  size="2" v-bind:value="value"  v-on:click="$emit('input',$event.target.value)">
       <option v-bind:value="'true'">Sim</option>
       <option v-bind:value="'false'">Não</option>
      </select>
    </div>
</template>
<script>
import TitleInput from './TitleInput'
export default {
    components:{
        TitleInput,
    },
    props:{
        value:{
            type:[Boolean,String]
        }
    },
}
</script>
<style scoped>
select {
  width: 100%;
  font-size: 1.2em;
  border: 1px solid #c2c2c2;
  padding: 12px 20px;
  margin-bottom: 60px;
}
</style>
