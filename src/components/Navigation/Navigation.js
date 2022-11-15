import '../Utility/Link/Link.css';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className="navigation">
      <button className="navigation__close-button"></button>
      <nav className="navigation__menu">
        <ul className="navigation__items">
          <li className="navigation__item">
            <a href="#" className="link navigation__link">Главная</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="link navigation__link">Фильмы</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="link navigation__link">Сохраненные фильмы</a>
          </li>
          <li className="navigation__item_account">
            <a
              href="#"
              className="link navigation__link navigation__link_account"
            >
              Аккаунт
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
