import React from "react";
import { useMediaQuery } from "react-responsive";
import Switch from "../Switch";
import search from "../../images/search.svg";
import "./index.css";

function Search(props) {
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section
      className={`search page__content ${
        isMobile ? "page__content_width_s" : isTablet ? "page__content_width_m" : ""
      }`}
    >
      <form className="page__search" onSubmit={props.onSubmit}>
        <fieldset className="search__input-container" name="dataFields">
          <input
            type="text"
            className="input search__input"
            name="search"
            placeholder="Фильм"
            required
            value={props.subStr}
            onChange={props.onSubStrChange}
          />
          <button className="button search__button" type="submit">
            <img className="search__image" src={search} alt="Найти" />
          </button>
        </fieldset>
        <span className="input-error search__input-error" id="search-error"></span>
        <div className="search__switch">
          <Switch onChange={props.onShortFilmChange} checked={props.checked} />
          <span className="search__switch-text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default Search;
