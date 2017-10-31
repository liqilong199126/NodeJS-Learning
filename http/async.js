// <script src="a.js"></script>
// <script src="b.js"></script>
// <script src="c.js"></script>

// 同步模式 阻塞在当前状态
// var i = 0;
// while(true) {
// 	i++
// }


// 同步执行和异步执行
var c = 0;

function printIt() {
	console.log(c);
}

function plus(callback) {
	setTimeout(function() {
        	c += 1;
        	callback();
	},1000);
}

plus(printIt);