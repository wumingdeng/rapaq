
var cheerio = require('cheerio')
var request = require('request')
var g = require('./global')
var fs = require('fs')
var db = require('../models')
var mkdirp = require('mkdirp');
var fc = (blogId)=>{
    console.log('get blog:'+blogId)
    var options={
        "url":"https://qshare.rapaq.com/blog/show/"+blogId,
        "method":"get"
    }
    request(options,function(error, response, body){
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var data = {}
            data['page-header_title'] = $('.page-header__title').text()
            data['page-header__category'] = $('.page-header__category').text()
            data['page-header__date'] = $('.page-header__date').text()
            data['page-header__freq'] = $('.page-header__freq.frequency').text()
            fs.stat('./public/img/blog/'+blogId,(err,stats)=>{
                if(err){
                    mkdirp('./public/img/blog/'+blogId,(err)=>{
                        if(err){
                            return
                        }
                        console.log('success')
                    })
                }
            })

            $('div.page-inner').each(function (idx, element) {
                if(idx === 1){
                    // data['page-inner'] = $(element).html()
                    $(element).find("img").each((idx,imgElement)=>{
                        var img_src = $(imgElement).attr('src')
                        var img_filename = img_src.substring(img_src.lastIndexOf('/')+1,img_src.length)
                        fs.stat('./public/img/blog/'+blogId+'/'+img_filename,(err,stats)=>{
                            if(err){
                                console.log(err)
                                request(img_src).pipe(fs.createWriteStream('./public/img/blog/'+blogId+'/'+img_filename))
                            }
                        })
                        $(imgElement).attr('src',g.cfg.host+'/img/blog/'+blogId+'/'+img_filename)
                    })
                    data['page-inner'] = $(element).html()
                    return
                }
            });
            db.blog_pages.upsert({
                id:blogId,content:JSON.stringify(data)
            })
        }else{
            console.log(error)
        }
    })
}

fc(95);

module.exports = fc