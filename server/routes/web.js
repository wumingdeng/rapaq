var express = require('express');
var web_router = express.Router();
var request=require('request')
var db = require('../models');



web_router.route('/getShare').get(function (req, res) {
	db.web_pages.findOne({where: {id: 1}}).then(function(data) {
		res.send(data.content)
	})
})

web_router.route('/getMaker').get(function (req, res) {
	db.web_pages.findOne({where: {id: 2}}).then(function(data) {
		res.send(JSON.parse(data.content))
	})
})

web_router.route('/getBlogById').post(function (req, res) {
	var idx =  req.body.idx;
	db.blog_pages.findOne({where: {id: idx}}).then(function(data) {
		res.send(JSON.parse(data.content))
	})
})

web_router.route('/test').get(function(req, res) {
    var options={
        "url":"https://lh3.googleusercontent.com/yQf89HfWzurMhdn-sKFnWVd6iivpCoZN6mAOHYMkvvR8i5g-lDBMp3be4usCyhLELn_YZdt2p45XHCbNfndq7ygY9NM=s560",
        "method":"get"
    }
    console.log('test...')
    request(options,function(error, response, body){
    	console.log(error)
    	res.send(body)
    })
})

module.exports = web_router;