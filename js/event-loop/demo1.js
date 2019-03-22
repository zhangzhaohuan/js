// https://juejin.im/post/5c3d8956e51d4511dc72c200
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});
console.log('script end');

/**
 *总结:每次执行完宏任务,  */ 