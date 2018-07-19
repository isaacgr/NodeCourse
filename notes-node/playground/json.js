// const obj = {
//   name: 'Isaac'
// }
//
// const stringObj = JSON.stringify(obj)
// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name": "Isaac", "age": 26}'
// const person = JSON.parse(personString)
// console.log(typeof person);
// console.log(person);

const fs = require('fs')

const originalNote = {
  title: 'some title',
  body: 'some body'
}

const originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString)

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString)
console.log(note.title);
