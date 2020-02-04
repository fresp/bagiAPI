'use strict'
import moment from "moment";
// Model
const Users = require('../models').userService;

// Util
const Response = require('../../helpers/response');
const utility = require('../../helpers/utility');
const response = new Response();
const _ = require("lodash");
const formidable = require('formidable')
const path = require('path');
let appDir =  path.join(__dirname, '../..');
let pathDir = appDir + '/upload/groups/'


class roomController {

  static async signup(req, res){
    try {
        const {
            name
            , email
            , password
        } = req.body;

        const middleware = {
          name  : `required|text|${name}`
          , email  : `required|text|${email}`
          , password  : `required|text|${password}`
        }

        if (utility.validateRequest(middleware)) {
            console.log(middleware);
            // return false;
            const _checkEmail = await Users.checkedmail(email);
            if(!utility.issetVal(_checkEmail)){
                // const password =  await Users.genereteHash(password);
                const newUser = {
                    id: utility.generateHash(32),
                    name: name,
                    email: email,
                    password: password
                };
                console.log(newUser)

                const createUser = await Users.signup(newUser);
                response.setSuccess(201, "User Added!", createUser);
                return response.send(res);
            } else {
                response.setSuccess(402, "Account Already Exist");
                return response.send(res);
            }
        } else {
            response.setError(400, "Invalid input format", middleware);
            return response.send(res);
        }
    } catch (error) {
      console.log(error)
      response.setError(500, error.message);
      return response.send(res);
    }
  }

}

module.exports = roomController;
