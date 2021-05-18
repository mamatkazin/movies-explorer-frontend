import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import BaseForm from '../BaseForm/BaseForm';

export default function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  React.useEffect(() => {
    setButtonDisabled(
      [email, password].findIndex((item) => item === '') !== -1
    );
  }, [email, password]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onLogin(email, password).then((needClear) => {
      if (needClear) {
        setEmail('');
        setPassword('');
        setButtonDisabled(true);
      }
    });
  }

  return (
    <div className='page page_unknown'>
      <Header>
        <Link to='/signup' className='header__action'>
          Регистрация
        </Link>
      </Header>
      <BaseForm
        name='login'
        title='Вход'
        email={email}
        password={password}
        buttonName='Войти'
        buttonDisabled={buttonDisabled}
        onSubmit={handleSubmit}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
      />
    </div>
  );
}
