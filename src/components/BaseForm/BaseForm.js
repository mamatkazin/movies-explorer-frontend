import React from 'react';

export default function BaseForm(props) {
  return (
    <section className='base-form'>
      <form
        name={`form_${props.name}`}
        className='base-form__container'
        onSubmit={props.onSubmit}
      >
        <h2 className='base-form__title'>{props.title}</h2>
        <fieldset className='base-form__input-container' name='dataFields'>
          <input
            type='email'
            className='input input_theme_dark'
            name='email'
            placeholder='Email'
            required
            value={props.email}
            onChange={props.onEmailChange}
          />
          <span className='input-error' id='email-error'></span>
          <input
            type='password'
            className='input input_theme_dark'
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
              ? 'button button_theme_white base-form__button button_disabled'
              : 'button button_theme_white base-form__button'
          }
          disabled={props.buttonDisabled ? true : false}
        >
          {props.buttonName}
        </button>
        {props.children}
      </form>
    </section>
  );
}
