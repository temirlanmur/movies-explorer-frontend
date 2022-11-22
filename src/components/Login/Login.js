import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../Utility/Button/Button.css';
import '../Utility/Link/Link.css';
import '../Utility/Logo/Logo.css';

import '../Utility/Auth/Auth.css';

import {
  AuthTextInput,
  validateEmail,
  validatePassword
} from '../Utility/Auth';

export default function Login() {

  const [email, setEmail] = useState({ value: '', validity: false, error: '' });
  const [password, setPassword] = useState({ value: '', validity: false, error: '' });

  const isValid = (email.validity && password.validity);

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
  }

  return (
    <div className="auth">
      <div className="auth__wrapper">
        <div className="logo auth__logo"></div>
        <h1 className="auth__heading">Рады видеть!</h1>
        <form className="auth__form" onSubmit={handleSubmit} noValidate={true}>
          <label className="auth__label">
            E-mail
            <AuthTextInput
              name="login-email"
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
              name="login-password"
              type="password"
              placeholder=""
              required={true}
              value={password.value}
              onChange={handlePasswordChange}
              errorText={password.error}
            />
          </label>
        </form>
        <button
          className="button auth__button"
          type="submit"
          disabled={!isValid}
        >
          Войти
        </button>
        <p className="auth__text">
          Ещё не зарегистрированы? <Link to="/signup" className="link auth__link">Регистрация</Link>
        </p>
      </div>
    </div>
  );
}
