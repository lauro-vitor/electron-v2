<template>
    <FormUpdatePerson v-bind:propId="this.$route.params.id"/>
</template>
<script>
import FormUpdatePerson from '../../components/persons/FormUpdatePerson'
export default {
    components:{
        FormUpdatePerson,
    },
}
</script>
<style scoped>

</style>