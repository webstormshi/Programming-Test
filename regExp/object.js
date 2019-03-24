/** 
 * g 全局搜索替换 global
 * i 忽略大小写 ignore
 * m 多行搜索 multipart
*/

/** 
 * 正则对象属性
 * global: 是否全文搜索，默认值为false
 * ignore case：是否大小写敏感，默认值是false
 * multiline：多行搜索，默认值是false
 * lastIndex：当前表达式匹配内容的最后一个字符的下一个位置
 * sourse：正则表达式的文本字符串
*/

var reg1 = /\w/;
var reg2 = /\w/gim;

RegExp.prototype.test(str)
reg1.test('wef')

RegExp.prototype.exec(str);

RegExp.prototype.search(str);



var mulSort = "@123\n@234\n@987";

mulSort.replace(/^@\d/g, 'Q')

var reg = new RegExp(/\bis\b/);

// var str = "He is a boy, She is a girl.";

var str = "He is a boy, Is She a girl.";

var res = str.replace(reg, 'IS');

var res1 = str.replace(/\bis\b/g, 'IS');

var res2 = str.replace(/\bis\b/gi, 'IS');

console.log('res', res);
console.log('res1', res1);
console.log('res2', res2);



