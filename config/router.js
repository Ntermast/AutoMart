const express = require("express");
const router = express.Router();

router.get("/",function(req,res){
    res.render("index",{titre:"Salut tous le monde"});
});


module.exports = router;