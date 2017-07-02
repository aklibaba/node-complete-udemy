// const obj = {
//   name: "Andrew"
// };
//
// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = `
// {
//   "name": "Alex",
//   "age": 30,
//   "city": "Warsaw"
// }`;
//
// const personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj.name);

const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body'
};

originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);