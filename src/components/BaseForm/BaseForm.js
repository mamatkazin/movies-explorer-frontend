import React from 'react';
import logo from '../../images/logo.svg';

export default function BaseForm(props) {
  return (
    <section className='base-form'>
      <img
        className='logo base-form__logo'
        src={logo}
        alt='Логотип дипломного проекта'
      />
      <form
        name={`form_${props.form}`}
        className='base-form__container'
        onSubmit={props.onSubmit}
      >
        <h1 className='base-form__title'>{props.title}</h1>
        <fieldset className='base-form__input-container' name='dataFields'>
          {props.isRegistry && (
            <>
              <input
                type='text'
                className='input'
                name='name'
                placeholder='Name'
                required
                value={props.name}
                onChange={props.onNameChange}
              />
              <span className='input-error' id='name-error'></span>
            </>
          )}
          <input
            type='email'
            className='input'
            name='email'
            placeholder='Email'
            required
            value={props.email}
            onChange={props.onEmailChange}
          />
          <span className='input-error' id='email-error'></span>
          <input
            type='password'
            className='input'
            name='password'
            placeholder='Пароль'
            required
            value={props.password}
            minLength={3}
            onChange={props.onPasswordChange}
          />
          <span className='input-error' id='password-error'></span>
        </fieldset>
        <button
          type='submit'
          className={
            props.buttonDisabled
              ? 'button base-form__button button_disabled'
              : 'button base-form__button'
          }
          disabled={props.buttonDisabled ? true : false}
        >
          {props.buttonName}
        </button>
      </form>

      {props.children}
    </section>
  );
}
