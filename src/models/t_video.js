'use strict';
module.exports = (sequelize, DataTypes) => {
  const T_Video = sequelize.define('T_Videos', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {freezeTableName: true});
  T_Video.associate = function(models) {
    // associations can be defined here
  };
  return T_Video;
};