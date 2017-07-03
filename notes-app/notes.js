/**
 * Created by Aleksander on 2017-06-30.
 */
console.log('Staring notes.js');

const fs = require('fs');

const notes = exports;

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

notes.addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);

  //only add new note if it is not a duplicate
  if (duplicateNotes.length > 0) {
    console.log(`A note with a title of ${note.title} already exists`);
    return;
  }

  notes.push(note);
  saveNotes(notes);
  console.log(`Succesfully added note`);
  console.log(`---`);
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  return note;
};

notes.getAll = () => {
  console.log('Getting all notes');
};

notes.fetch = (title) => {
  console.log('Getting note', title);
};

notes.remove = (title) => {
  let notes = fetchNotes();
  notes = notes.filter(note => note.title !== title);
  saveNotes(notes);
  console.log(`removed note: ${title}`);
};
