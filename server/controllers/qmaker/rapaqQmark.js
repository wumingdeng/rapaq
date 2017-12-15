var fs = require('fs')
var cheerio = require('cheerio')
var request = require('request')
var db = require('../../models')
var fc = ()=>{
    var options={
        "url":"https://qmaker.rapaq.com",
        "method":"get"
    }
    request(options,function(error, response, body){
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var data = {}
            data['factory'] = []
            data['article']=[]
            data['banner'] = []
            $('img').each((idx,element)=>{
                var img_src = $(element).attr('src')
                if(img_src.indexOf('https:')>=0){
                    // var img_filename = img_src.substring(img_src.indexOf('img/')+'img/'.length,img_src.lastIndexOf('/'))
                    var img_filename =img_src.substring(img_src.lastIndexOf('/')+1,img_src.length)
                    if(img_src.indexOf('factory')>=0){
                        img_filename = 'factory'+img_filename
                        data['factory'].push('/img/qmark/'+img_filename)
                    }
                    if(img_src.indexOf('article')>=0){
                        data['article'].push('/img/qmark/'+img_filename)
                    }
                    if(img_src.indexOf('banner')>=0){
                        data['factory'].unshift('/img/qmark/'+img_filename)
                    }
                    request(img_src).pipe(fs.createWriteStream('./public/img/qmark/'+ img_filename));
                }else{
                    var img_filename =img_src.substring(img_src.lastIndexOf('/')+1,img_src.length)
                    data['banner'].push('/img/qmark/'+img_filename)
                    request(options.url+'/img/'+img_filename).pipe(fs.createWriteStream('./public/img/qmark/'+ img_filename));
                }
            })

            data['blog'] = []
            $('div.list-top__title a').each(function (idx, element) {
                var blog = {}
                blog['title'] = $(this).text()
                var a_src = $(element).attr('href')
                blog['index'] = a_src.substring(a_src.lastIndexOf('/')+1,a_src.length)
                blog['img'] = data['article'][idx]
                data['blog'][idx] = blog
            });
            $('div.list__intro').each(function (idx, element) {
                var blog = data['blog'][idx]
                blog['intro'] = $(this).text()
            });
            data['company'] = []
            $('div.life-routine-text__title.list__title a').each(function (idx, element) {
                var company = {}
                company['title'] = $(this).text()
                var a_src = $(element).attr('href')
                company['index'] = a_src.substring(a_src.lastIndexOf('/')+1,a_src.length)
                company['img'] = data['factory'][idx]
                data['company'][idx] = company
            });
            $('div.life-routine-text__intro').each(function (idx, element) {
                var company = data['company'][idx]
                company['intro'] = $(this).text()
            });
            delete data['article']
            delete data['factory']

            // console.log(data)
            db.web_pages.upsert({
                id:2,content:JSON.stringify(data)
            })
        }else{
            console.log(error)
        }
    })
}

// fc();

module.exports = fc