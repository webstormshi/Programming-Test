## 元素符


匹配某一类字符：[abc]
匹配某一类字符取反：[^abc]

范围类：
'vdsv6s8fdfDTRsd9cHU7fv'.replace(/[0-9]/g, '8')
'vdsv6s8fdfDTRsd9cHU7fv'.replace(/[a-zA-Z]/g, 'O')
'vdsv6s8fdfDTRsd9cHU7fv'.replace(/[a-z]/g, 'O')
"2016-08-30".replace(/[-0-9]/g, 'A')

预定义类：
. [^\r\n]  除回车换行符之外的所有字符
\d [0-9]   数字字符
\D [^0-9]  非数字字符
\s [\t\n\x0B\f\r]  空白符
\S [^\t\n\x0B\f\r]  非空白符
\w [a-zA-Z_0-9]  单词字符
\W [^a-zA-Z_0-9] 非单词字符

边界字符：
^ 以xx开始
$ 以xxx结束
\b  单词边界
\B 非单词边界

"@123@asd@".replace(/.@$/g, 'Q')
"@123@asd@".replace(/.@/g, 'Q')

量词：
? 出现0次或者1次
+ 出现一次或者多次
* 出现0次或者多次
{n} 出现n次
{n,m} 出现n到m次
{n,} 至少出现n次
{0,n} 至多出现n次

贪婪模式与非贪婪模式：
\d{3, 6}
12345678
贪婪模式："12345678".replace(/\d{3,6}/g, 'A')
非贪婪模式："12345678".replace(/\d{3,6}?/g, 'A')

分组：
"s234d234c34df".replace(/([a-z]\d*){3}/g, 'X')

或：
Byron | Capser
"ByronpserByrCapser".replace(/Byr(on|Ca)pser/g, 'X')

反向引用：
'2016-11-25'.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$2/$3/$1')

忽略分组：
(\d{4})-(?:\d{2})-(\d-{2})
"ByronpserByrCapser".replace(/Byr(?:on|Ca)pser/g, 'X')

前瞻后顾：
说明：正则表达式是从文本头部向尾部开始解析，文本尾部的方向成为“前”，前瞻就是在正则表达式匹配到规则的时候，向前检查是否符合断言，后顾/后瞻方向相反

