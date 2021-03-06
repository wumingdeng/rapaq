var utils = {}
var url = require('url')
var http = require("http");
var https = require("https");
var request = require('request')
var mkdirp = require('mkdirp');
var fs = require('fs');
var g = require('../global')
var cfg = g.cfg
var getDirName = require('path').dirname;

var useProxyList = [
	'googleusercontent',
	'googleapis'
]

utils.changeUrl = function($) {
	// return
  $('img').each(function(idx, element) {
    var $element = $(element);
    var imgUrl = $element.attr('src')
    imgUrl = url.parse(imgUrl)  
    if (!imgUrl.host) {
    	return
    }
    for(var idx = 0;idx < useProxyList.length;idx++){
      if(imgUrl.host.indexOf(useProxyList[idx]) >= 0){
      	//包含设定的地址 那么就下载并返回新地址
      	var newUrl = cfg.host + utils.downloadRes(imgUrl.href)
      	$element.attr('src', newUrl)
        return
      }
    }
  })
}

utils.downloadRes = function(imgUrl, useProxy) {
	if (cfg.debug) {
		return imgUrl
	}
	if (useProxy == undefined) {
		useProxy = true //默认使用代理
	}
	// useProxy = false
	// imgUrl = "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3785121226,4185290697&fm=202&w_h=121_baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3785121226,4185290697&fm=202&w_h=121_75&cs=3785121226,4185290697&ow_h=121_75&src=201&mola=new&crop=v1";
	// imgUrl = "https://lh3.googleusercontent.com/yYgMdJ4Qw62IDZeYrqBjzolfKZZf2CB-a5QDRUL5CvrEO_cySi1kUEcELoLUvoqGukagsHuOddKAuJwJUeyjKnuDIA=s340";
	imgUrl = url.parse(imgUrl)
	// console.log(imgUrl)
	var protocol
	var hostname = imgUrl.host

	// if (imgUrl.protocol == 'https:') {
	// 	protocol = https
	// } else if (imgUrl.protocol == 'http:') {
	// 	protocol = http
	// }
	var resPath = '/' + hostname + imgUrl.pathname
  var fullPath = __dirname + '/../public' + resPath
  // var fullPath = __dirname + '/../public/test/abc.png'
  // console.log(getDirName(fullPath))
  //判断文件是否存在
  fs.exists(fullPath, function(exists) {  
  	if (exists) {
	    // console.log('文件存在');  
	  	return
	  } else {
	  	var opt = {
	  		url: imgUrl.href,
	  		method: "GET"
	  	}
	  	if (useProxy) {
	  		opt.proxy = cfg.proxy
	  		// opt.host = cfg.proxy.split(':')[0]
	  		// opt.port = cfg.proxy.split(':')[1]
	  	}
  		mkdirp(getDirName(fullPath), function (err) {
		    if (err) {
		    	console.log(err)
		    	return
		    }
		    request(opt,function(error, response, body){
		    	if (error) {
		    		console.log(error)
		    		return
		    	}
		    }).on('error', function(err) {
		    	console.log(err)
		    }).pipe(fs.createWriteStream(fullPath));
		  });



			// var requ = http.request(opt, function(res){
		 //    var imgData = "";

		 //    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开

		 //    res.on("data", function(chunk){
		 //        imgData+=chunk;
		 //        console.log('down...')
		 //    });

		 //    res.on("end", function(){
	  //   		mkdirp(getDirName(fullPath), function (err) {
			// 	    if (err) {
			// 	    	console.log(err)
			// 	    	return
			// 	    }
			// 	    console.log(imgData)
			// 	    console.log(imgData.length)
		 //        fs.writeFile(fullPath, imgData, "binary", function(err){
		 //            if(err){
	  //               console.log("down fail");
	  //               console.log(err);
		 //            } else {
		 //            	console.log("down success");
		 //            	return
		 //            }
		 //        });
			// 	  });
		 //    })
			// }).on("error", function (err) {  
		 //  	console.log('下载失败')
		 //  	console.log(err)
			// });
			// requ.end()
	  }
	}); 
	
	return resPath
}





module.exports = utils