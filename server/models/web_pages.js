'use strict';
module.exports = function(sequelize, DataTypes) {
  var web_pages = sequelize.define('web_pages', {
    url: DataTypes.STRING,
    content: DataTypes.STRING
  },{
       timestamps: false
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return web_pages;
};