const getConnection = require('../connectionFactory');
const hasOne = require('./relations/hasOne');

const getAllPersons = async () => {
    try {
        return await getAll();
    } catch (error) {
        return error;
    }
}
const getAll = () => {

    return new Promise((resolve, reject) => {

        const connection =  getConnection();

        const sql = `
            SELECT
                p.id, 
                p.name, 
                p.isBetaMember, 
                p.userId, 
                p.createdAt as pCreatedAt, 
                p.updatedAt as pUpdatedAt,
                u.firstName,
                u.lastName,
                u.email,
                u.createdAt as uCreatedAt,
                u.updatedAt as uUpdatedAt
            FROM Persons as p
            JOIN Users as u
            ON p.userId = u.id`;

        let personsWithRelations = [];
        
        connection.connect();

        connection.query(sql,  (error, results) => {

            if(error) {
                return reject(error);
            }

            if(results.length > 0) {

                results.map(result => {
                    let person = hasOne(result);
                    personsWithRelations.push(person);
                });

                resolve(personsWithRelations);
                return;
            }
            resolve(results);
        });
        
        connection.end();

    });
}

module.exports = getAllPersons;