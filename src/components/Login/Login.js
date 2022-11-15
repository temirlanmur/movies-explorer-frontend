import '../Utility/Button/Button.css';
import '../Utility/Link/Link.css';
import '../Utility/Logo/Logo.css';

import '../Utility/Auth/Auth.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="auth">
      <div className="auth__wrapper">
        <div className="logo auth__logo"></div>
        <h1 className="auth__heading">Рады видеть!</h1>
        <form className="auth__form">
          <label className="auth__label">
            E-mail
            <input
              className="auth__input"
              type="email"
              placeholder="my-email@mail.com"
            />
            <span className="auth__error-text"></span>
          </label>
          <label className="auth__label">
            Пароль
            <input
              className="auth__input"
              type="password"
            />
            <span className="auth__error-text"></span>
          </label>
        </form>
        <button className="button auth__button" type="submit">
          Войти
        </button>
        <p className="auth__text">
          Ещё не зарегистрированы? <Link to="/signup" className="link auth__link">Регистрация</Link>
        </p>
      </div>
    </div>
  );
}
