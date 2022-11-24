import { useEffect, useState } from 'react';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import { filterOnKeyword, filterShort } from '../../utils';

import './SavedMovies.css';

export default function SavedMovies({ savedMovies, onCardDelete, onFormError }) {

  const [movies, setMovies] = useState(savedMovies);
  const [lastSearch, setLastSearch] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setMovies(savedMovies);
  }, [savedMovies]);

  function handleFormSubmit({ flag, text }) {
    setIsSearched(true);
    let filtered = filterOnKeyword(savedMovies, text);
    setLastSearch(filtered);
    if (flag) {
      filtered = filterShort(filtered);
    }
    setMovies(filtered);
  }

  function handleCheckbox(flag) {
    const filtered = flag ? filterShort(movies) : lastSearch;
    setMovies(filtered.slice());
  }

  function handleCardDelete(cardId) {
    setMovies(movies.filter((m) => m.id !== cardId));
    onCardDelete(cardId);
  }

  return (
    <main className="saved-movies">
      <SearchForm
        isStateful={false}
        onSubmit={handleFormSubmit}
        onCheckbox={handleCheckbox}
        onError={onFormError}
      />
      <MoviesCardList
        cards={movies}
        isSearched={isSearched}
        isLoading={false}
        onCardButtonClick={handleCardDelete}
      />
    </main>
  );
}
