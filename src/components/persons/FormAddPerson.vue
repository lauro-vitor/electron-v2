<template>
  <div>
    <form action v-on:submit.prevent="submitForm()" v-if="contains">
      <TextInput
        v-model="name"
        placeholder="Apelido"
        v-bind:onkeydown="validateNameOnKeyDownLoacal()"
      />
      <MessageError v-bind:message="messageName" />
      <SelectMember v-model="isBetaMember" />
      <SelectUser v-model="userId" v-bind:users="this.$store.getters.getUsers" />
      <SubmitButton title="salvar" />
    </form>
    <Loading 
      v-bind:contains="contains" 
      v-bind:errorDispatch="errorDispatch"
      v-bind:messageDispatch="messageDispatch"
      />
  </div>
</template>
<script>
import TextInput from "../form/TextInput";
import SubmitButton from "../form/SubmitButton";
import MessageError from "../form/MessageError";
import SelectMember from '../form/SelectMember';
import SelectUser from '../form/SelectUser';
import validateNameOnKeyDown from "../../validators/persons/validateNameOnKeyDown";
import validateFormPerson from "../../validators/persons/validateFormPerson";
import {stringParseBoolean} from '../../utils'
import Loading from '../../components/utils/Loading'
import { UserActions, PersonActions } from '../../store/actions/Actions';
export default {
  components: {
    TextInput,
    SubmitButton,
    MessageError,
    Loading,
    SelectMember,
    SelectUser
  },
  data: () => ({
    name: "",
    messageName: "",
    isBetaMember: true,
    userId: 0,
    contains: false,
    errorDispatch:false,
    messageDispatch: "",
  }),
  methods: {
    validateNameOnKeyDownLoacal: function () {
      validateNameOnKeyDown(this);
    },
    submitForm: async function () {
      if (validateFormPerson(this)) {
        let person = {
          name: this.name,
          isBetaMember: stringParseBoolean(this.isBetaMember),
          userId: this.userId,
        };
        try {
          await this.$store.dispatch({
            type:PersonActions.ADD_PERSON,
            person
          });
          
          alert('Membro adicionado com sucesso!');
        } catch (error) {
          alert(error);
        }finally{
          this.$router.push("/persons");
        }
      }
    },
  },
  beforeCreate: async function () {
    try {
      await this.$store.dispatch({
        type:UserActions.GET_ALL_USERS
      });
      this.contains = true;
    } catch (error) {
      this.messageDispatch = error;
      this.errorDispatch = true;
    }
  },
};
</script>
<style scoped>

form {
  width: 60%;
  margin: 30px auto 10px auto;
}
</style>