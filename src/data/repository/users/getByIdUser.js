const getConnection = require('../connectionFactory');
const messageErrorUser = require('./error/messageErrorUser');
const getByIdUser = id => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const sql = 'SELECT * FROM Users WHERE id = ?';
        
        connection.connect();

        connection.query(sql, id, (error, results) => {
            if(error) {
              reject(messageErrorUser(error));
            }
            if(results.length > 0) {
                resolve(results);
            }
            reject(`usuário de id=${id} não registrado!`);
        });

        connection.end();
    });
}


module.exports = getByIdUser;