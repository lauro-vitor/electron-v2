<template>
  <tr>
    <td>{{user.id}}</td>
    <td>{{user.firstName}} {{user.lastName}}</td>
    <td>{{user.email}}</td>
    <td>
      <RouterLinkButton v-bind:link="route" title="Alterar" />
      <ButtonDestroy v-on:click="destroy(user.id)" />
    </td>
  </tr>
</template>
<script>
import ButtonDestroy from "../utils/ButtonDestroy";
import RouterLinkButton from "../utils/RouterLinkButton";
import { UserActions } from "../../store/actions/Actions";

export default {
  data: () => ({
    route: "",
  }),
  components: {
    ButtonDestroy,
    RouterLinkButton,
  },
  props: {
    user: Object,
  },
  methods: {
    setRoute: function (id) {
      this.route = `/users/update/${id}`;
    },
    destroy: async function (id) {
      try {
        await this.$store.dispatch({
          type: UserActions.DESTROY_USER,
          id,
        });
        alert("Usuário excluído com sucesso!");
      } catch (error) {
        alert(error);
      }
    },
  },
  created: function () {
    this.setRoute(this._props.user.id);
  },
};
</script>
<style scoped>
td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>