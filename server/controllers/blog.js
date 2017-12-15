
var cheerio = require('cheerio')
var request = require('request')
var g = require('../global')
var fs = require('fs')
var db = require('../models')
var mkdirp = require('mkdirp');
var utils = require('../utils')
var fc = ()=>{
    request('https://qshare.rapaq.com/blog/loadmore',function(error, response, body){
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body)
            var maxId = body.blogs[0].id
            getWeb(maxId)
            function getWeb(mid){
                console.log("bolg id:"+mid)
                if(mid<1) return
                var options={
                    "url":"https://qshare.rapaq.com/blog/show/"+mid,
                    "method":"get"
                }
                request(options,function(error, response, body){
                    if (!error && response.statusCode == 200) {
                        var $ = cheerio.load(body);
                        if($('title').text() === '此文章不存在'){
                        }else{
                            utils.changeUrl($)
                            var data = {}
                            data['page-header_title'] = $('.page-header__title').text()
                            data['page-header__category'] = $('.page-header__category').text()
                            data['page-header__date'] = $('.page-header__date').text()
                            data['page-header__freq'] = $('.page-header__freq.frequency').text()
                            data['page-bcover'] = $('.page-bcover img').attr('src')
                            $('div.page-inner').each(function (idx, element) {
                                if(idx === 1){
                                    data['page-inner'] = $(element).html()
                                    return
                                }
                            });
                            data['b-other'] = []
                            $('.b-other-all-box').each((idx,element)=>{
                                var other = {}
                                var href = $($(element).find('.box__pic a')[0]).attr('href')
                                other['blogId'] = href.substring(href.lastIndexOf('/')+1,href.length)
                                other['img']= $($(element).find('.box__pic img')[0]).attr('src')
                                other['data']= $($(element).find('.box-author__date')[0]).text()
                                other['title']= $($(element).find('.box__title')[0]).text()
                                other['img-author']= $($(element).find('.box-author__pic')[0]).attr('src')
                                other['name-author']= $($(element).find('.box-author__name')[0]).text()
                                data['b-other'].push(other)
                            })
                            console.log('writer database')
                            db.blog_pages.upsert({
                                id:mid,content:JSON.stringify(data)
                            })
                        }
                        mid--
                        getWeb(mid)
                    }else{
                        console.log(error)
                    }
                })
                
            }
        }
    })
}

fc();

module.exports = fc