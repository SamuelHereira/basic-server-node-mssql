const {
  getUserById,
  createNewUser,
} = require('../controllers/users.controller');

const router = require('express').Router();

router.get('/', getUserById);
router.post('/', createNewUser);

module.exports = router;
