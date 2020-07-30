const getConnection = require('../connectionFactory');
const messageErrorPerson = require('./error/messageErrorPerson')

const updatePerson = (person, id) => {

    return new Promise((resolve, reject) => {
        const connection = getConnection();
        const sql = `
            UPDATE Persons
            SET name = ?, isBetaMember = ?, userId = ?, updatedAt = now()
            WHERE id = ?
        `;
        const inserts = [
            person.name,
            person.isBetaMember,
            person.userId,
            id
        ];

        connection.beginTransaction(error => {
            if (error) {
                reject('Error ao iniciar transação!');
            }

            connection.query(sql, inserts, (error, results) => {
                if (error) {
                    return connection.rollback(() => {
                        reject(messageErrorPerson(error));
                    });
                }

                if (results.changedRows == 1) {
                    resolve(person);
                }
                reject('Membro não atualizado!');
            });

            connection.commit(error => {
                if (error) {
                    connection.rollback(() => {
                        reject('error ao confirmar transação!');
                    });
                }
            });
            connection.end();
        });
    });
}

module.exports = updatePerson;