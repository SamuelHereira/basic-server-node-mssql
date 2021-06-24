const getConnection = require('../database/connection');

const getUserById = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM users');
    return res.json(result);
  } catch (error) {
    console.error(error);
  }
};

const createNewUser = async (req, res) => {
  const { name, last_name, email, phone_number } = req.body;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input('name', name)
    .input('last_name', last_name)
    .input('email', email)
    .input('phone_number', phone_number)
    .query(
      'INSERT INTO users (name, last_name, email, phone_number) VALUES (@name, @last_name, @email, @phone_number)'
    );
};

module.exports = {
  getUserById,
  createNewUser,
};
