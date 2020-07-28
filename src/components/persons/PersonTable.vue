<template>
    <table>
        <thead>
            <th>Id</th>
            <th>Apelido</th>
            <th>Membro</th>
            <th>email</th>
            <th>Opções</th>
        </thead>
        <PersonRow v-for="person in persons" v-bind:key="person.id" v-bind:person="person"/>
    </table>
</template>
<script>
import PersonRow from './PersonRow'

export default {
    components:{
        PersonRow
    },
    props:{
        persons:Array
    },
}
</script>
<style scoped>
     table  {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    th{
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #ccc;
    }
</style>