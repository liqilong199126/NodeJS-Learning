var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '一起期待下一期的课程',
    'cid': 8837
});

var options = {
	hostname: 'www.immoc.com',
    port: 80,
    path: '/course/document',
    method: 'POST',
    headers: {
    	'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'UM_distinctid=15e8f60b74582-0c5fab33e596af-31637e01-13c680-15e8f60b746ace; CNZZDATA1261110065=1071450520-1505642898-null%7C1505895719; imooc_uuid=217e0b02-77d9-4497-a371-6d98c7f91126;mooc_isnew_ct=1507807941; loginstate=1; apsid=YzZTQ4Y2IxMTI0NmUwOGQ1MTBhYjU2ZDkwZTg3OTYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTM0OTQzNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2MzQ1MDU3MjRAcXEuY29tAAAAAAAAAAAAAAAAAAAAADM2NDJkOGE5NWMyZWRjYmZhNjMxMzMzMjc5ZjIwMGI2z9XmWc%2FV5lk%3DYj; PHPSESSID=61opvggrfva4vkv9uagcm2nbt4; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1509109260,1509109296,1509109314,1509162891; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1509429323; imooc_isnew=2; cvde=59f1adabe756b-853',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Pragma': 'no-cache',
        'Referer': 'http://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}


var req = http.request(options, function(res){
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data', function(chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	res.on('end', function() { 
        console.log('评论完毕! ');
	})

	res.on('error', function(e) {
		console.log('Error: ' + e.message);
	})

})

req.write(postData);
req.end();