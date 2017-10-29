// 回调

function learn(something) {
	console.log(something);
}

function we(callback, something) {
	something += ' is cool';
	callback(something);
}

we(learn, 'Nodejs');

// 使用匿名函数
we(function(something) {
	console.log(something);
}, 'jade')