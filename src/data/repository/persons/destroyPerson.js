
const getConnection = require('../connectionFactory');
const messageErrorPerson = require('./error/messageErrorPerson');

const destroyPerson = id => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const sql = `DELETE FROM Persons WHERE id =  ?`;

        connection.connect();

        connection.beginTransaction(error => {

            if(error) {
               reject('error ao iniciar transação!');
            }

            connection.query(sql, id, (error, results) => {
                if(error) {
                   return connection.rollback( () => {
                        reject(messageErrorPerson(error));
                   });
                }

                if(results.affectedRows == 1) {
                    resolve();
                } 
                reject('usuário não existe para ser excluído!');
            });

            connection.commit(error =>{
                if(error) {
                  reject('error ao confirmar a transação!');
                }
            });

            connection.end();
        });
    });
}


module.exports = destroyPerson;