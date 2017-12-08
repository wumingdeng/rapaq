'use strict';
module.exports = function(sequelize, DataTypes) {
  var blog_pages = sequelize.define('blog_pages', {
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
  return blog_pages;
};