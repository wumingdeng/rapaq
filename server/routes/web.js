var express = require('express');
var web_router = express.Router();
var request=require('request')
var db = require('../models');



web_router.route('/getShare').get(function (req, res) {
	db.web_pages.findOne({where: {id: 1}}).then(function(data) {
		res.send(data.content)
	})
})


module.exports = web_router;