'use strict';
module.exports = (sequelize, DataTypes) => {
  const T_Komentar = sequelize.define('T_Komentars', {
    ref_user_id: DataTypes.NUMBER,
    ref_video_id: DataTypes.NUMBER,
    content: DataTypes.TEXT
  }, {});
  T_Komentar.associate = function(models) {
    // associations can be defined here
  };
  return T_Komentar;
};