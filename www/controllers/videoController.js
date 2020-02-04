'use strict'
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Model
const videoService = require('../models').videoService;

// Util
const Response = require('../../helpers/response');
const utility = require('../../helpers/utility');
const response = new Response();
const _ = require("lodash");
const formidable = require('formidable')
const path = require('path');
let appDir =  path.join(__dirname, '../..');
let pathDir = appDir + '/upload/groups/'



class videoController {

    static async getAll(req, res) {
        try {
          const allVideo = await videoService.getAll();
          if (allVideo.length > 0) {
            response.setSuccess(200, "Found Video", allVideo);
          } else {
            response.setSuccess(404, "Video not found", allVideo );
          }
          return response.send(res);
        } catch (error) {
          response.setError(400, error.message);
          return response.send(res);
        }
    }
}

module.exports = videoController;
