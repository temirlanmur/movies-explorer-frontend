import { useState } from 'react';

import '../Utility/Button/Button.css';
import './SearchForm.css';

export default function SearchForm() {

  const [isFocused, setIsFocused] = useState(false);

  function focusInput() {
    setIsFocused(true);
  }

  function unfocusInput() {
    setIsFocused(false);
  }

  let labelClass = 'search-form__text-label';
  if (isFocused) {
    labelClass += ' search-form__text-label_focus';
  }

  return (
    <section className="search-form">
      <form className="search-form__form">
        <label className={labelClass}>
          <input
            className="search-form__text-input"
            type="text"
            placeholder="Фильм"
            required
            onFocus={focusInput}
            onBlur={unfocusInput}
          />
          <button className="button search-form__button" type="submit">
            Найти
          </button>
        </label>
        <label className="search-form__switch-label">
          <input className="search-form__switch-input" type="checkbox" />
          <span className="search-form__switch" />
          Короткометражки
        </label>
      </form>
    </section>
  );
};
