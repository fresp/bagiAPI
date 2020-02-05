'use strict';
module.exports = (sequelize, DataTypes) => {
  const T_Like = sequelize.define('T_Likes', {
    videoId: DataTypes.STRING
  }, {freezeTableName: true,timestamps: true});
  T_Like.associate = function(models) {
    // associations can be defined here
  };
  return T_Like;
};