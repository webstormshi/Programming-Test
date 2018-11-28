## 常用的鉴权方式笔记
- HTTP Basic Authentication

- session-cookie

- Token 验证

- OAuth (开放授权)

### 一、 HTTP Basic Authentication
这种授权方式是浏览器遵守http协议实现的基本授权方式,HTTP协议进行通信的过程中，HTTP协议定义了基本认证认证允许HTTP服务器对客户端进行用户身份证的方法。
由于有把用户名密码暴露给第三方客户端的风险，在生产环境下被使用的越来越少。
#### 认证过程：
  + 客户端向服务器请求数据，请求的内容可能是一个网页或者是一个ajax异步请求，此时，假设客户端尚未被验证，则客户端提供如下请求至服务器:
  ```
  Get /index.html HTTP/1.0 
  Host:www.google.com
  ```
  + 服务器向客户端发送验证请求代码401,（WWW-Authenticate: Basic realm=”google.com”这句话是关键，如果没有客户端不会弹出用户名和密码输入界面）服务器返回的数据大抵如下：
  ```
  HTTP/1.0 401 Unauthorised
  Server: SokEvo/1.0 
  WWW-Authenticate: Basic realm=”google.com” 
  Content-Type: text/html 
  Content-Length: xxx
  ```
  + 当符合http1.0或1.1规范的客户端（如IE，FIREFOX）收到401返回值时，将自动弹出一个登录窗口，要求用户输入用户名和密码。
  +  用户输入用户名和密码后，将用户名及密码以BASE64加密方式加密，并将密文放入前一条请求信息中，则客户端发送的第一条请求信息则变成如下内容：
  ```
  Get /index.html HTTP/1.0 
  Host:www.google.com 
  Authorization: Basic d2FuZzp3YW5n
  ```
  注：d2FuZzp3YW5n表示加密后的用户名及密码（用户名：密码 然后通过base64加密，加密过程是浏览器默认的行为，不需要我们人为加密，我们只需要输入用户名密码即可
  + 服务器收到上述请求信息后，将Authorization字段后的用户信息取出、解密，将解密后的用户名及密码与用户数据库进行比较验证，如用户名及密码正确，服务器则根据请求，将所请求资源发送给客户端

  效果： 
  客户端未未认证的时候，会弹出用户名密码输入框，这个时候请求时属于pending状态，这个时候其实服务当用户输入用户名密码的时候客户端会再次发送带Authentication头的请求。

  <img src='https://img-blog.csdn.net/20171205091215819?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2FuZzgzOTMwNTkzOQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast' />

  <img src='https://img-blog.csdn.net/20171205091443073?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2FuZzgzOTMwNTkzOQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast' />
  server.js
  
  ```
    let express = require("express");
    let app = express();

      app.use(express.static(__dirname+'/public'));

      app.get("/Authentication_base",function(req,res){
          console.log('req.headers.authorization:',req.headers)
          if(!req.headers.authorization){
              res.set({
                'WWW-Authenticate':'Basic realm="wang"'
              });
              res.status(401).end();
          }else{
              let base64 = req.headers.authorization.split(" ")[1];
              let userPass = new Buffer(base64, 'base64').toString().split(":");
              let user = userPass[0];
              let pass = userPass[1];
              if(user=="wang"&&pass="wang"){
                  res.end("OK");
              }else{
                  res.status(401).end();
              }

          }

      })

  app.listen(9090)
  ```
  index.html
  ```
    <!DOCTYPE html>
      <html>
          <head>
              <meta charset="UTF-8">
              <title>HTTP Basic Authentication</title>
          </head>
          <body>
              <div></div>
              <script src="js/jquery-3.2.1.js"></script>
              <script>
                  $(function(){
                    send('./Authentication_base');
                  })
                  var send = function(url){
                              $.ajax({  
                              url : url,  
                              method : 'GET',  
                          });
                }
              </script>
          </body>
      </html>
  ```
  当然有登陆就有注销，我们会发现当我们认证成功后每次请求请求头都会带上Authentication及里面的内容，那么如何做到让这次登陆失效的？

  网上查了半天，目前最有效的方式就是在注销操作的时候，专门在服务器设置一个专门的注销账号，当接收到的Authentication信息为注销用户名密码的时候纠就带便注销成功了，而客户端在注销操作的时候，手动的的去修改请求头重的Authentication，将他设置未服务器默认的注销账号和密码。

  通过上面的简单讲解 其实我们已经可以返现这种验证方式的缺陷加密方式简单，仅仅是base64加密，这种加密方式是可逆的。同时在每个请求的头上都会附带上用户名和密码信息，这样在外网是很容易被嗅探器探测到的。

总结:

  正式因为这样，这种加密方式一般多被用在内部安全性要求不高的的系统上，只是相对的多，总的来说现在使用这种鉴权比较少了。如果项目需要部署在公网上，这种方式不推荐，当然你也可以和SSL来加密传输，这样会好一点，这个如果我后面有时间来研究一下。
- session-cookie
第二种这个方式是利用服务器端的session（会话）和浏览器端的cookie来实现前后端的认证，由于http请求时是无状态的，服务器正常情况下是不知道当前请求之前有没有来过，这个时候我们如果要记录状态，就需要在服务器端创建一个会话(seesion),将同一个客户端的请求都维护在各自得会会话中，每当请求到达服务器端的时候，先去查一下该客户端有没有在服务器端创建seesion，如果有则已经认证成功了，否则就没有认证。 
session-cookie认证主要分四步： 
  1，服务器在接受客户端首次访问时在服务器端创建seesion，然后保存seesion(我们可以将seesion保存在内存中，也可以保存在redis中，推荐使用后者)，然后给这个session生成一个唯一的标识字符串,然后在响应头中种下这个唯一标识字符串。 
   2.签名。这一步只是对sid进行加密处理，服务端会根据这个secret密钥进行解密。（非必需步骤） 
  3.浏览器中收到请求响应的时候会解析响应头，然后将sid保存在本地cookie中，浏览器在下次http请求de 请求头中会带上该域名下的cookie信息， 
   4.服务器在接受客户端请求时会去解析请求头cookie中的sid，然后根据这个sid去找服务器端保存的该客户端的session，然后判断该请求是否合法。
<img src='https://img-blog.csdn.net/20171216105919887?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2FuZzgzOTMwNTkzOQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast' />
server.js
```
var express = require('express');
var RedisStore = require('connect-redis')(express.session);
var app = express();
var secret  = "wang839305939"
// 设置 Cookie
app.use(express.cookieParser(secret));

// 设置 Session
app.use(express.session({
  store: new RedisStore({
    host: "127.0.0.1",
    port: 6379,
    db: "session_db"
  }),
  secret: secret
}))

app.get("/", function(req, res) {
  var session = req.session;
  session.time= session.time|| 0;
  var n = session.time++;
  res.send('hello, session id:' + session.id + ' count:' + n);
});

app.listen(9080);
```
- Token 验证

- OAuth (开放授权)

### 二、session-cookie



### 参考博客
[前后端常见的几种鉴权方式](https://blog.csdn.net/wang839305939/article/details/78713124)
[几种常用的认证机制](https://blog.csdn.net/sundehui01/article/details/54799255)