import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./index.css";

function Profile(props) {
  return (
    <div className="page">
      <Header loggedIn={props.loggedIn} themeColor="light"></Header>
      <main className="content">
        <section className="profile page__profile page__content">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <fieldset className="profile__input-container" name="dataFields">
              <label className="profile__label">Имя</label>
              <input
                type="text"
                className="input profile__input"
                name="name"
                placeholder="Введите имя"
                required
                value={props.name}
                onChange={props.onNameChange}
              />
            </fieldset>
            <span className="input-error" id="profile-name-error"></span>
            <fieldset className="profile__input-container" name="dataFields">
              <label className="profile__label">E-mail</label>
              <input
                type="text"
                className="input profile__input"
                name="email"
                placeholder="Адрес электронной почты"
                required
                value={props.email}
                onChange={props.onEmailChange}
              />
            </fieldset>
            <span className="input-error" id="profile-email-error"></span>

            <button className="button profile__button" type="submit">
              Редактировать
            </button>
          </form>
          <Link to="/signout" className="page__link profile__signout">
            Выйти из аккаунта
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Profile;
