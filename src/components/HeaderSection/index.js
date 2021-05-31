import React from 'react';
import './index.css';

function HeaderSection(props) {
  return (
    <div className={`header-section ${props.className}`}>
      <h2 className='header-section__title'>{props.title}</h2>
    </div>
  );
}

export default HeaderSection;
