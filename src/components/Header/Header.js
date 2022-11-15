import '../Utility/Button/Button.css';
import '../Utility/Link/Link.css';
import '../Utility/Logo/Logo.css';
import './Header.css';

export default function Header({ isLoggedIn, openNavigation }) {
  return (
    <header className="header">
      <div className="logo header__logo"></div>
      {
        isLoggedIn
        ?
        <button className="header__hamburger" onClick={openNavigation}>
          <span className="header__hamburger-bar"></span>
          <span className="header__hamburger-bar"></span>
          <span className="header__hamburger-bar"></span>
        </button>
        :
        (<>
          <button className="link header__register-link">Регистрация</button>
          <button className="button button_style_primary">Войти</button>
        </>)
      }
    </header>
  );
}
