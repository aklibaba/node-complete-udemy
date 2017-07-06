console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 2);


setTimeout(() => {
  Promise.resolve().then(function() {
    console.log('promise1');
  }).then(function() {
    setTimeout(() => {
    console.log('promise2');
    }, 2);
  });
}, 1);

console.log('script end');


