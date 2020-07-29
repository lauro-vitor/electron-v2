import {PersonActions} from '../../actions/Actions'
import store from '../../index'

export default async function (person) {
    try {
        await store.cache.dispatch({
            type: PersonActions.ADD_PERSON,
            person
        });
        alert('Membro adicionado com sucesso!');
    } catch (error) {
        alert('error', error);
    }
}