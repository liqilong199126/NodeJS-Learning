var https = require('https')

var fs = require('fs')

var options = {
	key: fs.readFileSync('ssh_key.com'),
	cert: fs.readFileSync('ssh_cert.pem')
}

https.createSever(options, function(req, res){
	res.writeHead(200)
	res.end('Hello Imocc')
})
.listen(8090)