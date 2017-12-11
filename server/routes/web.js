var express = require('express');
var web_router = express.Router();
var request=require('request')
var db = require('../models');
var utils = require('../utils')



web_router.route('/getShare').get(function (req, res) {
	db.web_pages.findOne({where: {id: 1}}).then(function(data) {
		res.send(JSON.parse(data.content))
	})
})

web_router.route('/getMaker').get(function (req, res) {
	db.web_pages.findOne({where: {id: 2}}).then(function(data) {
		res.send(JSON.parse(data.content))
	})
})

web_router.route('/getBlogById').post(function (req, res) {
	
	var idx =  req.body.id;
	console.log("blog:"+idx)
	db.blog_pages.findOne({where: {id: idx}}).then(function(data) {
		if(data){
			console.log(JSON.parse(data.content))
			res.send(JSON.parse(data.content))
		}
	})
})

var http = require('http')


web_router.route('/test').get(function(req, res) {
		var newUrl = utils.downloadRes()
		res.send(newUrl)
    // var options={
    //     // "url":"https://lh3.googleusercontent.com/yYgMdJ4Qw62IDZeYrqBjzolfKZZf2CB-a5QDRUL5CvrEO_cySi1kUEcELoLUvoqGukagsHuOddKAuJwJUeyjKnuDIA=s340",
    //    url: 'https://www.google.com',
    //    method:"CONNECT",
    //    proxy: 'https://35.194.190.225:2888'
    // }
    // console.log('test...')
    // request(options,function(error, response, body){
    // 	console.log(error)
    // 	res.send(body)
    // })
  //   var auth = new Buffer('diablo.diabloo').toString('base64')
		// var opt = {
		// 	host:'35.194.190.225',
		// 	port:'2888',
		// 	method:'GET',//这里是发送的方法
		// 	path: 'https://www.baidu.com',     //这里是访问的路径
		// 	headers:{
  //       'Proxy-Authorization':'Basic '+auth
		// 	}
		// }
		// //以下是接受数据的代码
		// var body = '';
		// var requ = http.request(opt, function(response) {
		//   console.log("Got response: " + response.statusCode);
		//   response.on('data',function(d){
		// 	  body += d;
		// 	}).on('end', function(){
		// 	  console.log(response.headers)
		// 	  console.log(body)
		// 	  res.send(body)
		// 	});

		// }).on('error', function(e) {
		//   console.log("Got error: " + e.message);
		// })
		// requ.end()
})


module.exports = web_router;