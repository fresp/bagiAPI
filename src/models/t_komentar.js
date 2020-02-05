'use strict';
module.exports = (sequelize, DataTypes) => {
  const T_Komentar = sequelize.define('T_Komentars', {
    videoId: DataTypes.STRING,
    name: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {freezeTableName: true,timestamps: true});
  T_Komentar.associate = function(models) {
    // associations can be defined here
  };
  return T_Komentar;
};