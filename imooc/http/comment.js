var http = require('http')

var querystring = require('querystring')

var postData = querystring.stringify({
	'content': '很好的课程',
	'cid': 348
})

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/document',
	method: 'POST',
	headers: {
		'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=099e5547-8695-4869-a891-0f1d4659c07b; imooc_isnew_ct=1470203342; bdshare_firstime=1486609691027; loginstate=1; apsid=YzZTQ4Y2IxMTI0NmUwOGQ1MTBhYjU2ZDkwZTg3OTYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTM0OTQzNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2MzQ1MDU3MjRAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGFmMDhjNzljMmQzN2YxOGMwYzI2ZTdlN2I3ODlmYWM4FU7CWBVOwlg%3DYj; last_login_username=634505724%40qq.com; UM_distinctid=15ad5bc7c08361-037ad4720653f6-6b1b1279-1fa400-15ad5bc7c097d4; CNZZDATA1261110065=1851718312-1489644156-http%253A%252F%252Fweibo.com%252F%7C1490665358; Hm_lvt_c1c5f01e0fc4d75fd5cbb16f2e713d56=1489644585,1490665368; Hm_lpvt_c1c5f01e0fc4d75fd5cbb16f2e713d56=1490665368; PHPSESSID=je7piicbo14fno70i4l9oq8sc3; cninfo=weibo-219534646324e0792f857c1d70794fcd; mc_channel=weibo; mc_marking=219534646324e0792f857c1d70794fcd; channel=491b6f5ab9637e8f6dffbbdd8806db9b_phpkecheng; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1490668223,1490670277,1490675801,1490678047; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1490683099; IMCDNS=0; imooc_isnew=2; cvde=58d9bf9439d91-133',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/comment/348',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
	}
}

var req = http.request(options, function(res){
	console.log('Status: ' + res.statusCode)
	console.log('headers: ' + JSON.stringify(res.headers))

	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof Chunk)
	})

	res.on('end', function(){
		console.log('评论完毕！')
	})

})

req.on('error', function(){
		console.log('Error: ' + e.message)
	})

req.write(postData)

req.end()