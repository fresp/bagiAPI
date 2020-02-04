// controller
const video = require('../controllers').videoController

const {Router} = require('express');
const router = Router();
const Multer = require('../../middlewares/multer')
const isAuth = require("../../middlewares/is-auth")


router.post("/getAll", isAuth, video.getAll);
router.post("/getDetail", isAuth, video.getDetail);

module.exports = router;
