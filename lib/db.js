const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'test-db.cf0xfzqncrkl.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'rlaclgh1!',
    database: 'test_db',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = {
    query: async (text, params) => {
        const [rows] = await pool.execute(text, params);
        return rows;
    },
};
