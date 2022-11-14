import '../Utility/Button/Button.css';
import '../Utility/Link/Link.css';
import '../Utility/Logo/Logo.css';

import '../Utility/Auth/Auth.css';

export default function Register() {
  return (
    <div className="auth">
      <div className="auth__wrapper">
        <div className="logo auth__logo"></div>
        <h1 className="auth__heading">Добро пожаловать!</h1>
        <form className="auth__form">
          <label className="auth__label">
            Имя
            <input
              className="auth__input"
              type="text"
              placeholder="Alex"
            />
            <span className="auth__error-text"></span>
          </label>
          <label className="auth__label">
            E-mail
            <input
              className="auth__input"
              type="email"
              placeholder="myemail@mail.com"
            />
            <span className="auth__error-text"></span>
          </label>
          <label className="auth__label">
            Пароль
            <input
              className="auth__input"
              type="password"
            />
            <span className="auth__error-text">Что-то пошло не так...</span>
          </label>
        </form>
        <button className="button auth__button" type="submit">
          Зарегистрироваться
        </button>
        <p className="auth__text">
          Уже зарегистрированы? <a href="#" className="link auth__link">Войти</a>
        </p>
      </div>
    </div>
  );
}
