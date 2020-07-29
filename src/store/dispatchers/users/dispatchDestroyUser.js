
import {UserActions} from '../../actions/Actions'
import store from '../../index'
export default  async function(id){
    try {
        await store.dispatch({
            type:UserActions.DESTROY_USER,
            id:id,
        });
        console.log('ok')
    } catch (error) {
       console.log('ok')
    }
}