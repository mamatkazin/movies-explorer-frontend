import React from "react";
import { Link } from "react-router-dom";
import BaseForm from "../BaseForm";

export default function Register({ onRegister }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  React.useEffect(() => {
    setButtonDisabled([name, email, password].findIndex((item) => item === "") !== -1);
  }, [name, email, password]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(name, email, password);

    // onRegister(name, email, password).then((needClear) => {
    //   if (needClear) {
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    //     setButtonDisabled(true);
    //   }
    // });
  }

  return (
    <BaseForm
      form="registry"
      isRegistry={true}
      title="Добро пожаловать!"
      name={name}
      email={email}
      password={password}
      buttonName="Зарегистрироваться"
      buttonDisabled={false}
      // buttonDisabled={buttonDisabled}
      onSubmit={handleSubmit}
      onNameChange={handleNameChange}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
    >
      <p className="base-form__text">
        Уже зарегистрированы?
        <Link to="/signin" className="page__link base-form__link">
          Войти
        </Link>
      </p>
    </BaseForm>
  );
}
