import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const location = useLocation();

  const [main, setMain] = React.useState("");
  const [movies, setMovies] = React.useState("");
  const [savedMovies, setSavedMovies] = React.useState("");

  React.useEffect(() => {
    console.log("##1111##", location.pathname);
    switch (location.pathname) {
      case "/":
        setMain("header__nav-item_actived");
        setMovies("");
        setSavedMovies("");
        break;
      case "/movies":
        setMain("");
        setMovies("header__nav-item_actived");
        setSavedMovies("");
        break;
      case "/saved-movies":
        setMain("");
        setMovies("");
        setSavedMovies("header__nav-item_actived");
        break;
      default:
        setMain("");
        setMovies("");
        setSavedMovies("");
        break;
    }
  }, [location]);

  const [menuOpened, setMenuOpened] = React.useState(false);

  function headerMenuClick() {
    setMenuOpened(!menuOpened);
  }

  return (
    <header className={`header header_theme_${props.themeColor}`}>
      {isMobile && menuOpened && <div className="header__cover"></div>}
      <div
        className={
          props.loggedIn && !isMobile
            ? "header__content page__header header__content_justify_start"
            : "header__content page__header"
        }
      >
        <Link to="/" className="page__link">
          <img className="logo header__logo" src={logo} alt="Логотип дипломного проекта" />
        </Link>
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
        ) : (
          <div
            className={isMobile && menuOpened ? "header__menu header__menu_opened" : "header__menu"}
          >
            {/* <div
              className={
                isMobile && menuOpened
                  ? "header__menu-panel header__menu-panel_opened"
                  : "header__menu-panel"
              } */}
            {/* > */}
            {isMobile && (
              <>
                {menuOpened ? (
                  <button
                    className="button header__button-close"
                    onClick={headerMenuClick}
                  ></button>
                ) : (
                  <button
                    className={
                      location.pathname === "/"
                        ? "button header__button-menu header__button-menu_theme_dark"
                        : "button header__button-menu header__button-menu_theme_light"
                    }
                    onClick={headerMenuClick}
                  ></button>
                )}
              </>
            )}
            {(!isMobile || menuOpened) && (
              <nav className="nav header__nav">
                <ul
                  className={
                    isMobile
                      ? "nav__list nav__list_direction_column nav__list_align-items_center"
                      : "nav__list"
                  }
                >
                  {isMobile && (
                    <li className="header__nav-item">
                      <Link to="/" className={`page__link page__link_color_black ${main}`}>
                        Главная
                      </Link>
                    </li>
                  )}
                  <li className="header__nav-item">
                    <Link
                      to="/movies"
                      className={
                        isMobile || props.themeColor === "light"
                          ? `page__link page__link_color_black ${movies}`
                          : `page__link page__link_color_white ${movies}`
                      }
                    >
                      Фильмы
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      to="/saved-movies"
                      className={
                        isMobile || props.themeColor === "light"
                          ? `page__link page__link_color_black ${savedMovies}`
                          : `page__link page__link_color_white ${savedMovies}`
                      }
                    >
                      Сохранённые фильмы
                    </Link>
                  </li>
                </ul>
                <button className="account button">
                  <Link
                    to="/profile"
                    className={
                      isMobile || props.themeColor === "light"
                        ? "page__link page__link_color_black account__link"
                        : "page__link page__link_color_white account__link"
                    }
                  >
                    Аккаунт
                  </Link>
                </button>
              </nav>
            )}
          </div>
          // </div>
        )}
      </div>
    </header>
  );
}

export default Header;
