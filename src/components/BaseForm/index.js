import React from "react";
import logo from "../../images/logo.svg";
import "./index.css";

export default function BaseForm(props) {
  return (
    <div className="page page_unknown">
      <header className="header header_unknown">
        <img className="logo base-form__logo" src={logo} alt="Логотип дипломного проекта" />
      </header>
      <main className="content">
        <section className="base-form">
          <form
            name={`form_${props.form}`}
            className="base-form__container"
            onSubmit={props.onSubmit}
          >
            <h1 className="base-form__title">{props.title}</h1>
            <fieldset className="base-form__input-container" name="dataFields">
              {props.isRegistry && (
                <>
                  <label className="base-form__label">Имя</label>
                  <input
                    type="text"
                    className="input base-form__input"
                    name="name"
                    // placeholder="Name"
                    required
                    minLength={2}
                    maxLength={30}
                    value={props.name}
                    onChange={props.onNameChange}
                  />
                  <span className="input-error" id="name-error"></span>
                </>
              )}
              <label className="base-form__label">E-mail</label>
              <input
                type="email"
                className="input input_font-weight_medium base-form__input"
                name="email"
                // placeholder="Email"
                required
                value={props.email}
                onChange={props.onEmailChange}
              />
              <span className="input-error" id="email-error"></span>
              <label className="base-form__label">Пароль</label>
              <input
                type="password"
                className="input base-form__input"
                name="password"
                // placeholder="Пароль"
                required
                value={props.password}
                minLength={3}
                onChange={props.onPasswordChange}
              />
              <span className="input-error" id="password-error"></span>
            </fieldset>
            <button
              type="submit"
              className={
                props.buttonDisabled
                  ? "button base-form__button button_disabled"
                  : "button button_theme_blue base-form__button"
              }
              disabled={props.buttonDisabled ? true : false}
            >
              {props.buttonName}
            </button>
          </form>

          {props.children}
        </section>
      </main>
    </div>
  );
}
