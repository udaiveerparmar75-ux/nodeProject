const mysqlConnection = require('mysql2');

const pool = mysqlConnection.createPool({
    host: 'localhost',
    user: 'platform',
    password: 'platform',
    database: 'crm_poc', // You can change this to your preferred database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//get promise based connection

const promisePool = pool.promise();

const connectToMysql = async () => {
    try {
        const connection = await promisePool.getConnection();
        console.log('Connected to MySQL database');
        connection.release();
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
    }
};
module.exports = {pool: promisePool, connect: connectToMysql};


