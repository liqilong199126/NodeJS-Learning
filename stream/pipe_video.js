var fs = require('fs');

fs.createReadStream('1.mkv').pipe(fs.createWriteStream('1-pipe.mkv'));