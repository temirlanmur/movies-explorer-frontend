import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import './SavedMovies.css';

export default function SavedMovies({ savedMovies, onFormSubmit, onFormError }) {
  return (
    <main className="saved-movies">
      <SearchForm onSubmit={onFormSubmit} onError={onFormError} />
      <MoviesCardList
        cards={savedMovies}
        isSearched={false}
        isLoading={false}
        onCardButtonClick={() => {}}
      />
    </main>
  );
}
