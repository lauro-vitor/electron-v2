import {UserActions} from '../../actions/Actions'
import store from '../../index'
export default async function(user) {
    try {
        await store.dispatch({
            type: UserActions.ADD_USER,
            user
        });
        console.log('ok')
    } catch (error) {
        console.log(error);
    } 
}