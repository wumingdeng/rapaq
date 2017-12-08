var schedule = require('node-schedule');
var db = require('../models')
var request = require('request')
// var g = require('../global')
var moment = require('moment')
var cheerio = require('cheerio')
var qmark = require('./qmaker/rapaqQmark.js');
var blog = require('./blog.js');

function getRapaqWeb() {
    var options={
        "url":"https://qshare.rapaq.com",
        "method":"get"
    }
    request(options,function(error, response, body){
        if (!error && response.statusCode == 200) {
            // var bodyToken=JSON.parse(body);
            console.log("error:" + error)
            console.log('get web page')
            var $ = cheerio.load(body);
            var items = [];
            $('a').each(function (idx, element) {
                var $element = $(element);
                // $element.attr('src','https://qshare.rapaq.com/img/icons/nav-creat-icon.svg')
                // console.log($element.attr('href'))
            });
            db.web_pages.update({
                content: $.html()
            },{where:{id: 1}})
        }else{
            console.log(error)
        }
    })
}

qmark();
blog(95); //测试 写死的blog日记序号

// getRapaqWeb();
//每天3点把超过一天未支付的订单变成自动取消的状态
// var j = schedule.scheduleJob('0 0 * * * *', function(){
//     // console.log('定时任务 开')
//     console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
//     autoCancelOrder()
// })
// var k = schedule.scheduleJob('0 15 * * * *', function(){
//     console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
//     autoDeliverOrder()
// })
var rule1     = new schedule.RecurrenceRule();  
var times1    = [1,6,11,16,21,26,31,36,41,46,51,56];  
rule1.second  = times1; 
var rule2 = "0 * * * * *"
var getWeb = schedule.scheduleJob(rule2, function(){
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
    // getRapaqWeb()
    qmark();
    blog(95);
})

module.exports = schedule