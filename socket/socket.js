"use strict";
// Model
const LikeService = require('../www/models').likeService;
const DislikeService = require('../www/models').dislikeService;
const CommentService = require('../www/models').commentService;

//utility
const moment = require('moment')
const utility = require('../helpers/utility');
const env = process.env.NODE_ENV || "development";



require("dotenv").config;

class IO {

  static async ioEvents(io){
   
    io.set("transports", ["websocket"]);

    const wwwNs = io.of('/www');
 

    wwwNs.on("connection", function(socket) {
      console.log('connect web socket');
      socket.on("join", async (data) => {
        // console.log("Socket videoId :" + data.videoId);
        socket.join(data.videoId); // We are using room of socket io
        const resData = {
          like :  await LikeService.countData(data.videoId)
          , dislike :  await DislikeService.countData(data.videoId)
          , comment_list : await CommentService.getData(data.videoId)
        }
        wwwNs.to(data.videoId).emit("join", resData);
      });
  
      socket.on("like",  async (data) => {
        // Push Database
        console.log("Socket Like", data);
        
        let response = {};
        if(data.status==true){
          response.counter = +1;
          const query = {
            id : utility.generateHash(32)
            , videoId : data.videoId
            , createAt : moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
          }
          await LikeService.insertData(query);
          response.likeId = query.id;
        } else {
          await LikeService.deleteData(data.likeId);
          response.counter = -1;
        }

        wwwNs.to(data.videoId).emit("like", response);
      });

      socket.on("disliked",  async (data) => {
        // Push Database
        console.log("Socket disliked", data);
       
        let response = {};
        if(data.status==true){
          response.counter = +1;
          const query = {
            id : utility.generateHash(32)
            , videoId : data.videoId
            , createAt : moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
          }
          await DislikeService.insertData(query);
          response.dislikeId = query.id;
        } else {
          await DislikeService.deleteData(data.dislikeId);
          response.counter = -1;
        }

        wwwNs.to(data.videoId).emit("disliked", response);
      });

      socket.on("comment",  async (data, callback) => {
        // Push Database
        callback("hello");
        console.log("Socket comment", data);
       
        const query = {
          id : utility.generateHash(32)
          , videoId  : data.videoId
          , name     : data.writter
          , content  : data.content
          , createAt : moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        }
        const comment = await CommentService.insertData(query);
        wwwNs.to(data.videoId).emit("comment", query);
      });

      
    });
  };  
}
module.exports = IO;
