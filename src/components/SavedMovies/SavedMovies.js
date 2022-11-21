import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import './SavedMovies.css';

import cards from '../Movies/data';

export default function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList cards={cards.slice(0, 2)} isLoading={false} />
    </main>
  );
}
