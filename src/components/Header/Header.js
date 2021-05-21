import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useMediaQuery } from "react-responsive";
import "./Header.css";

function Header(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [menuOpened, setMenuOpened] = React.useState(false);

  function headerMenuClick() {
    setMenuOpened(!menuOpened);
  }

  return (
    <header className="header header_theme_dark">
      <div className="header__content page__header">
        <img className="logo header__logo" src={logo} alt="Логотип дипломного проекта" />
        {!props.loggedIn ? (
          <div className="header__auth">
            <Link to="/signup" className="page__link page__link_color_white header__signup">
              Регистрация
            </Link>
            <button type="button" className="button button_theme_green header__signin">
              <Link to="/signin" className="page__link page__link_color_black">
                Войти
              </Link>
            </button>
          </div>
        ) : isMobile ? (
          <>
            <div
              className={
                menuOpened ? "header__variable header__variable_opened" : "header__variable"
              }
            >
              {props.children}
            </div>
            <div className="header__appbar">
              <img className="logo header__logo" src={logo} alt="Логотип" />
              <button
                className={
                  menuOpened
                    ? "button button-close header__menu"
                    : "button button-menu header__menu"
                }
                onClick={headerMenuClick}
              ></button>
            </div>
          </>
        ) : (
          <nav className="nav header__nav">
            <ul className="nav__list">
              <li className="header__nav-item">
                <Link to="/movies" className="page__link page__link_color_white">
                  Фильмы
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/saved-movies" className="page__link page__link_color_white">
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <button className="account button">
              <Link to="/profile" className="page__link page__link_color_white account__link">
                Аккаунт
              </Link>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
