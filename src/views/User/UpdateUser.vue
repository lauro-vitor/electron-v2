<template>
     <FormUpdateUser v-bind:propsId="this.$route.params.id" />
</template>
<script>
import FormUpdateUser from '../../components/user/FormUpdateUser'

export default {
    components:{
        FormUpdateUser,
    },
}
</script>