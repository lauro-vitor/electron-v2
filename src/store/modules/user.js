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
            console.log('state', state);
            console.log('payload', payload);
            
            let index = state.users.indexOf(
                state.users.find(user => user.id == payload.id)
            );
            console.log(index);
            /*console.log(state.users[index]);
            if (index >= 0) {
                state.users.splice(index, 1);
            }*/
            //console.log('in destroy user mutations ', state.users[index]);
        }

    },
    actions: {
        GET_ALL_USERS({ commit }) {
            return new Promise((resolve, reject) => {
                let response, users;
                try {
                    response = ipcRenderer.sendSync(UserActions.GET_ALL_USERS);
                } catch (error) {
                    reject(error);
                }
                if (!response.error) {
                    users = response.data;
                    commit({
                        type: UserMutations.GET_ALL_USERS,
                        users
                    });
                    resolve(users);
                }
                reject(response.message)
            });
        },
        ADD_USER({ commit }, payload) {
            return new Promise((resolve, reject) => {
                let result;
                try {
                    result = ipcRenderer.sendSync(UserActions.ADD_USER, payload.user);
                } catch (error) {
                    reject(error);
                }
                if (!result.error) {
                    commit({
                        type: UserMutations.ADD_USER,
                        user: result.data
                    });
                    resolve();
                }
                reject(result.message);
            });
        },
        UPDATE_USER({ commit }, payload) {
            return new Promise(function (resolve, reject) {
                let result;
                try {
                    result = ipcRenderer.sendSync(UserActions.UPDATE_USER, payload.user);
                } catch (error) {
                    reject(error);
                }
                if(!result.error) {
                    commit({
                        type: UserMutations.UPDATE_USER,
                        user: result.data,
                    });
                    resolve();
                }
                reject(result.message);
            });
        },
        DESTROY_USER({commit}, payload) {
            return new Promise(function(resolve, reject) {
                let result;
                try {
                    result = ipcRenderer.sendSync(UserActions.DESTROY_USER, payload.id);
                } catch (error) {
                    reject(error)
                }
                if(!result.error){
                    commit({
                        type: UserMutations.DESTROY_USER,
                        id: payload.id
                    });
                    resolve();
                }
                reject(result.message)
                console.log('result ', result);
            })
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