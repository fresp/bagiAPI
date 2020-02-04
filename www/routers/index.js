import app from "express";
const wwwRouter = app.Router();

// Import Router
const userRouter = require("./user");
const videoRouter = require("./video");


wwwRouter.use('/video', videoRouter);
wwwRouter.use('/user', userRouter);
module.exports = wwwRouter;
