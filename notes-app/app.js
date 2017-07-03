/**
 *
 * Created by Aleksander on 2017-06-30.
 */
console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs')['argv'];

const notes = require('./notes');
const command = argv['_'][0];


if (command === 'add') {
  const note = notes.addNote(argv['title'], argv['body'])
}
else if (command === 'list') {
  notes.getAll();
}
else if (command === 'fetch') {
  notes.fetch(argv['title'])
}
else if (command === 'remove') {
  notes.remove(argv['title'])
}
else {
  console.log('Command not recognized');
}
