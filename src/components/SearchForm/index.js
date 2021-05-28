import React from "react";
import { useMediaQuery } from "react-responsive";
import Switch from "../Switch";
import search from "../../images/search.svg";
import "./index.css";

function Search(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <section
      className={isMobile ? "search page__content page__content_width_m" : "search page__content"}
    >
      <form className="page__search">
        <fieldset className="search__input-container" name="dataFields">
          <input
            type="text"
            className="input search__input"
            name="search"
            placeholder="Фильм"
            required
            value={props.name}
            onChange={props.onNameChange}
          />
          <button className="button search__button" type="submit">
            <img className="search__image" src={search} alt="Найти" />
          </button>
        </fieldset>
        <span className="input-error search__input-error" id="search-error"></span>
        <div className="search__switch">
          <Switch />
          <span className="search__switch-text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default Search;
