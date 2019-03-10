/** 
 * JS默认继承机制
 * call apply bind 
*/

call();
apply();
prototype  // 默认继承

function Phone() {

}
Phone.prototype = new Object();  // JS默认继承
new Phone().toString();

Phone.prototype.__proto__ === Object.prototype;

var obj = {};

