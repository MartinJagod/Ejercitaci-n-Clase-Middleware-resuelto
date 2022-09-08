const express = require ('express');
const { route } = require('../app');
const router = express.Router();

const controller = require("../controllers/mainController");
const adminMiddleware = require("../middlerares/admin")

router.get("/", controller.index);
router.get("/admin", adminMiddleware,  controller.admin);

module.exports = router;

