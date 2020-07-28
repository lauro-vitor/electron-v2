<template>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <UserRow 
                v-for="user in users" 
                v-bind:key="user.id"
                v-bind:user="user" />
        </tbody>
    </table>
</template>
<script>
import UserRow from './UserRow'
export default {
    components:{
        UserRow,
    },
    props:{
        users:Array,
    }
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