import { useEffect, useState } from 'react';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import { filterMovies } from '../../utils';

import './SavedMovies.css';

export default function SavedMovies({ savedMovies, onCardDelete, onFormError }) {

  const [movies, setMovies] = useState(savedMovies);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setMovies(savedMovies);
  }, [savedMovies]);

  function handleFormSubmit(formData) {
    setIsSearched(true);
    const filtered = filterMovies(savedMovies, formData.flag, formData.text);
    setMovies(filtered);
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
