const express = require('express');
const expressValidator = require('express-validator');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignup);
router.get('/reset', authController.getReset);
router.get('/reset/:token', authController.getNewPassword);
router.post('/login', authController.postLogin);
router.post('/signup', [
    expressValidator.check('email')
        .isEmail()
        .withMessage('Please enter a valid email.'),
    expressValidator.body(
        'password',
        'Please enter a password with only numbers and text, min 5 & max 10 characters.'
    )
        .isLength({ min: 5, max: 10 })
        .isAlphanumeric(),
    expressValidator.body(
        'confirmPassword',
        'The passwords are not equal.'
    )
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords have to match!');
            } else {
                return true;
            }
        })
], authController.postSignup);
router.post('/logout', authController.postLogout);
router.post('/reset', authController.postReset);
router.post('/new-password', authController.postNewPassword);


module.exports = router;