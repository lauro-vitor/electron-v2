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
    <Loading v-bind:contains="contains" v-bind="nonContains" />
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
import { dispatchAddPerson } from "../../store/dispatchers/persons/";
import { dispatchGetAllUser } from "../../store/dispatchers/users/";
import {stringParseBoolean} from '../../utils'
import Loading from '../../components/utils/Loading'
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
    nonContains: false,
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
        await dispatchAddPerson(person);
        this.$router.push("/persons");
      }
    },
  },
  beforeCreate: async function () {
    await dispatchGetAllUser();
    if(this.$store.getters.getUsers.length > 0){
      this.contains = true;
      return;
    }
    this.nonContains = true;
  },
};
</script>
<style scoped>

form {
  width: 60%;
  margin: 30px auto 10px auto;
}
</style>