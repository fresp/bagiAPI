'use strict';
module.exports = (sequelize, DataTypes) => {
  const T_Like = sequelize.define('T_Likes', {
    ref_user_id: DataTypes.NUMBER,
    ref_video_id: DataTypes.NUMBER
  }, {});
  T_Like.associate = function(models) {
    // associations can be defined here
  };
  return T_Like;
};