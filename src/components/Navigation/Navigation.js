import '../Utility/Link/Link.css';
import './Navigation.css';

export default function Navigation({ isOpen, close }) {

  let navigationClass = 'navigation';
  if (isOpen) {
    navigationClass += ' navigation_open';
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }

  return (
    <div className={navigationClass}>
      <div className="navigation__window-container">
        <button
          className="navigation__close-button"
          onClick={close}
        ></button>
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
    </div>
  );
}
