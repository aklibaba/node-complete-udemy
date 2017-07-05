/**
 *
 * Created by Aleksander on 2017-06-30.
 */

const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs')
  .command('add', 'Add a new note', {
    'title': {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'The content of the note',
      demand: true,
      alias: 'b'
    }
  })
  .help()
  ['argv'];

const notes = require('./notes');
const command = argv['_'][0];


if (command === 'add') {
  const note = notes.addNote(argv['title'], argv['body']);
  if (note) {
    console.log(`Succesfully added note`);
    notes.logNote(note);
  }
}
else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => notes.logNote(note));
}
else if (command === 'read') {
  const note = notes.getNote(argv['title']);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
}
else if (command === 'remove') {
  const noteRemoved = notes.remove(argv['title']);
  const message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}
else {
  console.log('Command not recognized');
}
