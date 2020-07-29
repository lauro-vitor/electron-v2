import {ipcMain} from 'electron';
import userIpc from './userIpc';
userIpc(ipcMain)

export default ipcMain;