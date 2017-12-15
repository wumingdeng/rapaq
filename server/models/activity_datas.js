'use strict';
module.exports = function(sequelize, DataTypes) {
  var activity_datas = sequelize.define('activity_datas', {
    user_id: DataTypes.STRING,
    type: DataTypes.INTEGER,
    title: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    content: DataTypes.STRING,
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING,
    position: DataTypes.STRING,
    address: DataTypes.STRING,
    location: DataTypes.INTEGER,
    organizer: DataTypes.STRING,
    status: DataTypes.INTEGER,
    is_hidden: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    share_cnt: DataTypes.INTEGER,
    collect_cnt: DataTypes.INTEGER,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
    is_end: DataTypes.STRING,
    is_collect: DataTypes.STRING,
    user_info: DataTypes.STRING,
    event_type: DataTypes.STRING,
    commend: DataTypes.INTEGER
  },{
       timestamps: false
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return activity_datas;
};