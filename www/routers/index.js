import app from "express";
const wwwRouter = app.Router();

// Import Router
const userRouter = require("./user");


wwwRouter.use('/user', userRouter);
module.exports = wwwRouter;
