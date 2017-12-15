
var cheerio = require('cheerio')
var request = require('request')
var g = require('../global')
var fs = require('fs')
var db = require('../models')
var mkdirp = require('mkdirp');
var utils = require('../utils')
var fc = () => {
    var count = g.partner_count || 14
    getWeb(count)
    function getWeb(mid){
        if(mid === 0) return 
        var options = {
            "url": "https://qmaker.rapaq.com/partner/show/" + mid,
            "method": "get"
        }
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(body);
                if ($('.f-header-focus__name').text() === '') {
                    return
                } else {
                    utils.changeUrl($)
                    var data = {}
                    data['f-header-focus__name'] = $('.f-header-focus__name').text()
                    data['f-about__text'] = $('.f-about__text').text()
                    data['f-header-focus__pic'] = g.cfg.host+'/img/partner/'+mid+'.png'
                    fs.stat('./public/img/partner/'+ mid+'.png', (err, stats) => {
                        if (err) {
                            request('https://qmaker.rapaq.com/img/logo/'+mid+'.png',(err)=>{
                                if(err){
                                    console.log("partner error:"+error)
                                    return
                                }
                            }).on('error',(err)=>{
                                console.log("partner error:"+err)
                            }).pipe(fs.createWriteStream('./public/img/partner/'+ mid+'.png'));
                        }
                    })
                    data['infos'] = []
                    $('.f-goods-recommend-list').children().each(function (idx, element) {
                        var info = {}
                        info['info-pic__pic'] = $(element).find('.info-pic__pic').css('background-image')
                        info['info__name'] = $(element).find('.info__name').text()
                        info['info__store'] = $(element).find('.info__store').text()
                        info['info__price'] = $(element).find('.info__price').text()
                        var info_href = $(element).find('.info__name a').attr('href')
                        var store_href = $(element).find('.info__store a').attr('href')
                        info['produceId'] = info_href.substring(info_href.lastIndexOf('/')+1,info_href.length)
                        info['storeId'] = store_href.substring(store_href.lastIndexOf('/')+1,store_href.length)
                        data['infos'].push(info)
                    }); 
                    console.log(mid)
                    db.partner_pages.upsert({
                        id: mid, content: JSON.stringify(data)
                    })
                    mid--
                    getWeb(mid)
                }
            } else {
                console.log(error)
            }
        })
    }
}

// fc();

module.exports = fc