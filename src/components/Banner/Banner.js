import React from 'react';
import './Banner.css';

function Banner(props) {
  return (
    <div className='banner'>
      <div className='banner__content'>
        <h1 className='banner__heading'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </div>
  );
}

export default Banner;
