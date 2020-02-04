const multer = require("multer");



    // storage Multer
   const storage =  multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "./upload/images");
      },
      filename: (req, file, cb) => {
        console.log(file);
        var filetype = "";
        if (file.mimetype === "image/gif") {
          filetype = "gif";
        }
        if (file.mimetype === "image/png") {
          filetype = "png";
        }
        if (file.mimetype === "image/jpeg") {
          filetype = "jpg";
        }
        cb(null, "image-" + Date.now() + "." + filetype);
      }
    });

// const maxSize = 1024 *  10 
const upload = multer({ storage: storage, 
  // limits: {fileSize: maxSize}
 });





module.exports = upload