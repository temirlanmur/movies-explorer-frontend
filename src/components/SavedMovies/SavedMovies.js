import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import './SavedMovies.css';

import cards from '../Movies/data';

export default function SavedMovies({ onFormSubmit, onFormError }) {
  return (
    <main className="saved-movies">
      <SearchForm onSubmit={onFormSubmit} onError={onFormError} />
      <MoviesCardList cards={cards.slice(0, 2)} isLoading={false} />
    </main>
  );
}
