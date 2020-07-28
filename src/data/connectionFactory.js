const mysql = require('mysql');

const getConnection = () =>{
    return (
        mysql.createConnection({
            host: 'localhost',
            user: 'user',
            password: 'user',
            database: 'sequelize'
        })
    );
}
module.exports = getConnection;