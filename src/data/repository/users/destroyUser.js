const getConnection = require('../connectionFactory');

const destroyUser = id => {

    return new Promise((resolve, reject) => {
       const connection = getConnection();

       const sql = `DELETE FROM Users WHERE id = ?`;

       connection.connect();

       connection.beginTransaction(error => {
           
           if(error){
                return reject(error);
           }

           connection.query(sql, id, (error, results) => {
                if(error) {
                    return connection.rollback(() => {
                       reject(error);
                    });
                }
                if (results.affectedRows == 1) {
                    resolve(results);
                    return;
                }
                resolve(null);
            });

            connection.commit(error  => {
                if(error) {
                    return reject(error);
                }
            });
            connection.end();
       });
    });
}

module.exports = destroyUser;