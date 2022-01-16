import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';
import Note from './Note';
import notesFile from '../notes';

export default function App() {
  const [notes, setNotes] = useState([...notesFile]);

  function addNote(event, newTitle, newContent) {
    event.preventDefault();
    setNotes(prev => {
      return [
        ...prev,
        {
          key: prev[prev.length - 1].key + 1,
          title: newTitle,
          content: newContent,
        },
      ];
    });
  }

  function deleteNote(event, id) {
    event.preventDefault();
    setNotes(prev => {
      return prev.filter(note => {
        return note.key !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNewNote={addNote} />
      {notes.map(note => (
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
