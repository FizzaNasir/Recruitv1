const express = require('express');
const authController = require('../controllers/authController');
const testController = require('../controllers/testController');

const router = express.Router();

router.post('/createTest', testController.createTest);
router.get('/getTest/:id', testController.getTest);

module.exports = router;
