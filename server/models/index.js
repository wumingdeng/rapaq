var Sequelize = require('sequelize')
var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {};

var g = require('../global')
var config = g.cfg

// database initialize
var sequelize = new Sequelize(config.dbname, config.user, config.pass, {
  host: config.dbaddr,
  port:config.port,
  timezone:'+08:00',
  dialect: config.dialect,
  // dialectOptions: {
  //    charset: 'utf8mb4'
  // },
  pool: {
    max: config.poolsize,
    min: 0,
    idle: 10000
  },
  logging: config.sqlDebug 
});

// schema miration
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });



Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;