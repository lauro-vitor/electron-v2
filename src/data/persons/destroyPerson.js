
const getConnection = require('../connectionFactory');

const destroyPerson = async id => {
    try {
        return await destroy(id);
    } catch (error) {
        return error;
    }
}

const destroy = id => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const sql = `DELETE FROM Persons WHERE id =  ?`;

        connection.connect();

        connection.beginTransaction(error => {

            if(error) {
                return reject(error);
            }

            connection.query(sql, id, (error, results) => {
                if(error) {
                   return connection.rollback( () => {
                        reject(error);
                   });
                }

                if(results.affectedRows == 1) {
                    resolve(results);
                    return;
                } 
                resolve(results);
            });

            connection.commit(error =>{
                if(error) {
                    return reject(error);
                }
            });

            connection.end();
        });
    });
}


module.exports = destroyPerson;