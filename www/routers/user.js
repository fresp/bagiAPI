// controller
const user = require('../controllers').userController

const {Router} = require('express');
const router = Router();
const Multer = require('../../middlewares/multer')

/* Old Routing 
router.post("/addRoom",message.addRoom);
router.delete("/group",message.deleteGroup)
 */
// router.post("/leave", message.leaveGroup)
// router.post("/addRoom", room.addRoom);
// router.post("/addAdmin", room.addAdmin);
// router.post("/getMessage", message.getMessageList);
// router.post("/upload", Multer.single('file'), message.upload);
// router.get("/download", message.download);
// router.post("/getList", room.getList);
// router.post("/getRoomData", room.getRoomData);
// router.post("/getParticipantList", room.getAllUsersInRoom);
// router.post("/addGroup", room.addGroup)
// router.post("/addInterest", room.addInterest)
// router.post("/information",room.groupInformation)
// router.post("/leave", room.leaveGroup)
// router.put("/changeImg", room.changeImgGroup)
// router.put("/", room.updateData)
// router.put("/mute", room.muteRoom)
// router.post("/getNewestRoom", room.getNewest);
// router.post("/getRangeMessage", message.getRange);

router.post("/signup", user.signup);



module.exports = router;
