import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Footer(props) {
  return (
    <footer className='footer'>
      <div className='page__content page__footer'>
        <p className='footer__text'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__blocks'>
          <p className='footer__copyright'>© 2020</p>
          <ul className='footer__social-list'>
            <li className='footer__social-item'>Яндекс.Практикум</li>
            <li className='footer__social-item'>
              <Link to='#' className='footer__link page__link'>
                Github
              </Link>
            </li>
            <li className='footer__social-item'>
              <Link to='#' className='footer__link page__link'>
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
