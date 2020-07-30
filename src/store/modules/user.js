const { ipcRenderer } = window.require('electron');
import { UserActions } from '../actions/Actions';
import UserMutations from '../mutations/UserMutations';

const moduleUser = {

    state: () => ({
        users: []
    }),
    mutations: {
        GET_ALL_USERS(state, payload) {
            state.users = [...payload.users];
            state.users.sort(function(a,b){
                return a.id - b.id;
            })
        },
        ADD_USER(state, payload) {
            state.users = [...state.users, payload.user];
        },

        UPDATE_USER(state, payload) {
            let userUpdated = payload.user;
            let index = state.users.indexOf(
                state.users.find(user => user.id == userUpdated.id)
            );
            state.users[index] = { ...userUpdated };
        },

        DESTROY_USER(state, payload) {

            let index = state.users.indexOf(
                state.users.find(user => user.id == payload.id)
            );
            if (index >= 0) {
                state.users.splice(index, 1);
            }
        }

    },
    actions: {
        GET_ALL_USERS({ commit }) {
            return new Promise((resolve, reject) => {
                let response, users;
                try {
                    response = ipcRenderer.sendSync(UserActions.GET_ALL_USERS);
                    if (!response.error) {
                        users = response.data;
                        commit({
                            type: UserMutations.GET_ALL_USERS,
                            users
                        });
                        resolve();
                    }
                    reject(response.message)
                } catch (error) {
                    reject(error);
                }
            });
        },
        ADD_USER({ commit }, payload) {
            return new Promise((resolve, reject) => {
                let result;
                try {
                    result = ipcRenderer.sendSync(UserActions.ADD_USER, payload.user);
                    if (!result.error) {
                        commit({
                            type: UserMutations.ADD_USER,
                            user: result.data
                        });
                        resolve();
                    }
                    reject(result.message);
                } catch (error) {
                    reject(error);
                }
            });
        },
        UPDATE_USER({ commit }, payload) {
            return new Promise(function (resolve, reject) {
                let result;
                try {
                    result = ipcRenderer.sendSync(UserActions.UPDATE_USER, payload.user);
                    if (!result.error) {
                        commit({
                            type: UserMutations.UPDATE_USER,
                            user: result.data,
                        });
                        resolve();
                    }
                    reject(result.message);
                } catch (error) {
                    reject(error);
                }
            });
        },
        DESTROY_USER({ commit }, payload) {
            return new Promise(function (resolve, reject) {
                let result;
                try {
                    result = ipcRenderer.sendSync(UserActions.DESTROY_USER, payload.id);
                    if (!result.error) {
                        commit({
                            type: UserMutations.DESTROY_USER,
                            id: payload.id
                        });
                        resolve();
                    }
                    reject(result.message)
                } catch (error) {
                    reject(error);
                }
            });
        }
    },
    getters: {
        getUsers: state => state.users,
        getUserById: state => id => {
            return state.users.find(user => user.id === id);
        },
    }
}

export default moduleUser;