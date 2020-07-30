const getConnection = require('../connectionFactory');
const messageErrorUser = require('./error/messageErrorUser');

const destroyUser = id => {

    return new Promise((resolve, reject) => {
        const connection = getConnection();

        const sql = `DELETE FROM Users WHERE id = ?`;

        connection.connect();

        connection.beginTransaction(error => {

            if (error) {
                reject('ocorreu um erro na transação!');
            }

            connection.query(sql, id, (error, results) => {
                if (error) {
                    return connection.rollback(() => {
                        reject(messageErrorUser(error));
                    });
                   
                }
                if (results.affectedRows == 1) {
                    resolve();
                }
                reject('Error ao excluir usuário');
            });

            connection.commit(error => {
                if (error) {
                    reject('error ao confirmar exclusão!');
                }
            });
            connection.end();
        });
    });
}

module.exports = destroyUser;