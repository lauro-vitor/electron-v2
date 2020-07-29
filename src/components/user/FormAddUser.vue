<template>
  <form action v-on:submit.prevent="submitForm()">
    <TextInput
      v-model="firstName"
      placeholder="Primeiro Nome"
      v-bind:onkeydown="validateFirstNameOnKeyDownLocal()"
    />
    <MessageError v-bind:message="messageFirstName" />
    <TextInput
      v-model="lastName"
      placeholder="Sobrenome"
      v-bind:onkeydown="validationLastNameOnKeyDownLocal()"
    />
    <MessageError v-bind:message="messageLastName" />
    <TextInput
      v-model="email"
      placeholder="email@exemplo.com"
      v-bind:onkeydown="validationEmailOnKeyDownLocal()"
    />
    <MessageError v-bind:message="messageEmail" />
    <SubmitButton title="Salvar" />
  </form>
</template>

<script>
import TextInput from "../../components/form/TextInput";
import SubmitButton from "../../components/form/SubmitButton";
import MessageError from "../../components/form/MessageError";
import validateFirstNameOnKeyDown from "../../validators/user/validateFirstNameOnKeyDown";
import validateLastNameOnKeyDown from "../../validators/user/validateLastNameOnKeyDown";
import validateEmailOnKeyDown from "../../validators/user/validateEmailOnKeyDown";
import validateFormUser from "../../validators/user/validateFormUser";
import { UserActions } from "../../store/actions/Actions";

export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    messageFirstName: "",
    messageLastName: "",
    messageEmail: "",
    userToUpdate: null,
  }),
  components: {
    TextInput,
    SubmitButton,
    MessageError,
  },
  methods: {
    validateFirstNameOnKeyDownLocal: function () {
      validateFirstNameOnKeyDown(this);
    },
    validationLastNameOnKeyDownLocal: function () {
      validateLastNameOnKeyDown(this);
    },
    validationEmailOnKeyDownLocal: function () {
      validateEmailOnKeyDown(this);
    },
    validateForm: function () {
      return validateFormUser(this);
    },
    submitForm: async function () {
      if (this.validateForm()) {
        let user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        };
        try {
          await this.$store.dispatch({
            type: UserActions.ADD_USER,
            user,
          });
          alert("Usuário adicionado com sucesso!");
        } catch (error) {
          alert(error);
        } finally {
          this.$router.push("/users");
        }
      }
    },
  },
};
</script>
<style scoped>
form {
  width: 60%;
  margin: 10px auto 10px auto;
}
</style>