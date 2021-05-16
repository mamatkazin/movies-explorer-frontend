import React from 'react';
import './index.css';

function TextBlockSection(props) {
  return (
    <div className='text-block-with-title'>
      <h3 className='text-block-with-title__title'>{props.title}</h3>
      <p className='text-block-with-title__text'>{props.children}</p>
    </div>
  );
}

export default TextBlockSection;
