import PersonRepository from '../repository/persons/PersonRepository';
import {PersonActions} from '../../store/actions/Actions';
import responseIpc from './responseIpc';

export default function (ipcMain){
    ipcMain.on(PersonActions.GET_ALL_PERSON, async function (event){
        let response;
        try {
            response = responseIpc(false, await PersonRepository.getAllPersons(), '');
        } catch (error) {
            response = responseIpc(true, null, error);
        }
        event.returnValue = response;
    });

    ipcMain.on(PersonActions.ADD_PERSON, async function (event, person){
        let response;
        try {
            response = responseIpc(false, await PersonRepository.createPerson(person), '');
        } catch (error) {
            response = responseIpc(true, null, error);
        }
        event.returnValue = response;
    });
    ipcMain.on(PersonActions.UPDATE_PERSON, async function(event, person){
        let response;
        try {
            response = responseIpc(false, await PersonRepository.updatePerson(person, person.id), '');
        } catch (error) {
            response = responseIpc(true, null, error);
        }
        event.returnValue = response;
    });
    ipcMain.on(PersonActions.DESTROY_PERSON, async function(event, id){
        let response;
        try {
            await PersonRepository.destroyPerson(id);
            response = responseIpc(false, null, '');
        } catch (error) {
            response = responseIpc(true, null, error);
        }
        event.returnValue = response;
    });
}