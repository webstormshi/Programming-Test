## 判断数据类型的几种方式
- typeof
- instanceof
- constructor
- prototype

#### typeof 判断数据类型
```
alert(typeof a)   ------------> string
alert(typeof b)   ------------> number
alert(typeof c)   ------------> object
alert(typeof d)   ------------> object
alert(typeof e)   ------------> function
alert(typeof f)   ------------> function
其中typeof返回的类型都是字符串形式，需注意，例如：
alert(typeof a == "string") -------------> true
alert(typeof a == String) ---------------> false
另外typeof 可以判断function的类型；在判断除Object类型的对象时比较方便。
```
注意：当数据类型为数组,json等复杂类型时，无法判断

#### instanceof 判断数据类型
```
alert(c instanceof Array) ---------------> true
alert(d instanceof Date) 
alert(f instanceof Function) ------------> true
alert(f instanceof function) ------------> false
```
注意：instanceof 后面一定要是对象类型，并且大小写不能错，该方法适合一些条件选择或分支。

#### constructor
```
alert(c.constructor === Array) ----------> true
alert(d.constructor === Date) -----------> true
alert(e.constructor === Function) -------> true
```
注意： constructor 在类继承时会出错
```
eg：
      function A(){};
      function B(){};
      A.prototype = new B(); //A继承自B
      var aObj = new A();
      alert(aobj.constructor === B) -----------> true;
      alert(aobj.constructor === A) -----------> false;
而instanceof方法不会出现该问题，对象直接继承和间接继承的都会报true：
      alert(aobj instanceof B) ----------------> true;
      alert(aobj instanceof B) ----------------> true;
言归正传，解决construtor的问题通常是让对象的constructor手动指向自己：
      aobj.constructor = A; //将自己的类赋值给对象的constructor属性
      alert(aobj.constructor === A) -----------> true;
      alert(aobj.constructor === B) -----------> false; //基类不会报true了;
```

#### prototype判断数据类型
```
alert(Object.prototype.toString.call(a) === ‘[object String]’) -------> true;
alert(Object.prototype.toString.call(b) === ‘[object Number]’) -------> true;
alert(Object.prototype.toString.call(c) === ‘[object Array]’) -------> true;
alert(Object.prototype.toString.call(d) === ‘[object Date]’) -------> true;
alert(Object.prototype.toString.call(e) === ‘[object Function]’) -------> true;
alert(Object.prototype.toString.call(f) === ‘[object Function]’) -------> true;
```
注意：大小写不能写错，比较麻烦，但胜在通用。