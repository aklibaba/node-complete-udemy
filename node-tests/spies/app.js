/**
 * Created by Aleksander on 2017-07-14.
 */
var db = require('./db');

exports.handleSignup = (email, password) => {
  //check if email already exists

  //save user to db
  db.saveUser({
    email,
    password
  })
  //send the welcome email
};