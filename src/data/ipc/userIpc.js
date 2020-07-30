import UserRepository from '../repository/users/UserRepository';
import { UserActions } from '../../store/actions/Actions';
import responseIpc from './responseIpc';

export default function (ipcMain) {
    ipcMain.on(UserActions.GET_ALL_USERS, async function (event) {
        let response;
        try {
            response = responseIpc(false, await UserRepository.getAllUsers(), null);
        } catch (error) {
            response = responseIpc(true, null, error);
        }
        event.returnValue = response;
    });

    ipcMain.on(UserActions.ADD_USER, async function (event, user) {
        let response;
        try {
            response = responseIpc(false, await UserRepository.createUser(user), null)
        } catch (error) {
            response = responseIpc(true, null, error);
        }
        event.returnValue = response;
    });

    ipcMain.on(UserActions.UPDATE_USER, async function (event, user) {
        let response;
        try {
            response = responseIpc(false, await UserRepository.updateUser(user, user.id), null);
        } catch (error) {
            response = responseIpc(true, null, error);
        }
        event.returnValue = response;
    });

    ipcMain.on(UserActions.DESTROY_USER, async function (event, id) {
        let response;
        try {
            response = responseIpc(false, await UserRepository.destroyUser(id), null);
        } catch (error) {
            response = responseIpc(true, null, error);
        }
        event.returnValue = response;
    });
}
    
