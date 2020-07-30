const getConnection = require('../connectionFactory');
const messageErrorUser = require('./error/messageErrorUser')
const getAllUser = () => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        let sql = 'SELECT * FROM Users';

        connection.connect();

        connection.query(sql, (error, results) => {
            if (error) {
                reject(messageErrorUser(error));
            }
            if (results.length > 0) {
                resolve(results);
            }
            reject('não existe usuários registrados!');
        });

        connection.end();
    });
}

module.exports = getAllUser;