const utils = require('./utils');
const expect = require('expect');


it('should add 2 numbers', () => {

  const res = utils.add(5, 5);
  expect(res).toBe(10, `expected 10, got ${res}`).toBeA('number');

});

it('should square a number', () => {
  const res = utils.square(5);

  expect(res).toBe(25).toBeA('number');

});

it('should expect some value', () => {
  expect({name: "Alex"}).toEqual({name: "Alex"});
});

it('should include', () => {
  expect([2, 3, 4]).toExclude(1);
});

it('should include a key', () => {
  expect({
    name: "Alex",
    age: 30,
    location: "Warsaw"
  }).toExclude({
    age: 29
  });
});


it('should verify first and last names are set', () => {
  const userAlex = {
    "loaction": "Warsaw",
    "interests": [
      "football",
      "gymnastics",
      "salsa"
    ]
  };


  expect(utils.setName(userAlex, "Aleksander Moloniewicz")).toBeA('object').toInclude({
    firstName: "Aleksander",
    lastName: "Moloniewicz"
  })

});