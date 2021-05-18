import React from 'react';
import { Link } from "react-router-dom";
import HeaderSection from '../HeaderSection';
import student from '../../images/student.png';
import './index.css';

function AboutMe(props) {
  return (
    <section id='aboutMe' className='about-me'>
      <div className='page__content page__about-me'>
        <HeaderSection title='Студент' className='about-me__header' />
        <div className='about-me__blocks'>
          <div className='about-me__blocks-item'>
            <h3 className='about-me__name'>Виталий</h3>
            <h4 className='about-me__title'>Фронтенд-разработчик, 30 лет</h4>
            <p className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className='about-me__social-list'>
              <li className='about-me__social-item'>
                <Link to="#" className="about-me__link page__link">
                Facebook
                </Link>
              </li>
              <li className='about-me__social-item'>
                <Link to="#" className="about-me__link page__link">
                  Github
                </Link></li>
            </ul>
          </div>
          <img className='about-me__blocks-item' src={student} alt='Портрет разработчика'></img>
        </div>
        <p className='about-me__portfolio'>Портфолио</p>
        <ul className='about-me__sites'>
          <li className='about-me__sites-item'>
            <Link to="#" className="about-me__link page__link">
              Статичный сайт
            </Link>
            <Link to="#" className="about-me__link page__link">
              &#8599;
            </Link>
          </li>
          <li className='about-me__sites-item'>
            <Link to="#" className="about-me__link page__link">
              Адаптивный сайт
            </Link>
            <Link to="#" className="about-me__link page__link">
              &#8599;
            </Link>
          </li>
          <li className='about-me__sites-item'>
            <Link to="#" className="about-me__link page__link">
              Одностраничное приложение
            </Link>
            <Link to="#" className="about-me__link page__link">
              &#8599;
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
