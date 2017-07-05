/**
 * Created by Aleksander on 2017-06-30.
 */
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
  return note;
};

notes.getAll = () => {
  return fetchNotes();
};

notes.getNote = (title) => {
  const notes = fetchNotes();
  return notes.find(note => note.title === title);
};

notes.remove = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length > filteredNotes.length;
};

notes.logNote = (note) => {
  debugger;
  console.log(`-----`);
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
