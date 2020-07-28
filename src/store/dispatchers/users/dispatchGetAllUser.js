import actions from '../../actions'
import store from '../../index'

export default async function() {
    try {
        await store.dispatch({
            type:actions.GET_ALL_USERS
        });

   } catch (error) {
       console.log(error)
   }
}