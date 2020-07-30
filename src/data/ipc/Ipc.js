import {ipcMain} from 'electron';
import userIpc from './userIpc';
import personIpc from './personIpc'
userIpc(ipcMain);
personIpc(ipcMain);
export default ipcMain;