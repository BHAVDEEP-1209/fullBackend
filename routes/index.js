const router = require('express').Router()


// router.get('/user',(req,res)=>{
//     res.send("testing user route!!!")
// })

router.use('/user',require("./userRoute.js"))

router.get("/",(req,res)=>{
    res.send("Testing route...")
})

module.exports  = router