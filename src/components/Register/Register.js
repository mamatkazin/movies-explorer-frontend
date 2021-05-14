import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import BaseForm from "../BaseForm/BaseForm";

export default function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  React.useEffect(() => {
    setButtonDisabled([email, password].findIndex((item) => item === "") !== -1);
  }, [email, password]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(email, password).then((needClear) => {
      if (needClear) {
        setEmail("");
        setPassword("");
        setButtonDisabled(true);
      }
    });
  }

  return (
    <div className="page page_unknown">
      <Header>
        <Link to="/signin" className="header__action">
          Войти
        </Link>
      </Header>
      <BaseForm
        name="register"
        title="Регистрация"
        email={email}
        password={password}
        buttonName="Зарегистрироваться"
        buttonDisabled={buttonDisabled}
        onSubmit={handleSubmit}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
      >
        <Link to="/signin" className="register__link">
          Уже зарегистрированы? Войти
        </Link>
      </BaseForm>
    </div>
  );
}
