import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Note(props) {
  const { title, id, content, deleteNote } = props;

  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={e => {
          deleteNote(e, id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
