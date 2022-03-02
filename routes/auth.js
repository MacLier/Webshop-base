const express = require('express');
const expressValidator = require('express-validator');
const User = require('../models/user');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignup);
router.get('/reset', authController.getReset);
router.get('/reset/:token', authController.getNewPassword);
router.post('/login', [
    expressValidator
        .body('email')
        .isEmail()
        .withMessage('Please enter a valid email.'),
    expressValidator
        .body('password', 'Please enter a password with only numbers and text, min 5 & max 10 characters.')
        .isLength({ min: 5, max: 10 })
        .isAlphanumeric()
], authController.postLogin);
router.post('/signup', [
    expressValidator.check('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value, { req }) => {
            return User.findOne({ email: value }).then(userDoc => {
                if (userDoc) {
                    return Promise.reject('Email exist already, please pick a different one.');
                }
            });
        }),
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