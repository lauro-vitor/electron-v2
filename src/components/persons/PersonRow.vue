<template>
    <tr>
        <td>{{person.id}}</td>
        <td>{{person.name}}</td>
        <td>{{parse(person.isBetaMember)}}</td>
        <td>{{person.user.email}}</td>
        <td>
           <RouterLinkButton v-bind:link="route" title="Alterar" />
           <ButtonDestroy  v-on:click="destroyPerson(person.id)"/>
        </td>
    </tr>
</template>
<script>
import ButtonDestroy from '../utils/ButtonDestroy'
import RouterLinkButton from '../utils/RouterLinkButton'
import {booleanParseString} from '../../utils/'
import {PersonActions} from '../../store/actions/Actions'
export default {
    data: () => ({
        route: '',
    }),
    components:{
        ButtonDestroy,
        RouterLinkButton,
    },
    props:{
        person:Object
    },
    methods:{
         parse: function(string){
            return booleanParseString(string);
        },
        setRoute: function (id){
            this.route = `/persons/update/${id}`;
        },
        destroyPerson: async function (id){
           try {
               await this.$store.dispatch({
                   type: PersonActions.DESTROY_PERSON,
                   id
               });
               alert('Membro excluído com sucesso!');
           } catch (error) {
               alert(error);
           }
        },
    },
    created: function(){
        this.setRoute(this._props.person.id);
    }
}
</script>
<style scoped>
     td{
       border: 1px solid #ddd;
       padding: 8px;
    }
</style>