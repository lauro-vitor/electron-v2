const getConnection = require('../connectionFactory');

const getAllUser = async () => {
  try {
    return await getAll();
  } catch (error) {
    return error;
  }
}

const getAll = () => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        let sql = 'SELECT * FROM Users';

        connection.connect();

        connection.query(sql, (error, results) => {

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

module.exports = getAllUser;