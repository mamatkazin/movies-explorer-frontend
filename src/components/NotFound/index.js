import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function NotFound(props) {
  return (
    <div className='page'>
      <main className='content'>
        <section className='page__not-found'>
          <div className='not-found'>
            <div className='not-found__block'>
              <h1 className='not-found__title'>404</h1>
              <p className='not-found__text'>Страница не найдена</p>
            </div>
            <Link to='/' className='page__link not-found__link'>
              Назад
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NotFound;
