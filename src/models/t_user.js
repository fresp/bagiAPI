'use strict';

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const T_User = sequelize.define('T_Users', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Is not a email"
        },
        notIn: [[":", "*", "&", "^", "#", " "]]
      }
    },
    img: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    freezeTableName: true,
    instanceMethods: {
        generateHash(password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }
  });
  T_User.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });

  T_User.associate = function(models) {
    // associations can be defined here
  };
  return T_User;
};