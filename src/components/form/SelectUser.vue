<template>
    <div>
    <TitleInput title="Email:" />
      <select  size="2" v-bind:value="value"  v-on:click="$emit('input', $event.target.value)">
        <option
          v-for="user in users"
          v-bind:key="user.id"
          v-bind:value="user.id"
        >{{user.email}}</option>
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
        users:Array,
        value:{
            types:[String, Number]
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
