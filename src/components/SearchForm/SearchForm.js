import { useState } from 'react';

import '../Utility/Button/Button.css';
import './SearchForm.css';

import { storage } from '../../utils';
import errorText from './errors';

export default function SearchForm({
  isStateful,
  onSubmit,
  onCheckbox,
  onError
}) {

  let text = '', flag = false;
  if (isStateful) {
    text = storage.getSearchText();
    flag = storage.getSearchFlag();
  }

  const [formState, setFormState] = useState({ text, flag });
  const [isFocused, setIsFocused] = useState(false);

  function handleInputChange(event) {
    setFormState((state) => ({ ...state, text: event.target.value }));
  }

  function handleCheckbox(event) {
    setFormState((state) => ({ ...state, flag: event.target.checked }));
    onCheckbox(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formState.text) {
      onError(errorText);
    } else {
      onSubmit(formState);
    }
  }

  let labelClass = 'search-form__text-label';
  if (isFocused) {
    labelClass += ' search-form__text-label_focus';
  }

  return (
    <section className="search-form">
      <form
        className="search-form__form"
        onSubmit={handleSubmit}
        noValidate={true}
      >
        <label className={labelClass}>
          <input
            className="search-form__text-input"
            type="text"
            placeholder="Фильм"
            required
            value={formState.text}
            onChange={handleInputChange}
            onFocus={() => { setIsFocused(true) }}
            onBlur={() => { setIsFocused(false) }}
          />
          <button className="button search-form__button" type="submit">
            Найти
          </button>
        </label>
        <label className="search-form__switch-label">
          <input
            className="search-form__switch-input"
            type="checkbox"
            checked={formState.flag}
            onChange={handleCheckbox}
          />
          <span className="search-form__switch" />
          Короткометражки
        </label>
      </form>
    </section>
  );
};
