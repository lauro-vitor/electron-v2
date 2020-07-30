const { ipcRenderer } = window.require('electron');
import { PersonActions } from '../actions/Actions';
import PersonMutations from '../mutations/PersonMutations';

const modulePerson = {

    state: () => ({
        persons: [],
    }),

    mutations: {
        GET_ALL_PERSON(state, payload) {
            state.persons = [...payload.persons];
            state.persons.sort(function(a,b){
                return a.id - b.id;
            })
        },

        ADD_PERSON(state, payload) {
            state.persons = [...state.persons, payload.person];
        },
        UPDATE_PERSON(state, payload) {
            let personUpdated = payload.person;
            let index = state.persons.indexOf(
                state.persons.find(person => person.id == personUpdated.id)
            );
            state.persons[index] = { ...personUpdated };
        },
        DESTROY_PERSON(state, payload) {
            let index = state.persons.indexOf(
                state.persons.find(person => person.id == payload.id)
            );
            if (index >= 0) {
                state.persons.splice(index, 1);
            }
        }
    },

    actions: {
        GET_ALL_PERSON({ commit }) {
            return new Promise(function (resolve, reject) {
                let response;
                try {
                    response = ipcRenderer.sendSync(PersonActions.GET_ALL_PERSON);
                    if (!response.error) {
                        commit({
                            type: PersonMutations.GET_ALL_PERSON,
                            persons: response.data
                        });
                        resolve();
                    }
                    reject(response.message);
                } catch (error) {
                    reject(error);
                }
            });
        },
        ADD_PERSON({ commit }, payload) {
            return new Promise(function (resolve, reject) {
                let response;
                try {
                    response = ipcRenderer.sendSync(PersonActions.ADD_PERSON, payload.person);
                    if (!response.error) {
                        commit({
                            type: PersonMutations.ADD_PERSON,
                            person: response.data
                        });
                        resolve();
                    }
                    reject(response.message)
                } catch (error) {
                    reject(error);
                }
            });
        },
        UPDATE_PERSON({ commit }, payload) {
            return new Promise(function (resolve, reject) {
                let response;
                try {
                    response = ipcRenderer.sendSync(PersonActions.UPDATE_PERSON, payload.person);
                    if (!response.error) {
                        commit({
                            type: PersonMutations.UPDATE_PERSON,
                            person: payload.person
                        });
                        resolve();
                    }
                    reject(response.message);
                } catch (error) {
                    reject(error);
                }
            });
        },
        DESTROY_PERSON({ commit }, payload) {
            return new Promise(function (resolve, reject) {
                let response;
                try {
                    response = ipcRenderer.sendSync(PersonActions.DESTROY_PERSON, payload.id);
                    if (!response.error) {
                        commit({
                            type: PersonMutations.DESTROY_PERSON,
                            id: payload.id
                        });
                        resolve();
                    }
                    reject(response.message);
                } catch (error) {
                    reject(error);
                }
            });
        }
    },

    getters: {
        getAllPersons: state => state.persons,
        getPersonById: state => id => state.persons.find(person => person.id == id)
    }
}
export default modulePerson;