import { useState } from 'react';
import { Link } from 'react-router-dom';

import { mainApi } from '../../utils';

import '../Utility/Button/Button.css';
import '../Utility/Link/Link.css';
import '../Utility/Logo/Logo.css';

import '../Utility/Auth/Auth.css';

import {
  AuthTextInput,
  validateName,
  validateEmail,
  validatePassword
} from '../Utility/Auth';

export default function Register({ onRegister, onError }) {

  const [name, setName] = useState({ value: '', validity: false, error: '' });
  const [email, setEmail] = useState({ value: '', validity: false, error: '' });
  const [password, setPassword] = useState({ value: '', validity: false, error: '' });

  const isValid = (name.validity && email.validity && password.validity);

  function handleNameChange(event) {
    const { value } = event.target;
    const { validity, error } = validateName(value);
    setName({ value, validity, error });
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    const { validity, error } = validateEmail(value);
    setEmail({ value, validity, error });
  }

  function handlePasswordChange(event) {
    const { value } = event.target;
    const { validity, error } = validatePassword(value);
    setPassword({ value, validity, error });
  }

  function handleSubmit(event) {
    event.preventDefault();
    mainApi.register({
      email: email.value,
      name: name.value,
      password: password.value
    })
      .then((response) => {
        if (response.ok) {
          return mainApi.login({ email: email.value, password: password.value })
        }

        return Promise.reject(response);
      })
      .then((response) => { onRegister(response) })
      .catch((error) => { onError(error.message || error.statusText) });
  }

  return (
    <div className="auth">
      <div className="auth__wrapper">
        <div className="logo auth__logo"></div>
        <h1 className="auth__heading">Добро пожаловать!</h1>
        <form className="auth__form" onSubmit={handleSubmit} noValidate={true}>
          <label className="auth__label">
            Имя
            <AuthTextInput
              name="register-name"
              type="text"
              placeholder="Jimmy Goggins"
              required={true}
              value={name.value}
              onChange={handleNameChange}
              errorText={name.error}
            />
          </label>
          <label className="auth__label">
            E-mail
            <AuthTextInput
              name="register-email"
              type="email"
              placeholder="jimmy-goggins@email.com"
              required={true}
              value={email.value}
              onChange={handleEmailChange}
              errorText={email.error}
            />
          </label>
          <label className="auth__label">
            Пароль
            <AuthTextInput
              name="register-password"
              type="password"
              placeholder=""
              required={true}
              value={password.value}
              onChange={handlePasswordChange}
              errorText={password.error}
            />
          </label>
          <button
            className="button auth__button"
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <p className="auth__text">
            Уже зарегистрированы? <Link to="/signin" className="link auth__link">Войти</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
