const getConnection = require('../connectionFactory');
const messageErrorUser = require('./error/messageErrorUser');

const updateUser = (user, id) => {
    return new Promise((resolve,  reject) => {

        const connection = getConnection();

        const sql = 
            `UPDATE Users 
             SET 
                firstName = ?, 
                lastName = ?,
                email = ?,
                updatedAt = now()
            WHERE id = ?`;

        const inserts = [
            user.firstName,
            user.lastName,
            user.email,
            id
        ];

        connection.beginTransaction(error => {
            if(error) {
                reject('error ao iniciar trasanção na base de dados!');
            }

            connection.query(sql, inserts, async (error, results) => {
                if(error) {
                    return connection.rollback(() => {
                        reject(messageErrorUser(error));
                    });
                }
                if(results.changedRows == 1) {
                    resolve(user);
                }
                reject('usuário não atualizado!');
            });
            connection.commit(error => {
                if(error) {
                    reject('error ao confirmar trasação na base de dados, usuário não atualizado!');
                }
            });

            connection.end();
        });
    });
}

module.exports = updateUser;