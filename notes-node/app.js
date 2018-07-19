console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;

let command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if (!note) {
    console.log('Note title already taken!');
  } else {
    notes.logNote(note)
  }
} else if (command === 'list') {
  const notes = notes.getAll();
} else if (command === 'read') {
  const note = notes.getNote(argv.title)
  if (!note) {
    console.log('Note not found');
  } else {
    notes.logNote(note)
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title)
  const message = noteRemoved ? 'Note was removed' : 'Note not removed';
  console.log(message);
} else {
  console.log('Command not recognized');
}
