import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab(props) {
  return (
    <nav class='navtab'>
      <ul class='navtab__list'>
        <li class='navtab__item'>
          <Link to='#aboutProject' className='navtab__link page__link'>
            О проекте
          </Link>
        </li>
        <li class='navtab__item'>
          <Link to='#technology' className='navtab__link page__link'>
            Технологии
          </Link>
        </li>
        <li class='navtab__item'>
          <Link to='#aboutMe' className='navtab__link page__link'>
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
