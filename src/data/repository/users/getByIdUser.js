const getConnection = require('../connectionFactory');

const getByIdUser = id => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const sql = 'SELECT * FROM Users WHERE id = ?';
        
        connection.connect();

        connection.query(sql, id, (error, results) => {
            
            if(error) {
                return reject(error);
            }

            if(results.length > 0) {
                resolve(results);
                return;
            }
            
            resolve(null);
        });

        connection.end();
    });
}


module.exports = getByIdUser;