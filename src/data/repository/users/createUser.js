const getConnection = require('../connectionFactory');


const createUser = user => {
    return new Promise((resolve, reject) => {

        const connection = getConnection();

        let sql =
            `INSERT INTO Users(firstName, lastName, email, createdAt,updatedAt) 
            VALUES (?, ?, ?, now(), now())`;

        let inserts = [user.firstName, user.lastName, user.email];

        connection.beginTransaction(error => {

            if (error) {
                return reject(error);
            }
            connection.query(sql, inserts, async (error, results) => {
                if (error) {
                    return connection.rollback(() => {
                        reject(error);
                    });
                }

                if (results.affectedRows == 1) {
                    user.id = results.insertId;
                    resolve(user);
                }
            });

            connection.commit(error => {
                if (error) {
                    connection.rollback(() => {
                        throw error;
                    });
                    reject(error);
                }
            });
            connection.end();
        });
    });
}

module.exports = createUser;