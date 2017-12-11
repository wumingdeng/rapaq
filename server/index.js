var express = require('express');
var app = express();
var cfg = require('./config.json')
var bodyParser = require('body-parser');
var db = require('./models');
var path = require('path')



var route_table = require('./routes/routeTable');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

// api router
for(var key in route_table){
    app.use('/api',route_table[key]);
}

app.get('/', function (req, res) {
  res.send('Hello World');
});

// static pages if needed
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(cfg.listen, function () {
  var host = server.address().address;
  var port = server.address().port;

  //开始定时任务
  require('./controllers/crontabController.js')
  console.log('Example app listening at http://%s:%s', host, port);
});