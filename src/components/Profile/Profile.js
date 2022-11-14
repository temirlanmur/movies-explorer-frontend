import '../Utility/Link/Link.css';
import './Profile.css';

export default function Profile() {

  const user = { name: 'Виталий', email: 'pochta@yandex.ru' };

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
      <a
        href="#"
        className="link profile__link"
      >
        Редактировать
      </a>
      <a
        href="#"
        className="link profile__link profile__link_dangerous"
      >
        Выйти из аккаунта
      </a>
    </main>
  );
}
