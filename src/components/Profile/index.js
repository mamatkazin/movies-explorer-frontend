import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts";
import "./index.css";

function Profile(props) {
  let currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  React.useEffect(() => {
    if (!currentUser) {
      currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }

    setName(currentUser.name);
    setEmail(currentUser.email);
  }, []);

  React.useEffect(() => {
    setButtonDisabled([name, email].findIndex((item) => item === "") !== -1);
  }, [name, email]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateProfile(name, email);
  }

  return (
    <div className="page">
      <Header loggedIn={props.loggedIn} themeColor="light"></Header>
      <main className="content">
        <section className="profile page__profile page__content">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form" onSubmit={handleSubmit}>
            <fieldset className="profile__input-container" name="dataFields">
              <label className="profile__label">Имя</label>
              <input
                type="text"
                className="input profile__input"
                name="name"
                placeholder="Введите имя"
                required
                value={name}
                onChange={handleNameChange}
              />
            </fieldset>
            <span className="input-error profile__input-error" id="profile-name-error"></span>
            <fieldset className="profile__input-container" name="dataFields">
              <label className="profile__label">E-mail</label>
              <input
                type="text"
                className="input profile__input"
                name="email"
                placeholder="Адрес электронной почты"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </fieldset>
            <span className="input-error profile__input-error" id="profile-email-error"></span>

            <button className="button profile__button" type="submit" disabled={buttonDisabled}>
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
