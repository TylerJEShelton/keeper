import React from 'react';

export default function Note(props) {
  const { title, content } = props;

  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button>DELETE</button>
    </div>
  );
}
