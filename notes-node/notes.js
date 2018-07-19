console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body
  }
  const duplicateNotes = notes.filter((note) => note.title === title )

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes)
    return note;
  }
}

const getAll = () => {
  const notes = fetchNotes()

  return notes;
}

const getNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title === title)
  return filteredNotes[0]
}

const removeNote = (title) => {
  const notes = fetchNotes();
  const newNotes = notes.filter((note) => note.title !== title)
  saveNotes(newNotes)

  return notes.length !== newNotes.length
}

const logNote = (note) => {
  console.log(`Note found\n---\nTitle: ${note.title}\nBody: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  logNote,
  removeNote
}
