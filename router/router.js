const { Router } = require("express");
const controller = require("../controller/controller");

const router = Router();

router.get("/", controller.index);

router.get("/weather", controller.weather);
module.exports = router;
