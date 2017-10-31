var fs = require('fs');

var readStream = fs.createReadStream('1.mkv');
var writeStream = fs.createWriteStream('1-stream.mkv');

readStream.on('data', function(chunk) {
	if(writeStream.write(chunk) === false) {
		console.log('still cached');
        readStream.pause();
	}
})

readStream.on('end', function() {
	writeStream.end();
})

writeStream.on('drain', function() {
	console.log('data drains');

	readStream.resume();
})