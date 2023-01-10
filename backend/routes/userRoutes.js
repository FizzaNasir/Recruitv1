const express = require('express');

const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
// router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.post('/verifyEmail', authController.verifyEmail);

// Protect all routes after this middleware
// router.use(authController.protect);

// router.patch('/updateMyPassword', authController.updatePassword);

module.exports = router;
