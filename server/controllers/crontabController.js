var schedule = require('node-schedule');
// var g = require('../global')
var moment = require('moment')
var qmark = require('./qmaker/rapaqQmark.js');
var blog = require('./blog.js');
var qshare = require('./qshare/rapaqQshare.js')

// qshare()
// qmark();

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
var times1    = [0,30];  
rule1.minute  = times1; 
var getBlog = schedule.scheduleJob(rule1, function(){
    console.log("getBlog:"+moment().format('YYYY-MM-DD HH:mm:ss'))
    blog();
})

var rule2 = "0 * * * * *"
var getWeb = schedule.scheduleJob(rule2, function(){
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
    // qshare()
    // qmark();
    // blog(95);
})
module.exports = schedule