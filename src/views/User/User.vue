<template>
  <div>
    <Header title="Lista de Usuários" path="/users/register" titleButton="Adicionar Usuário" />
    <UserTable v-if="false" v-bind:users="users" />
    <Loading v-bind:contains="contains"  v-bind:nonContains="nonContains"/>
  </div>
</template> 
<script>
import Header from "../../components/utils/Header";
import UserTable from "../../components/user/UserTable";
import Loading from '../../components/utils/Loading'
import {dispatchGetAllUser} from '../../store/dispatchers/users/'
export default {
  components: {
    Header,
    UserTable,
    Loading,
  },
  data: () => ({
    users: [],
    contains: true,
    nonContains: true,
  }),

  beforeCreate: async function () {
    console.log('here before create!')
    await dispatchGetAllUser();
  },
};
</script>
<style scoped>
#progressContainter {
  text-align: center;
  margin-top: 50px;
}
</style>
