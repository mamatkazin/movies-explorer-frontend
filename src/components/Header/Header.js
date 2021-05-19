import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useMediaQuery } from 'react-responsive';
import './Header.css';

function Header(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const [menuOpened, setMenuOpened] = React.useState(false);

  function headerMenuClick() {
    setMenuOpened(!menuOpened);
  }

  return (
    <header className='header'>
      <div className='header__content page__header'>
        <img
          className='logo header__logo'
          src={logo}
          alt='Логотип дипломного проекта'
        />
        {!props.loggedIn ? (
          <div className='header__auth'>
            <Link to='/signup' className='page__link header__signup'>
              Регистрация
            </Link>
            <Link to="/signin" className="button button_theme_green header__signin">
              Войти
            </Link>
            {/* <button
              type='button'
              className='button button_theme_green header__signin'
            >
              Войти
            </button> */}
          </div>
        ) : isMobile ? (
          <>
            <div
              className={
                menuOpened
                  ? 'header__variable header__variable_opened'
                  : 'header__variable'
              }
            >
              {props.children}
            </div>
            <div className='header__appbar'>
              <img className='logo header__logo' src={logo} alt='Логотип' />
              <button
                className={
                  menuOpened
                    ? 'button button-close header__menu'
                    : 'button button-menu header__menu'
                }
                onClick={headerMenuClick}
              ></button>
            </div>
          </>
        ) : (
          <>
            <div className='header__variable'>{props.children}</div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
