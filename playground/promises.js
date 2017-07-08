const asyncAdd = function (a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ( typeof a === 'number' && typeof b === 'number' ) {
        resolve(a + b);
      }
      else {
        reject(`Arguments must be numbers`);
      }
    }, 1500)
  })
};

asyncAdd(2, 4)
.then((body) => {
  console.log(`The result is ${body}`);
  return asyncAdd(body, 33)
})
.then(body => {
  console.log(`Result 2 is ${body}`);
})
.catch(err => {
  console.log(err);
});

// const somePromise = new Promise((resolve, reject) => {
//   reject('The promise failed');
// });

// somePromise.then((body) => {
//   console.log(body);
// }, (err) => {
//   console.log(`Error 1: ${err}`);
// }).catch((err) => {
//   console.log(`Error 2: ${err}`);
// });
