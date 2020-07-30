const getConnection = require('../connectionFactory');
const messageErrorUser = require('./error/messageErrorUser');

const createUser = user => {
    return new Promise((resolve, reject) => {

        const connection = getConnection();

        let sql =
            `INSERT INTO Users(firstName, lastName, email, createdAt,updatedAt) 
            VALUES (?, ?, ?, now(), now())`;

        let inserts = [user.firstName, user.lastName, user.email];

        connection.beginTransaction(error => {

            if (error) {
                reject('error ao inciar transação na base de dados');
            }
            connection.query(sql, inserts, async (error, results) => {
                if (error) {
                    return connection.rollback(() => {
                        reject(messageErrorUser(error));
                    });
                }

                if (results.affectedRows == 1) {
                    user.id = results.insertId;
                    resolve(user);
                }
                reject('Não foi possível inserir usuário, tente novamente!');
            });

            connection.commit(error => {
                if (error) {
                    connection.rollback(() => {
                        reject('error ao confirmar transação na base de dados!');
                    });
                }
            });
            connection.end();
        });
    });
}

module.exports = createUser;