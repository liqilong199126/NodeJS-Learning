## URL网址解析的好帮手

### URL的API文档方法

```
url.parse(urlStr,[parseQueryString],[slashesDenoteHost])

url.format(urlObj)

url.resolve(from,to)
```
## 举例

http://imooc.com/course/list


---




- url.parse("地址")；解析url地址成分

```
192:crawler-by-node qilongli$ node
> url
{ parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  Url: [Function: Url] }
```
```
> url.parse('http://imooc.com/course/list')
Url {
  protocol: 'http:', //底层协议类型
  slashes: true,  //是否有http的双斜线"//"
  auth: null,
  host: 'imooc.com', //HTTP所使用的域名
  port: null,  //端口
  hostname: 'imooc.com',  //主机名
  hash: null,  //hash值 通常为#后面的内容
  search: null,  //查询字符串参数
  query: null,   //发送给HTTP服务器的数据
  pathname: '/course/list',  //访问资源路径名
  path: '/course/list',  //路径
  href: 'http://imooc.com/course/list' //没被解析的完整超链接
    }
```
```
> url.parse('http://imooc.com:8080/course/list?from=scott&course=node#floor1')
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'imooc.com:8080',
  port: '8080',
  hostname: 'imooc.com',
  hash: '#floor1',
  search: '?from=scott&course=node',
  query: 'from=scott&course=node',
  pathname: '/course/list',
  path: '/course/list?from=scott&course=node',
  href: 'http://imooc.com:8080/course/list?from=scott&course=node#floor1' }
>
```


```
> url.parse('http://imooc.com:8080/course/list?from=scott&course=node#floor1')
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'imooc.com:8080',
  port: '8080',
  hostname: 'imooc.com',
  hash: '#floor1',
  search: '?from=scott&course=node',
  query: 'from=scott&course=node',
  pathname: '/course/list',
  path: '/course/list?from=scott&course=node',
  href: 'http://imooc.com:8080/course/list?from=scott&course=node#floor1' }
```


```
> url.parse('http://imooc.com:8080/course/list?from=scott&course=node#floor1',true)
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'imooc.com:8080',
  port: '8080',
  hostname: 'imooc.com',
  hash: '#floor1',
  search: '?from=scott&course=node',
  query: { from: 'scott', course: 'node' }, //两者的不同 query变成了对象
  pathname: '/course/list',
  path: '/course/list?from=scott&course=node',
  href: 'http://imooc.com:8080/course/list?from=scott&course=node#floor1' }
>
```

```
> url.parse('//imooc.com/course/list')
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '//imooc.com/course/list',
  path: '//imooc.com/course/list',
  href: '//imooc.com/course/list' }
```
```
> url.parse('//imooc.com/course/list',true)
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '//imooc.com/course/list',
  path: '//imooc.com/course/list',
  href: '//imooc.com/course/list' }
```
```
> url.parse('//imooc.com/course/list',true,true)
Url {
  protocol: null,
  slashes: true,
  auth: null,
  host: 'imooc.com',
  port: null,
  hostname: 'imooc.com',
  hash: null,
  search: '',
  query: {},
  pathname: '/course/list',
  path: '/course/list',
  href: '//imooc.com/course/list' }
- url.format("地址")  生成url地址
```


```
> url.format({ protocol: 'http:',
...   slashes: true,
...   auth: null,
...   host: 'imooc.com:8080',
...   port: '8080',
...   hostname: 'imooc.com',
...   hash: '#floor1',
...   search: '?from=scott&course=node',
...   query: 'from=scott&course=node',
...   pathname: '/course/list',
...   path: '/course/list?from=scott&course=node',
...   href: 'http://imooc.com:8080/course/list?from=scott&course=node#floor1' })
'http://imooc.com:8080/course/list?from=scott&course=node#floor1'
```
- url.resolve("HTTP://imooc.com",'/course/list');生成url地址

```
> url.resolve('http://imooc.com/','/course/list')
'http://imooc.com/course/list'
```
## Querystring参数处理小利器

**序列化与反序列化**



- querystring.stringify()序列化

```
> querystring.stringify({name:'scott',course:['jade','node'],form:''})
'name=scott&course=jade&course=node&form='
```

```
> querystring.stringify({name:'scott',course:['jade','node'],form:''},',')
'name=scott,course=jade,course=node,form='
```

```
> querystring.stringify({name:'scott',course:['jade','node'],form:''},',',':')
'name:scott,course:jade,course:node,form:'
```

- querystring.parse()反序列化

```
> querystring.parse('name=scott&course=jade&course=node&form=')
{ name: 'scott', course: [ 'jade', 'node' ], form: '' }
```
```
> querystring.parse('name=scott,course=jade,course=node,form=',',')
{ name: 'scott', course: [ 'jade', 'node' ], form: '' }
```
```
> querystring.parse('name=scott,course=jade,course=node,form=')
{ name: 'scott,course=jade,course=node,form=' }
```
```
> querystring.parse('name=scott,course=jade,course=node,form:',',',':')
{ 'name=scott': '',
  'course=jade': '',
  'course=node': '',
  form: '' }
  
  ```
  ```
> querystring.parse('name:scott,course:jade,course:node,form:',',',':')
{ name: 'scott', course: [ 'jade', 'node' ], form: '' }
```
```
> querystring.parse('name:scott,course:jade,course:node,form:',',',':')
{ name: 'scott', course: [ 'jade', 'node' ], form: '' }
```

- querystring.escape()转义

```
> querystring.escape('<哈哈>')
'%3C%E5%93%88%E5%93%88%3E'
```

- querystring.unescape()反转义

```
> querystring.unescape('%3C%E5%93%88%E5%93%88%3E')
'<哈哈>'
```

## HTTP知识

### HTTP请求的过程

（1）**浏览器先搜索自身的DNS缓存**（查看chrome浏览器缓存方法```chrome://net-internals/#dns```）

（2）**操作系统搜索自身的DNS缓存**（浏览器没有找到缓存或者缓存已经失效）

（3）**读取本地的HOST文件**

（4）**浏览器发起一个DNS的一个系统调用**（宽带运营商服务器查看本身缓存-->运营商服务器发起一个迭代DNS解析的请求-->运营商服务器把结果返回操作系统内核同时缓存起来操作系统内核把结果返回浏览器-->浏器就拿到了www.imooc.com的IP地址)

（5）**浏览器获得域名对应的IP地址后，发起HTTP“三次握手”。**

**（6）TCP/IP链接建立起来后，浏览器就可以向服务器发送HTTP请求了。**

（7）**服务器端接受到了这个请求，根据路径参数，经过后端的一些处理之后，把处理后的结果数据返回给浏览器，比如页面完整的html代码等返回给浏览器。**

**（8）浏览器拿到了完整的html代码后，在解析和渲染这个页面的时候，里面的JS,CSS,图片静态资源，他们同样也是一个个http请求，都要经过上面的主要七个步骤。**

**（9）浏览器根据拿到的资源对页面进行渲染，最终把一个完整的页面呈现给了用户。**

---
HTTP请求可以拆分成**请求**和**响应**，两者都是由**http头**和**正文信息**组成

- http头

发送一些附加的信息：内容类型，服务器发送响应的日期，HTTP状态码

- 正文信息

用户提交的表达数据

### 请求的方法

- GET 获取数据
- POST 提交数据
- PUT  更新资源
- DELETE 删除资源
- HEAD 不用传输全部内容即可获取源信息
- TRACE
- OPTIONS

### HTTP状态码

- 1xx：接受

- 2xx：成功
  - 200：ok；

- 3xx：重定向

- 4xx：客户端语法错误
  - 401：请求没有经过授权；
  - 403：服务器收到请求，拒绝提供服务；
  - 404：没找到；

- 5xx：服务器端错误
  - 500：服务器发生未知错误；
  - 503：服务器不处理，过段时间；

### HTTP事件回调

**HTTP概念进阶**
- 什么是回调
- 什么是同步/异步
- 什么是I/O
- 什么是单线程/多线程
- 什么是阻塞/非阻塞
- 什么是事件
- 什么是事件驱动
- 什么是基于事件驱动的回调
- 什么是事件循环
- 什么是作用域
- 什么是上下文

### HTTP服务启动


```
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Nodejs');
    res.end();
   }).listen(2015)
```

- createServer 创建服务器


## HTTP-get/request

http.request(options[, callback])


**常用参数**

- host
- hostname
- port
- localAddress
- socketPath
- method
- path
- headers
- auth
- agent
- keepAlive
- keepAliveMsecs

## Promise

### Promise学习什么
- Es6的Promise 语言标准，Promise/A+规范
- 如何使用
- 在什么场景下使用

### Promise对象的三种规范
- 未完成（pending）
- 已完成（fulfilled）
- 失败（rejected）

### Promise A与A+不同点
- A+规范通过术语thenable来区分promise对象
- A+定义onFulfilled/onRejected必须是作为函数来调用，而且调用过程必须是异步的
- A+严格定义了then方法链式调用时onFulfilled/onRejected的调用顺序

### Promise then方法


```
promiseObj.then(onFulfilled, onRejected)

onFulfilled = function(value) {
    return promiseObj2
}

onRejected = function(err){}
```

## Buffer实例对象
- buffer[index]
- buffer.length
- buffer.write(string, offset=0, length, encoding='utf-8')
- buffer.toString(encoding, start=0, end=buffer.length)
- buffer.copy(target, tStart, sEnd=buffer.length)
- buffer.slice(start, end)
- buffer.compare(otherBuffer)
- buffer.equals(otherBuffer)
- buffer.fill(value, offset, end)


```
192:crawler-by-node qilongli$ node
> Buffer
{ [Function: Buffer]
  poolSize: 8192,
  from: [Function],
  alloc: [Function],
  allocUnsafe: [Function],
  allocUnsafeSlow: [Function],
  isBuffer: [Function: isBuffer],
  compare: [Function: compare],
  isEncoding: [Function],
  concat: [Function],
  byteLength: [Function: byteLength] }
```


```
> new Buffer('Hello 慕课网');
<Buffer 48 65 6c 6c 6f 20 e6 85 95 e8 af be e7 bd 91>
```


```
> new Buffer('Hello 慕课网','base64');
<Buffer 1d e9 65 a1 44>
```


```
> var buf = new Buffer(8);
undefined
> buf.length
8
```


```
> var buf = new Buffer('12345678');console.log(buf);
<Buffer 31 32 33 34 35 36 37 38>
undefined
```



```
> var buf = new Buffer(7);buf.write('12345678');console.log(buf);
<Buffer 31 32 33 34 35 36 37>
undefined
```


```
> var buf = new Buffer([1,2,3,4]);console.log(buf);
<Buffer 01 02 03 04>
undefined
```


```
> console.log(buf[1]);
2
undefined
```


```
> var buf = new Buffer([1,2.33,3.11,4]);console.log(buf);
<Buffer 01 02 03 04>
undefined
```

```
> console.log(buf[1]);
2
undefined
```


```
192:crawler-by-node qilongli$ node
```
```
> var buf = new Buffer('Hello 慕课网')
undefined
```
```
> buf.length
15
```
```
> buf.write('Hi 慕课网')
12
```


```
> buf.toString()
'Hi 慕课网网'
```
```
> buf.length
15
```
```
> buf.write(' ImoocImoocImooc', 2, 16)
13

```
```
> buf.toString()
'Hi ImoocImoocIm'
```

```
> var buf = new Buffer('Hello Imooc')
undefined
> buf.length
11
> var buf2 = new Buffer(5)
undefined
> buf.copy(buf2)
5
> buf2.toString()
'Hello'
> buf.copy(buf2, 0, 6, 11)
5
> buf2.toString()
'Imooc'
```


```
192:crawler-by-node qilongli$ node
> var buf = new Buffer('imooc');
undefined
> var str = buf.toString('base64');
undefined
> str
'aW1vb2M='
> var buf = new Buffer('aW1vb2M=', 'base64')
undefined
> var str = buf.toString()
undefined
> str
'imooc'
> var buf = new Buffer('aW1vb2M=', 'base64')
undefined
> var str = buf.toString('hex')
undefined
> str
'696d6f6f63'
> var buf = new Buffer('696d6f6f63', 'hex')
undefined
> var str = buf.toString('utf8')
undefined
> str
'imooc'
```

## Stream流
种类(Readable Writable Duplex Transform)