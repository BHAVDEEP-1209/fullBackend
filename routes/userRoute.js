const router = require('express').Router()
const {userController} = require("../controllers");

router.get("/",userController.get_hello)


module.exports  = router