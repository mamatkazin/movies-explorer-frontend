import React from 'react';
import { Link } from 'react-scroll';
import './NavTab.css';

function NavTab(props) {
  return (
    <nav className='nav navtab'>
      <ul className='nav__list navtab__list'>
        <li className='navtab__item'>
          <Link
            to='aboutProject'
            className='navtab__link page__link page__link_color_white page__link_text-decoration_underline'
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
          >
            О проекте
          </Link>
        </li>
        <li className='navtab__item'>
          <Link
            to='technology'
            className='navtab__link page__link page__link_color_white page__link_text-decoration_underline'
            spy={true}
            smooth={true}
            duration={1000}
          >
            Технологии
          </Link>
        </li>
        <li className='navtab__item'>
          <Link
            to='aboutMe'
            className='navtab__link page__link page__link_color_white page__link_text-decoration_underline'
            spy={true}
            smooth={true}
            duration={1000}
          >
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
