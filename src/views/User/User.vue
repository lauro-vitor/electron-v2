<template>
  <div>
    <Header title="Lista de Usuários" path="/users/register" titleButton="Adicionar Usuário" />
    <UserTable v-if="contains" v-bind:users="users" />
    <Loading
      v-bind:contains="contains"
      v-bind:errorDispatch="errorDispatch"
      v-bind:messageDispatch="messageDispatch" />
  </div>
</template> 
<script>
import Header from "../../components/utils/Header";
import UserTable from "../../components/user/UserTable";
import Loading from '../../components/utils/Loading';
import {UserActions} from '../../store/actions/Actions'
export default {
  components: {
    Header,
    UserTable,
    Loading,
  },
  data: () => ({
    users: [],
    contains: false,
    errorDispatch: false,
    messageDispatch:''
  }),

  beforeCreate: async function () {
    try {
      await this.$store.dispatch({
        type:UserActions.GET_ALL_USERS
      });
    } catch (error) {
      this.errorDispatch = true;
      this.messageDispatch = error;
    }
    let { getUsers } = this.$store.getters;
    if (getUsers.length > 0) {
      this.users = getUsers;
      this.contains = true;
    }
   
  },
};
</script>
