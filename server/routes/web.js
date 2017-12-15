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
			res.send(JSON.parse(data.content))
		}
	})
})

web_router.route('/getPartnerById').post(function (req, res) {
	var idx =  req.body.id;
	console.log("partner:"+idx)
	db.partner_pages.findOne({where: {id: idx}}).then(function(data) {
		if(data){
			res.send(JSON.parse(data.content))
		}
	})
})

var http = require('http')
var https = require('https')


web_router.route('/test').get(function(req, res) {
		var newUrl = utils.downloadRes()
		res.send(newUrl)
    // var options={
    //     "url":"https://lh3.googleusercontent.com/yYgMdJ4Qw62IDZeYrqBjzolfKZZf2CB-a5QDRUL5CvrEO_cySi1kUEcELoLUvoqGukagsHuOddKAuJwJUeyjKnuDIA=s340",
    //    // url: 'https://www.google.com',
    //    // url: 'https://www.baidu.com',
    //    method:"GET",
    //    proxy: 'http://127.0.0.1:8118'
    // }
    // console.log('test...')
    // var fs = require('fs')
    // request(options,function(error, response, body){
    // 	console.log(error)
    // 	res.send(body)
    // }).pipe(fs.createWriteStream('./public/test/huhu.png'));
  // 	console.log('api/test')
		// var opt = {
		// 	host:'127.0.0.1',
		// 	port:'8118',
		// 	method:'GET',//这里是发送的方法
		// 	// path: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3785121226,4185290697&fm=202&w_h=121_75&cs=3785121226,4185290697&ow_h=121_75&src=201&mola=new&crop=v1',
		// 	path: 'https://www.google.com',
		// 	headers:{
		// 		'Content-Type': 'image/jpeg'
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
		// 	console.log(e)
		//   console.log("Got error: " + e.message);
		// })
		// requ.end()
})


module.exports = web_router;