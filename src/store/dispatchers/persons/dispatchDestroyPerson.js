import actions from '../../actions'
import store from '../../index'
export default async function (id)  {
    try {
      await store.cache.dispatch({
        type:actions.DESTROY_PERSON,
        id,
      });
    } catch (error) {
      alert(error);
    }
}