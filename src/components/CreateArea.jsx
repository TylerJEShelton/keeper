import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export default function CreateArea(props) {
  const { addNewNote } = props;

  const [inputNote, setInputNote] = useState({
    title: '',
    content: '',
    textClicked: false,
  });

  function handleChange(event) {
    const inputType = event.target.name;
    const enteredText = event.target.value;
    if (inputType === 'title') {
      setInputNote(prev => {
        return {
          title: enteredText,
          content: prev.content,
          textClicked: prev.textClicked,
        };
      });
    } else if (inputType === 'content') {
      setInputNote(prev => {
        return {
          title: prev.title,
          content: enteredText,
          textClicked: prev.textClicked,
        };
      });
    }
  }

  function handleClick() {
    setInputNote(prev => {
      return {
        title: prev.title,
        content: prev.content,
        textClicked: true,
      };
    });
  }

  return (
    <div>
      <form className='create-note'>
        {inputNote.textClicked && (
          <input
            onChange={handleChange}
            name='title'
            placeholder='Title'
            value={inputNote.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name='content'
          placeholder='Take a note...'
          rows={inputNote.textClicked ? '3' : '1'}
          value={inputNote.content}
        />
        <Zoom in={inputNote.textClicked}>
          <Fab
            onClick={e => {
              addNewNote(e, inputNote.title, inputNote.content);
              setInputNote({ title: '', content: '' });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
