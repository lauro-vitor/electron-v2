

const modulePerson = {

    state: () => ({
        persons: [],
    }),

    mutations: {
        GET_ALL_PERSON(state, payload) {
           state.persons = [... payload.persons];
        },

        ADD_PERSON(state, payload) {
            state.persons = [... state.persons, payload.person];
        },
        UPDATE_PERSON(state, payload) {
            let personUpdated = payload.person;
            let index = state.persons.indexOf(
                state.persons.find(person => person.id == personUpdated.id)
            );
            state.persons[index] = {...personUpdated};
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
       
    },

    getters: {
        getAllPersons: state => state.persons,
        getPersonById: state => id => state.persons.find(person => person.id == id)
    }
}
export default modulePerson;