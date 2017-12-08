
var cheerio = require('cheerio')
var request = require('request')
var db = require('../models')
var fc = (blogId)=>{
    var options={
        "url":"https://qshare.rapaq.com/blog/show/"+blogId,
        "method":"get"
    }
    request(options,function(error, response, body){
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var data = {}
            var items = [];
            data['page-header_title'] = $('.page-header__title').text()
            data['page-header__category'] = $('.page-header__category').text()
            data['page-header__date'] = $('.page-header__date').text()
            data['page-header__freq'] = $('.page-header__freq.frequency').text()

            $('div.page-inner').each(function (idx, element) {
                if(idx === 1){
                    // data['page_overview_intro'] = $($(element).children()[0]).text()
                    // data['page_overview_intro'] = $($(element).children()[6]).text()
                    // data['page_overview_intro'] = $($(element).children()[7]).text()
                    data['page-inner'] = $(element).html()
                    // console.log( $($(element).children()[7]).text())
                // }else if(idx === 2){

                }
            });
            db.blog_pages.upsert({
                id:blogId,content:JSON.stringify(data)
            })
            // })
        }else{
            console.log(error)
        }
    })
}

fc(95);

module.exports = fc