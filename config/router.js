const router = require("express").Router();


router.get("/", uses("controller/HomeController.index"));

// Not Logged
router.use("/login",uses("controller/guard/Auth.isLogged"));
router.get("/login", uses("controller/HomeController.login"));

//is Logged
router.use("/auth/logout",uses("controller/guard/Auth.notLogged"));
router.get("/auth/logout",uses("controller/LogController.logOut"));

// Api

router.post("/api/v1/auth/register", uses("controller/LogController.register"));
router.post("/api/v1/auth/signin", uses("controller/LogController.login"));


module.exports = router;