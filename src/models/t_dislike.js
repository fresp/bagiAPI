'use strict';
module.exports = (sequelize, DataTypes) => {
  const T_Dislike = sequelize.define('T_Dislikes', {
    videoId: DataTypes.STRING
  }, {freezeTableName: true,timestamps: true});
  T_Dislike.associate = function(models) {
    // associations can be defined here
  };
  return T_Dislike;
};