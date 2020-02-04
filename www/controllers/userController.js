'use strict'
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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



class userController {

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

    static async signin(req, res){
        try {
            const {
                name
                , email
                , password
            } = req.body;

            const secretOrKey = process.env.SECRET_KEY;

            const middleware = {
            email  : `required|text|${email}`
            , password  : `required|text|${password}`
            }

            if (utility.validateRequest(middleware)) {
             
                const _checkUsers = await Users.checkedmail(email);
                if(utility.issetVal(_checkUsers)){
                    bcrypt.compare(password, _checkUsers.password, (err, isMatch) => {
                        if (isMatch && !err) {
                            const payload = {
                                id: _checkUsers.id,
                                name: _checkUsers.name,
                            };
                            var token = jwt.sign(
                                JSON.parse(JSON.stringify(payload)),
                                secretOrKey,
                                { expiresIn: 86400 * 30 }
                            );
                            jwt.verify(token, secretOrKey, (err, data) => {
                                console.log(err, data);
                            });
                            const resData = {
                                name : _checkUsers.name,
                                token : "Bearer " + token
                            }
                            response.setSuccess(200, "Login Success!", resData);
                            return response.send(res);
                        } else {
                            response.setError(401, "Authentication failed. Wrong password.");
                            return response.send(res);
                        }
                    });
                } else {
                    response.setError(404, "Account Not Register");
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

module.exports = userController;
