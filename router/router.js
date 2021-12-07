const { Router } = require("express");
const controller = require("../controller/controller");

const router = Router();

router.get("/", controller);

//router.get("/about", (request, response) => {});
module.exports = router;
