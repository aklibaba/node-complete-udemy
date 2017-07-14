/**
 * Created by Aleksander on 2017-07-12.
 */
const utils = exports;

utils.add = (a, b) => a + b;
utils.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  },100)
};
utils.square = (x) => x * x;

utils.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(utils.square(x))
  },100)
};

utils.setName = (user, fullName) => {
  const names = fullName.split(" ");
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};