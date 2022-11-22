import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import '../Utility/Link/Link.css';
import './Profile.css';

export default function Profile({ onLogout }) {

  const user = useContext(CurrentUserContext);

  return (
    <main className="profile">
      <h1 className="profile__heading">Привет, {user.name}!</h1>
      <ul className="profile__info">
        <li className="profile__item">
          {user.name}
        </li>
        <li className="profile__item">
          {user.email}
        </li>
      </ul>
      <button type="button" className="link profile__link">
        Редактировать
      </button>
      <button
        type="button"
        className="link profile__link profile__link_dangerous"
        onClick={onLogout}
      >
        Выйти из аккаунта
      </button>
    </main>
  );
}
