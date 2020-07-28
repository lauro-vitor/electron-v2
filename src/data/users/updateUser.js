const getConnection = require('../connectionFactory');

const updateUser = async (user, id) => {
    try {
        return await update(user, id);
    } catch (error) {
        return error;
    }
}

const update = (user, id) => {
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
                return reject(error);
            }

            connection.query(sql, inserts, async (error, results) => {
                if(error) {
                    return connection.rollback(() => {
                        reject(error);
                    });
                }
                if(results.changedRows == 1) {
                    resolve(results);
                    return;
                }
                resolve(null);
            });
            connection.commit(error => {
                if(error)
                    return reject(error);
            });

            connection.end();
        });
    });
}

module.exports = updateUser;