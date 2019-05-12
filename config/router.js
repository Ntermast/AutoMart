const router = require("express").Router();


router.get("/", uses("controller/HomeController.index"));

// Not Logged
router.use("/login",uses("controller/guard/Auth.isLogged"));
router.get("/login", uses("controller/HomeController.login"));

//is Logged
router.use("/auth/logout",uses("controller/guard/Auth.notLogged"));
router.get("/auth/logout",uses("controller/LogController.logOut"));

router.get("/news",uses("controller/HomeController.newCar"));

router.get("/dealers",uses("controller/HomeController.dealers"));

router.get("/post_ad",uses("controller/HomeController.post_ad"));

router.get("/request_car",uses("controller/HomeController.request_car"));

router.get("/trade_in",uses("controller/HomeController.trade_in"));

router.get("/get_alert",uses("controller/HomeController.get_alert"));
// Api

router.post("/api/v1/auth/register", uses("controller/LogController.register"));
router.post("/api/v1/auth/signin", uses("controller/LogController.login"));



module.exports = router;