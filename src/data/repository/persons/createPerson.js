const getConnection = require('../connectionFactory');
const messageErrorPerson = require('./error/messageErrorPerson');

const createPerson = person => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const sql =
            `INSERT INTO 
            Persons (name, isBetaMember, userId, createdAt, updatedAt )
            VALUES (?, ?, ?, now(), now())`;

        const inserts = [person.name, person.isBetaMember, person.userId];


        connection.connect();

        connection.beginTransaction(error => {
            if (error) {
                reject('Erro ao iniciar transação no banco de dados!');
            }

            connection.query(sql, inserts, async (error, results) => {

                if (error) {
                    return connection.rollback(() => {
                        reject(messageErrorPerson(error));
                    });
                }
                if (results.affectedRows == 1) {
                    person.id = results.insertId;
                    resolve(person)
                }
            });
            connection.commit(error => {

                if (error) {
                    connection.rollback(() => {
                        reject('error ao confirmar a transação!');
                    });
                }

            });

            connection.end();
        });
    });
}

module.exports = createPerson;