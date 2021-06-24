const sql = require('mssql');

const dbSettings = {
  user: 'samuel',
  password: 'samuelpwd',
  server: 'localhost',
  database: 'webstore',
  options: {
    trustServerCertificate: true,
  },
};

const getConnection = async () => {
  const pool = new sql.ConnectionPool(dbSettings);
  await pool.connect();

  return pool;
};

module.exports = getConnection;
