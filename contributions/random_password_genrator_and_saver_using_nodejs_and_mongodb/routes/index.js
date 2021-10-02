const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/controller');

router.get('/',controller.index);
router.get('/addnew',passport.checkAuthentication ,controller.newpassowrd);
router.post('/genrate',passport.checkAuthentication ,controller.genraterandom);
router.post('/create',controller.create);
router.get('/profile',passport.checkAuthentication ,controller.profile);
router.get('/signup',controller.signup);
router.get('/sign-in',controller.signin);
router.post('/createuser',controller.createuser);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/sign-in'},
), controller.createSession);
router.get('/sign-out', controller.destroySession);
module.exports = router;