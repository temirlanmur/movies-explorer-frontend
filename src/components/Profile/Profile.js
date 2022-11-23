import { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import {
  validateName,
  validateEmail,
} from '../Utility/Auth';

import '../Utility/Link/Link.css';
import './Profile.css';

export default function Profile({ onEdit, onLogout }) {

  const user = useContext(CurrentUserContext);

  const [name, setName] = useState({ value: user.name, validity: true, error: '' });
  const [email, setEmail] = useState({ value: user.email, validity: true, error: '' });

  const isValid = (name.validity && email.validity);

  function handleNameChange(event) {
    const { value } = event.target;
    const { validity, error } = validateName(value);
    setName({ value, validity, error });
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    const { validity, error } = validateEmail(value);
    setEmail({ value, validity, error });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onEdit({ email: email.value, name: name.value });
  }

  return (
    <main className="profile">
      <h1 className="profile__heading">Привет, {user.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit} noValidate={true}>
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            type="text"
            value={name.value}
            onChange={handleNameChange}
          />
          <span className="profile__input-error">{name.error}</span>
        </label>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            type="email"
            value={email.value}
            onChange={handleEmailChange}
          />
          <span className="profile__input-error">{email.error}</span>
        </label>
        <button
          type="submit"
          className="link profile__link"
          disabled={!isValid}
        >
          Редактировать
        </button>
      </form>
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
