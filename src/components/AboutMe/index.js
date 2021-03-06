import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderSection from '../HeaderSection';
import student from '../../images/student.png';
import './index.css';

function AboutMe(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  if (isMobile) {
  }

  return (
    <section id='aboutMe' className='about-me'>
      <div
        className={
          isMobile
            ? 'page__content page__content_width_s page__about-me'
            : 'page__content page__about-me'
        }
      >
        <HeaderSection title='Студент' className='about-me__header' />
        <div className='about-me__blocks'>
          <div className='about-me__blocks-item'>
            <h3 className='about-me__name'>Виталий</h3>
            <h4 className='about-me__title'>Фронтенд-разработчик, 30 лет</h4>
            <p className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className='about-me__social-list'>
              <li className='about-me__social-item'>
                <Link to='#' className='about-me__link page__link'>
                  Facebook
                </Link>
              </li>
              <li className='about-me__social-item'>
                <Link to='#' className='about-me__link page__link'>
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <img
            className='about-me__blocks-item'
            src={student}
            alt='Портрет разработчика'
          ></img>
        </div>
        <p className='about-me__portfolio'>Портфолио</p>
        <ul className='about-me__sites'>
          <li className='about-me__sites-item'>
            <a
              href='https://github.com/mamatkazin/how-to-learn'
              className='about-me__link page__link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Статичный сайт
            </a>
            <a
              href='https://github.com/mamatkazin/how-to-learn'
              className='about-me__link page__link'
              target='_blank'
              rel='noopener noreferrer'
            >
              &#8599;
            </a>
          </li>
          <li className='about-me__sites-item'>
            <a
              href='https://mamatkazin.github.io/russian-travel/index.html'
              className='about-me__link page__link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Адаптивный сайт
            </a>
            <a
              href='https://mamatkazin.github.io/russian-travel/index.html'
              className='about-me__link page__link'
              target='_blank'
              rel='noopener noreferrer'
            >
              &#8599;
            </a>
          </li>
          <li className='about-me__sites-item'>
            <a
              href='https://mamatkazin.github.io/mesto/'
              className='about-me__link page__link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Одностраничное приложение
            </a>
            <a
              href='https://mamatkazin.github.io/mesto/'
              className='about-me__link page__link'
              target='_blank'
              rel='noopener noreferrer'
            >
              &#8599;
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
