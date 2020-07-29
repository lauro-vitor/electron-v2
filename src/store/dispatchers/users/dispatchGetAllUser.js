import {UserActions} from '../../actions/Actions'
import store from '../../index'

export default async function() {
    try {
        await store.dispatch({
            type:UserActions.GET_ALL_USERS
        });

   } catch (error) {
       console.log(error)
   }
}