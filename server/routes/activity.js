var express = require('express');
var activity_router = express.Router();
var request=require('request')
var db = require('../models');
var utils = require('../utils')
var moment = require('moment')


var getWeekDays = function () {
    var now = new Date;
    var day = now.getDay ();
    console.log(day)
    var week = "1234567";
    var first = 0 - week.indexOf (day);
    var f = new Date;
    f.setDate (f.getDate () + first);
    var last = 6 - week.indexOf (day);
    var l = new Date;
    l.setDate (l.getDate () + last);
    return [
            f, l
    ];
}

console.log(getWeekDays())


activity_router.route('/getActivityById').post(function (req, res) {
	var id = req.body.id
	if (!id) {
		res.json({err:1,msg:'error!'})
		return
	}
	db.activity_datas.findOne({where:{id: id}}).then(function(data) {
		if (data) {
			//取推荐活动 规则是同类型活动中 最新的三个
			db.activity_datas.findAll({
				order: db.sequelize.literal('created_at DESC'),
				offset: 0,
				limit: 3,
				attributes: ['id','start_time','end_time','cover_image','title','address'],
				where:{type: data.type, id:{$not:data.id}}
			}).then(function(otherData) {
				if (otherData) {
          otherData.forEach(function(item,index){ 
						item.dataValues.start_time = moment(otherData.start_time).format('YYYY年MM月DD日')
						item.dataValues.end_time = moment(otherData.end_time).format('YYYY年MM月DD日')
          })
					data.dataValues.otherData = otherData
				}
				res.json({ok:data})
			})
		} else {
			res.json({err:99, msg:'no data'})
		}
	})
})

activity_router.route('/getActivity').post(function (req, res) {
	var first_id = req.body.first_id
	var num = req.body.num
	var order_type = req.body.order_type
	var event_type = req.body.event_type
	var area_type = req.body.area_type

	var queryObj = {}
	var orderRule
	queryObj.is_end = 0	//默认选未结束的活动
	if (Number(event_type)) {
		queryObj.type = event_type
	}
	if (Number(area_type)) {
		queryObj.location = area_type
	}
	if (order_type == '1') {
		//最新 按创建时间排序
		orderRule = db.sequelize.literal('created_at DESC')
	} else if (order_type == '2') {
		//本周活动
		//取本周第一天和最后一天
		var firstDay = getWeekDays()[0]
		var lastDay = getWeekDays()[1]
		// console.log('heihei   ' + moment(lastDay).format('YY-MM-DD'))
		//条件为 活动结束时间大于本周第一天 并且 活动开始时间小于本周最后一天
		queryObj.start_time = {
			$lte: moment(lastDay).format('YYYY-MM-DD 23:59:59')
		}
		queryObj.end_time = {
			$gte: moment(firstDay).format('YYYY-MM-DD 00:00:00')
		}
		orderRule = db.sequelize.literal('start_time')
	} else if (order_type == '3') {
		queryObj.commend = 1
		orderRule = db.sequelize.literal('start_time')
	} else if (order_type == '4') {
		orderRule = db.sequelize.literal('views DESC')
	} else if (order_type == '5') {
		orderRule = db.sequelize.literal('collect_cnt DESC')
	} else if (order_type == '6') {
		//已结束的活动
		queryObj.is_end = 1
		orderRule = db.sequelize.literal('end_time')
	} 


	db.activity_datas.findAll({offset:Number(first_id), limit: Number(num), order: orderRule, where: queryObj}).then(function(data) {
		if(data) {
			res.json({ok:data})
		}
	})

})








module.exports = activity_router;