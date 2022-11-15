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
        <>
          <nav className="header__navigation">
            <ul className="header__nav-items">
              <li className="header__nav-item">
                <a href="#" className="link header__nav-link">Главная</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="link header__nav-link">Фильмы</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="link header__nav-link">Сохраненные фильмы</a>
              </li>
              <li className="header__nav-item">
                <a
                  href="#"
                  className="link header__nav-link header__nav-link_account"
                >
                  Аккаунт
                </a>
              </li>
            </ul>
          </nav>
          <button className="header__hamburger" onClick={openNavigation}>
            <span className="header__hamburger-bar"></span>
            <span className="header__hamburger-bar"></span>
            <span className="header__hamburger-bar"></span>
          </button>
        </>
        :
        (<>
          <button className="link header__register-link">Регистрация</button>
          <button className="button button_style_primary">Войти</button>
        </>)
      }
    </header>
  );
}
