import actions from '../../actions'
import store from '../../index'

export default async function(user) {
    try {
        await store.dispatch({
            type: actions.UPDATE_USER,
            user
        });
       console.log('ok')
    } catch (error) {
        console.log(error)
    } 
}