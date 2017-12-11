var utils = {}
var url = require('url')
var http = require("http");
var https = require("https");
var mkdirp = require('mkdirp');
var fs = require('fs');
var getDirName = require('path').dirname;

utils.downloadRes = function(imgUrl) {
	imgUrl = "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3785121226,4185290697&fm=202&w_h=121_75&cs=3785121226,4185290697&ow_h=121_75&src=201&mola=new&crop=v1";
	// imgUrl = "https://lh3.googleusercontent.com/kuX733lwJm-v9GtuaYd7dorwVOQnhfbb_-pnmbDyrGkP3mqePn5rz-WbM8hjlxlYMSxJOJzk8DLo2E3qIbBoy4wEgcc=s140";
	imgUrl = url.parse(imgUrl)
	// console.log(imgUrl)
	var protocol
	var hostname = imgUrl.host

	if (imgUrl.protocol == 'https:') {
		protocol = https
	} else if (imgUrl.protocol == 'http:') {
		protocol = http
	}
	var resPath = '/public/' + hostname + imgUrl.pathname
  var fullPath = __dirname + '/..' + resPath
  console.log(getDirName(fullPath))
  //判断文件是否存在
  fs.exists(fullPath, function(exists) {  
  	if (exists) {
	    console.log('文件存在');  
	  	return
	  } else {
			protocol.get(imgUrl.href, function(res){
		    var imgData = "";

		    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开

		    res.on("data", function(chunk){
		        imgData+=chunk;
		    });

		    res.on("end", function(){
	    		mkdirp(getDirName(fullPath), function (err) {
				    if (err) {
				    	console.log(err)
				    	return
				    };
		        fs.writeFile(fullPath, imgData, "binary", function(err){
		            if(err){
	                console.log("down fail");
	                console.log(err);
		            } else {
		            	console.log("down success");
		            	return
		            }
		        });
				  });
		    })
			}).on("error", function (err) {  
		  	console.log('下载失败')
		  	console.log(err)
			});
	  }
	}); 
	
	return resPath
}





module.exports = utils