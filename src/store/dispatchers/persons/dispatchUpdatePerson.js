import actions from '../../actions'
import store from '../../index'
export default async function (person){
    try {
      await store.cache.dispatch({
        type: actions.UPDATE_PERSON,
        person
      });
      alert('Membro alterado com sucesso!');
    } catch (error) {
      alert('error', error);
    }
}