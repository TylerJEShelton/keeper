import React, { useState } from 'react';

export default function CreateArea(props) {
  const { addNewNote } = props;

  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  function handleChange(event) {
    const inputType = event.target.name;
    const enteredText = event.target.value;
    if (inputType === 'title') {
      setInputTitle(enteredText);
    } else if (inputType === 'content') {
      setInputContent(enteredText);
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name='title'
          placeholder='Title'
          value={inputTitle}
        />
        <textarea
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows='3'
          value={inputContent}
        />
        <button
          onClick={e => {
            addNewNote(e, inputTitle, inputContent);
            setInputTitle('');
            setInputContent('');
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
