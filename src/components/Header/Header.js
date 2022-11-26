import { Link, NavLink } from 'react-router-dom';

import '../Utility/Button/Button.css';
import '../Utility/Link/Link.css';
import '../Utility/Logo/Logo.css';
import './Header.css';

export default function Header({ isLoggedIn, openNavigation }) {
  return (
    <header className="header">
      <Link to="/" className="logo header__logo"></Link>
      {
        isLoggedIn
        ?
        <>
          <nav className="header__navigation">
            <ul className="header__nav-items">
              <li className="header__nav-item">
                <NavLink
                  to="/movies"
                  className="link header__nav-link"
                  activeClassName="header__nav-link_active"
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink
                  to="/saved-movies"
                  className="link header__nav-link"
                  activeClassName="header__nav-link_active"
                >
                  Сохраненные фильмы
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink
                  to="/profile"
                  className="link header__nav-link header__nav-link_account"
                >
                  Аккаунт
                </NavLink>
              </li>
            </ul>
          </nav>
          <button type="button" className="header__hamburger" onClick={openNavigation}>
            <span className="header__hamburger-bar"></span>
            <span className="header__hamburger-bar"></span>
            <span className="header__hamburger-bar"></span>
          </button>
        </>
        :
        (<>
          <NavLink
            to="/signup"
            className="link header__register-link"
          >
            Регистрация
          </NavLink>
          <NavLink
            to="/signin"
            className="button button_style_primary"
          >
            Войти
          </NavLink>
        </>)
      }
    </header>
  );
}
