'use strict';
module.exports = (sequelize, DataTypes) => {
  const T_Dislike = sequelize.define('T_Dislikes', {
    ref_user_id: DataTypes.NUMBER,
    ref_video_id: DataTypes.NUMBER
  }, {freezeTableName: true});
  T_Dislike.associate = function(models) {
    // associations can be defined here
  };
  return T_Dislike;
};