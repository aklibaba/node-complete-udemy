/**
 *
 * Created by Aleksander on 2017-06-30.
 */
console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const userName = os.userInfo()['username'];

const result = notes.addNote();
console.log(result);

const number = notes.add(1,-2);
console.log(number);

fs.appendFile('greetings.txt', `Hello ${userName}, you are `, err => {
  if (err) {console.log('Unable to write to file'); return }
  console.log('The "data to append" was appended to file!');
});

