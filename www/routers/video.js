// controller
const video = require('../controllers').videoController

const {Router} = require('express');
const router = Router();
const Multer = require('../../middlewares/multer')

router.post("/getAll", video.getAll);

module.exports = router;
