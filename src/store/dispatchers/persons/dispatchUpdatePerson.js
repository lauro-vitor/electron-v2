import {PersonActions} from '../../actions/Actions'
import store from '../../index'
export default async function (person){
    try {
      await store.cache.dispatch({
        type: PersonActions.UPDATE_PERSON,
        person
      });
      alert('Membro alterado com sucesso!');
    } catch (error) {
      alert('error', error);
    }
}