import UserRepository from '../repository/users/UserRepository';
import {UserActions} from '../../store/actions/Actions'
export default function (ipcMain){
    ipcMain.on(UserActions.GET_ALL_USERS, async function (event) {
        try {
            event.returnValue = await UserRepository.getAllUsers();
        } catch (error) {
            event.returnValue = error;
        }
    });

}