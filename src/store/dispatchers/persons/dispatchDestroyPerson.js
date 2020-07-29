import {PersonActions} from '../../actions/Actions'
import store from '../../index'
export default async function (id)  {
    try {
      await store.cache.dispatch({
        type:PersonActions.DESTROY_PERSON,
        id,
      });
    } catch (error) {
      alert(error);
    }
}