/**模拟call的实现 */
/**
 * https://blog.csdn.net/qq_40479190/article/details/78324270
 */
//ES5写法
Function.prototype.callself = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  var result = eval('context.fn(' + args + ')');
  delete context.fn
  return result;
}

// 测试一下
var value = 2;

var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.callself(null); // 2

console.log(bar.callself(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
//ES6写法
Function.prototype.mycall = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
}



// 第一版
Function.prototype.mycall = function(context) {
  var context = context || window;
  // 首先要获取调用call的函数，用this可以获取
  context.fn = this;
  context.fn();
  delete context.fn;
}

// 测试一下
var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call2(foo); // 1

