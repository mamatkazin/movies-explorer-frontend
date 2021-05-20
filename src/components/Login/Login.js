import React from "react";
import { Link } from "react-router-dom";
import BaseForm from "../BaseForm";

export default function Login({ onLogin }) {
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

    onLogin(email, password);

    // onLogin(email, password).then((needClear) => {
    //   if (needClear) {
    //     setEmail("");
    //     setPassword("");
    //     setButtonDisabled(true);
    //   }
    // });
  }

  return (
    <BaseForm
      form="login"
      isRegistry={false}
      title="Рады видеть!"
      email={email}
      password={password}
      buttonName="Войти"
      buttonDisabled={false}
      // buttonDisabled={buttonDisabled}
      onSubmit={handleSubmit}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
    >
      <p className="base-form__text">
        Ещё не зарегистрированы?
        <Link to="/signup" className="page__link base-form__link">
          Регистрация
        </Link>
      </p>
    </BaseForm>
  );
}
