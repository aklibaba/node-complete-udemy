/**
 * Created by Aleksander on 2017-06-30.
 */
console.log('Staring notes.js');


const notes = exports;

notes.addNote = () => {
  console.log('Add Note');
  return 'New note';
};

notes.add = function (a, b) {
  return a + b;
};
