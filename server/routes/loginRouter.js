const router = require('express').Router();
const {loginControllerPost} = require('../contorllers/loginController');

router.post('/',loginControllerPost);

module.exports = router;