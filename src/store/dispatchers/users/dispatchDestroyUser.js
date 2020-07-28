
import actions from '../../actions'
import store from '../../index'
export default  async function(id){
    try {
        await store.dispatch({
            type:actions.DESTROY_USER,
            id:id,
        });
        console.log('ok')
    } catch (error) {
       console.log('ok')
    }
}