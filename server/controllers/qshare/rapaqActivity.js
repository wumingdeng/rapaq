//活动数据处理
var cheerio = require('cheerio')
var db = require('../../models')
var request = require('request')
var utils = require('../../utils')
var qs = require('querystring'); 

var getNum = 10 	//每次处理的条数

function getActivityData(first_id, isEnd) {
	var data = {
		first_id: first_id,
		num: getNum
	}
	if (isEnd) {
		//取结束的活动
		data.order_type = 6
	}
	var content = qs.stringify(data);
  var options={
		url: "https://qshare.rapaq.com/event/loadmore?" + content,
		method: "GET",
		json: true
  }

  request(options,function(error, response, body){
    if (!error && response.statusCode == 200) {
    	// console.log(body)
    	if (!body.html) {
    		return
    	}
    	var events = body.events
    	console.log('a ha?')
    	for (var i = 0; i < body.data_num; ++i) {
    		var event = events[i]
    		event.cover_image = utils.downloadRes(event.cover_image)
    		event.user_info.headpic = utils.downloadRes(event.user_info.headpic)
    		//解析 event.content
    		var $ = cheerio.load(event.content)
    		$('img').each(function(idx,element) {
    			var $element = $(element)
    			var newUrl = utils.downloadRes($element.attr('src'))
    			$element.attr('src',newUrl)
    		})
    		event.content = $.html()

    		event.user_info = JSON.stringify(event.user_info)
    		event.event_type = JSON.stringify(event.event_type)

    		//写入数据库
    		db.activity_datas.upsert(event,{where:{id: event.id}})
    	}
    	if (body.data_num == getNum) {
    		getActivityData(first_id + getNum, isEnd)
    	} else {
    		if (!isEnd) {
    			//取结束的活动
    			getActivityData(0, true)
    		}
    	}
    } else {
    	console.log(error)
    }
  })
}

module.exports = getActivityData