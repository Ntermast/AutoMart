const express = require("express");
const router = express.Router();

const Logged = express.Router();
const  NotLogged = express.Router();

router.get("/", uses("controller/HomeController.index"));

NotLogged.use(uses("controller/guard/Auth.isLogged"));
NotLogged.get("/login", uses("controller/HomeController.login"));


router.post("/api/v1/register", uses("controller/LogController.register"));
router.post("/api/v1/auth/signin", uses("controller/LogController.login"));

router.use(Logged);
router.use(NotLogged);

module.exports = router;