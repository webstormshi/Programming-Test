## Cookie和Session的知识点总结
<b>Cookie</b>是服务器在本地机器存储的一小段文本本跟随请求到达同一台服务器，是在客户端保持状态的解决方案。
<b></b>
#### Cookie的类型
- ##### <b>会话Cookie</b>
    会话cookie一种临时cookie，它记录了用户访问站点时的设置和偏好，当用户退出浏览器时，会话cookie就会被删除。

- ##### <b>持久Cookie</b>
    持久cookie的生存时间更长一些，它存储在用户的硬盘上，浏览器退出或计算机重启时他们仍然存在。

<b>说明：</b><b>会话cookie</b>与<b>持久cookie</b>之间的唯一区别就是它们的过期时间。如果设置了Discard参数（cookie版本1中的参数），或者没有设置Expires或者Max-Age参数（cookie版本1中的参数）来说明扩展的过期时间，这个cookie就是一个会话cookie。

