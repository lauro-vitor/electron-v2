import {UserActions} from '../../actions/Actions'
import store from '../../index'

export default async function(user) {
    try {
        await store.dispatch({
            type: UserActions.UPDATE_USER,
            user
        });
       console.log('ok')
    } catch (error) {
        console.log(error)
    } 
}