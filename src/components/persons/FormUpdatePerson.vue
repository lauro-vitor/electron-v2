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
    <Loading v-bind:contains="contains" v-bind:nonContains="nonContains" />
  </div>
</template>
<script>
import TextInput from "../form/TextInput";
import SubmitButton from "../form/SubmitButton";
import MessageError from "../form/MessageError";
import SelectUser from '../form/SelectUser'
import SelectMember from '../form/SelectMember';
import validateNameOnKeyDown from "../../validators/persons/validateNameOnKeyDown";
import validateFormPerson from "../../validators/persons/validateFormPerson";
import Loading from '../../components/utils/Loading'
import { dispatchUpdatePerson } from "../../store/dispatchers/persons/";
import { dispatchGetAllUser } from "../../store/dispatchers/users/";
import {stringParseBoolean} from '../../utils'
export default {
  components: {
    TextInput,
    SubmitButton,
    MessageError,
    SelectMember,
    Loading,
    SelectUser,
  },
  props: {
    propId: String,
  },
  data: () => ({
    id: 0,
    name: "",
    messageName: "",
    isBetaMember: true,
    userId: 0,
    personToUpdate: null,
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
          id: this.id,
          name: this.name,
          isBetaMember: stringParseBoolean(this.isBetaMember),
          userId: this.userId,
        };
        await dispatchUpdatePerson(person);
        this.$router.push("/persons");
      }
    },
    mountFormPerson: function () {
      this.name = this.personToUpdate.name;
      this.isBetaMember = this.personToUpdate.isBetaMember;
      this.userId = this.personToUpdate.userId.toString();
    },
  },
  created: function () {
    this.id = parseInt(this._props.propId, 10);
    this.personToUpdate = this.$store.getters.getPersonById(this.id);
    this.mountFormPerson();
  },
  beforeCreate: async function () {
    await dispatchGetAllUser();
    if (this.$store.getters.getUsers.length > 0) {
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