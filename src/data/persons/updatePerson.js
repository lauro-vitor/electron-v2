const getConnection = require('../connectionFactory');

const updatePerson = async (person, id) => {
    try {
        return await update(person, id);
    } catch (error) {
        return error;
    }
}

const update = (person, id) => {

    return new Promise((resolve, reject) => {
        const connection = getConnection();
        const sql = `
            UPDATE Persons
            SET name = ?, isBetaMember = ?, userId = ?, updatedAt = now()
            WHERE id = ?
        `;
        const inserts = [
            person.name,
            person.isBetaMember,
            person.userId,
            id
        ];

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

                if (results.changedRows == 1) {
                    resolve(results);
                }

            });

            connection.commit(error => {
                if (error) {
                    return connection.rollback(() => {
                        reject(error);
                    });
                }
            });
            connection.end();
        });
    });
}

module.exports = updatePerson;