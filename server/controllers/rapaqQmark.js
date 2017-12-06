
var cheerio = require('cheerio')
var request = require('request')
var db = require('../models')
module.exports = ()=>{
    var options={
        "url":"https://qmaker.rapaq.com",
        "method":"get"
    }
    request(options,function(error, response, body){
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var data = {}
            var items = [];

            $('div.list-top__title a').each(function (idx, element) {
                data['list_title'+idx] = $(this).text()
            });
            $('div.list__intro').each(function (idx, element) {
                data['list_intro'+idx] = $(this).text()
            });
            $('div.life-routine-text__title.list__title a').each(function (idx, element) {
                data['life_company'+idx] = $(this).text()
            });
            $('div.life-routine-text__intro').each(function (idx, element) {
                data['life_company_intro'+idx] = $(this).text()
            });
            db.web_pages.upsert({
                content:JSON.stringify(data)
            })
        }else{
            console.log(error)
        }
    })
}
