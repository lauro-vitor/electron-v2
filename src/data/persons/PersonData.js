const getByIdPerson = require('./getByIdPerson');
const getAllPersons = require('./getAllPersons');
const createPerson = require('./createPerson');
const updatePerson = require('./updatePerson');
const destroyPerson = require('./destroyPerson');

const PersonData  = {
    getByIdPerson,
    getAllPersons,
    createPerson,
    updatePerson,
    destroyPerson
};

module.exports = PersonData;