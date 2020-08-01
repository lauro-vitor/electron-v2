<template>
  <div>
    <Header title="Lista de Membros" path="/persons/register" titleButton="Adicionar Membro" />
    <PersonTable v-if="contains" v-bind:persons="persons" />
    <Loading
      v-bind:contains="contains"
      v-bind:errorDispatch="errorDispatch"
      v-bind:messageDispatch="messageDispatch"
    />
  </div>
</template>
<script>
import Header from "../../components/utils/Header";
import PersonTable from "../../components/persons/PersonTable";
import Loading from "../../components/utils/Loading";
import { PersonActions } from "../../store/actions/Actions";
export default {
  data: () => ({
    persons: [],
    contains: false,
    errorDispatch: false,
    messageDispatch: "",
  }),
  components: {
    Header,
    PersonTable,
    Loading,
  },
  beforeCreate: async function () {
    try {
      await this.$store.cache.dispatch({
        type: PersonActions.GET_ALL_PERSON,
      });
      this.persons = this.$store.getters.getAllPersons;
      this.contains = true;
    } catch (error) {
      this.errorDispatch = true;
      this.messageDispatch = error;
    }
  },
};
</script>
<style scoped>
</style>