const {ipcRenderer} = window.require('electron');

//const main = remote.require('./background');


//import mutations from '../mutations';
const moduleUser = {

    state: () => ({
        users: []
    }),
    mutations: {
        GET_ALL_USERS(state, payload) {
            state.users = [...payload.data.users]
        },
        ADD_USER(state, payload) {
            let { user } = payload.data;
            let newUser = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
            state.users = [...state.users, newUser];
        },

        UPDATE_USER(state, payload) {
            let userUpdated = payload.data.user;
            let index = state.users.indexOf(
                state.users.find(user => user.id == userUpdated.id)
            );
            state.users[index] = {...userUpdated};
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
       GET_ALL_USERS(){
           return new Promise((resolve, reject) => {
               console.log(ipcRenderer.sendSync('synchronous-message', 'sync ping'));
               
               let i = 10;
               if(i < 20){
                   
                   resolve();
                   return;
               }
               reject();
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