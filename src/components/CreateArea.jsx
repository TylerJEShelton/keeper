import React, { useState } from 'react';

export default function CreateArea(props) {
  const { addNewNote } = props;

  const [inputNote, setInputNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const inputType = event.target.name;
    const enteredText = event.target.value;
    if (inputType === 'title') {
      setInputNote(prev => {
        return {
          title: enteredText,
          content: prev.content,
        };
      });
    } else if (inputType === 'content') {
      setInputNote(prev => {
        return {
          title: prev.title,
          content: enteredText,
        };
      });
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name='title'
          placeholder='Title'
          value={inputNote.title}
        />
        <textarea
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows='3'
          value={inputNote.content}
        />
        <button
          onClick={e => {
            addNewNote(e, inputNote.title, inputNote.content);
            setInputNote({ title: '', content: '' });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
