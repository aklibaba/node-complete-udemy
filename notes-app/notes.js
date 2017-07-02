/**
 * Created by Aleksander on 2017-06-30.
 */
console.log('Staring notes.js');


const notes = exports;

notes.addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

notes.getAll = () => {
  console.log('Getting all notes');
};

notes.fetch = (title) => {
  console.log('Getting note', title);
};

notes.remove = (title) => {
  console.log('Removing note', title);
};
