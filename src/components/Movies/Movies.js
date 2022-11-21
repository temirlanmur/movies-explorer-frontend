import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import '../Utility/Button/Button.css';
import './Movies.css';

import cards from './data';

export default function Movies({ onFormSubmit, onFormError }) {
  return (
    <main className="movies">
      <SearchForm onSubmit={onFormSubmit} onError={onFormError} />
      <MoviesCardList cards={cards} isLoading={false} />
      <button type="button" className="button movies__button">
        Ещё
      </button>
    </main>
  );
}
