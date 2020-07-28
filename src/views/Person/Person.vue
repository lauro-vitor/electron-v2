<template>
    <div>   
        <Header 
            title="Lista de Membros"
            path="/persons/register"
            titleButton="Adicionar Membro"
        />
         <PersonTable v-if="false" v-bind:persons="persons"/>
        <Loading v-bind:contains="true" v-bind:nonContains="true"/>
    </div>
</template>
<script>
import Header from '../../components/utils/Header'
import PersonTable from '../../components/persons/PersonTable'
import Loading from '../../components/utils/Loading'
export default {
    data: () => ({
        persons:[],
        contains: false,
        nonContains: false,
    }),
    components: {
        Header,
        PersonTable,
        Loading
    },
    beforeCreate: async function (){
      
    }
}
</script>
<style scoped>

</style>