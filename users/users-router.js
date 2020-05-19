const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const restrict = require('../auth/authenticate-middleware')
const Users = require('../auth/auth-model')


router.get('/', restrict(), async (req, res, next) => {
    console.log('getting here?')
    console.log(Users)
 try{
        res.json(await Users.find())
 }
 catch(err){
    next(err)
 }
});


module.exports = router;
