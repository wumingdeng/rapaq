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
            var resData = {}
            //取顶部轮播作品
            var swiperData = []
            $('#mainpage_banner .swiper-slide').each(function (idx, element) {
                var obj = {}
                var $element = $(element);
                obj.checkUrl = $element.find(".square__content--image a").attr('href')
                obj.imgSrc = $element.find(".square__content--image img").attr('src')
                obj.title = $element.find(".idx__kv--info .info__title").text()
                obj.authorHref = $element.find(".info__author a").attr('href')
                obj.authorHead = $element.find(".info__author img").attr('src')
                obj.authorName = $element.find(".info__author .name").text()
                obj.date = $element.find(".info__author .date").text()
                swiperData.push(obj)
            });
            resData.swiperData = swiperData

            //blog数据
            var blogData = []
            $('#mainpage_blog .idxList--blog .li').each(function(idx, element) {
                var obj = {}
                var $element = $(element);
                obj.authorHref = $element.find(".author a").attr('href')
                obj.authorHead = $element.find(".author .author__pic img").attr('src')
                obj.authorName = $element.find(".author .author__info .name").text()
                obj.date = $element.find(".author .author__info .date").text()
                obj.checkUrl = $element.find(".blogBox__pic a").attr('href')
                obj.imgSrc = $element.find(".blogBox__pic a img").attr('src')
                obj.blogTitle = $element.find(".blogBox__info .text__title").text()
                obj.blogIntro = $element.find(".blogBox__info .text__intro").text()
                obj.category = $element.find(".blogBox__info .category").text()
                obj.freq = $element.find(".blogBox__info .freq").text()

                blogData.push(obj)
            })
            resData.blogData = blogData

            //activity数据
            var activityData = []
            $('#mainpage_event .idxList--activity .li').each(function(idx, element) {
                var obj = {}
                var $element = $(element);
                obj.checkUrl = $element.find(".activityBox a").attr('href')
                obj.imgSrc = $element.find(".activityBox img").eq(0).attr('src')
                obj.date = $element.find(".activityBox .activityBox__text .date span").text()
                obj.title = $element.find(".activityBox .txt__title").text()
                obj.followCount = $element.find(".activityBox .activityBox__bottom [data-id='cnt']").text()
                
                activityData.push(obj)
            })
            resData.activityData = activityData
            console.log(activityData)

            db.web_pages.update({
                content: JSON.stringify(resData)
            },{where:{id: 1}})
        }else{
            console.log(error)
        }
    })
}

qmark();
blog(95); //测试 写死的blog日记序号

getRapaqWeb();
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