import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import './SavedMovies.css';

export default function SavedMovies({ savedMovies, onCardDelete, onFormError }) {
  return (
    <main className="saved-movies">
      <SearchForm onSubmit={() => {}} onError={onFormError} />
      <MoviesCardList
        cards={savedMovies}
        isSearched={false}
        isLoading={false}
        onCardButtonClick={onCardDelete}
      />
    </main>
  );
}
