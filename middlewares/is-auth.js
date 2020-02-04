const jwt = require('jsonwebtoken')
const utility = require('../helpers/utility')
const Response = require('../helpers/response')
const response = new Response
const secretOrKey = process.env.SECRET_KEY;
require('dotenv').config

module.exports = (req, res, next) =>{
  const bearerHeader = req.get('Authorization')
  let token = null
  req.authenticated = false;
  if (bearerHeader){
      var bearer = bearerHeader.split(" ");
      token = bearer[1];
      jwt.verify(token, secretOrKey,  (err, decoded) =>{
          if (err){
              // console.log(err);
              req.authenticated = false;
              req.token = null;
              
              response.setError(401,'Unauthozation2')
              response.send(res)
          } else {
              req.token = decoded;
              req.authenticated = true;
              next();
          }
      });
  }
}