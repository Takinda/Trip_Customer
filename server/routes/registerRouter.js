const router = require('express').Router();
const {registerControllerPost} = require("../contorllers/registerController");

router.post('/', registerControllerPost);


module.exports = router;