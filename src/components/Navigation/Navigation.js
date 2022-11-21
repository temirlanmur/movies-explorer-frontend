import { NavLink } from 'react-router-dom';
import '../Utility/Link/Link.css';
import './Navigation.css';

export default function Navigation({ isOpen, close }) {

  const navigationClass = isOpen ? 'navigation navigation_open' : 'navigation';

  return (
    <div className={navigationClass}>
      <div className="navigation__window-container">
        <button
          type="button"
          className="navigation__close-button"
          onClick={close}
        ></button>
        <nav className="navigation__menu">
          <ul className="navigation__items">
            <li className="navigation__item">
              <NavLink
                onClick={close}
                to="/"
                className="link navigation__link"
                activeClassName="navigation__link_active"
                isActive={(match, location) => {
                  if (!match) return false;
                  return location.pathname === '/';
                }}
              >
                Главная
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                onClick={close}
                to="/movies"
                className="link navigation__link"
                activeClassName="navigation__link_active"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                onClick={close}
                to="/saved-movies"
                className="link navigation__link"
                activeClassName="navigation__link_active"
              >
                Сохраненные фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                onClick={close}
                to="/profile"
                className="link navigation__link navigation__link_account"
              >
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
