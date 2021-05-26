import React from "react";
import Switch from "../Switch";
import search from "../../images/search.svg";
import "./index.css";

function Search(props) {
  return (
    <section className="search page__content">
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
        <span className="input-error" id="search-error"></span>
        <div className="search__switch">
          <Switch />
          <span className="search__switch-text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default Search;
