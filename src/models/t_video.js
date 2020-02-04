'use strict';
module.exports = (sequelize, DataTypes) => {
  const T_Video = sequelize.define('T_Videos', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    create_date: DataTypes.DATE
  }, {});
  T_Video.associate = function(models) {
    // associations can be defined here
  };
  return T_Video;
};