const express = require("express");
const router = express.Router();

router.get("/",uses("controller/HomeController.index"));

router.get("/login",uses("controller/HomeController.login"));

router.post("/api/v1/register", uses("controller/LogController.register"));

router.post("/api/v1/auth/signin", uses("controller/LogController.login"));

module.exports = router;