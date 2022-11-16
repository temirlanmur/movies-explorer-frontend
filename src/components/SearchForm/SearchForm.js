import '../Utility/Button/Button.css';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <label className="search-form__text-label">
          <input
            className="search-form__text-input"
            type="text"
            placeholder="Фильм"
            required
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
