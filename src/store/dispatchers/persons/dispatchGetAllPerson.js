import {PersonActions} from '../../actions/Actions'
import store from '../../index'

export default async function (){
    try {
        await store.cache.dispatch({type:PersonActions.GET_ALL_PERSON});
    } catch (error) {
        alert(error);
    }
}
