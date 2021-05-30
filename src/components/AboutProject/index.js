import React from 'react';
import HeaderSection from '../HeaderSection';
import TextBlockSection from '../TextBlockSection';
import './index.css';

function AboutProject(props) {
  return (
    <section
      id='aboutProject'
      className='about-project page__about-project page__content'
    >
      <HeaderSection title='О проекте' className='about-project__header' />
      <div className='about-project__blocks'>
        <TextBlockSection title='Дипломный проект включал 5 этапов'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </TextBlockSection>
        <TextBlockSection title='На выполнение диплома ушло 5 недель'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </TextBlockSection>
      </div>
      <div className='about-project__timeless'>
        <div className='about-project__timeless-item about-project__timeless-first-part'>
          1 неделя
        </div>
        <div className='about-project__timeless-item about-project__timeless-second-part'>
          4 недели
        </div>
        <div className='about-project__timeless-item about-project__timeless-text'>
          Back-end
        </div>
        <div className='about-project__timeless-item about-project__timeless-text'>
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
