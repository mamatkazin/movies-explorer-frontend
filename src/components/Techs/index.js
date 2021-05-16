import React from 'react';
import HeaderSection from '../HeaderSection';
import TextBlockSection from '../TextBlockSection';
import './index.css';

function Techs(props) {
  return (
    <section className='techs page__techs page__content'>
      <HeaderSection title='Технологии' className='techs__header' />
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className='techs__blocks'>
        <li className='techs__blocks-item'>HTML</li>
        <li className='techs__blocks-item'>CSS</li>
        <li className='techs__blocks-item'>JS</li>
        <li className='techs__blocks-item'>React</li>
        <li className='techs__blocks-item'>Git</li>
        <li className='techs__blocks-item'>Express.js</li>
        <li className='techs__blocks-item'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
