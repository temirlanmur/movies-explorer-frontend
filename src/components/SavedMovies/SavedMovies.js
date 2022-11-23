import { useState } from 'react';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import { filterMovies } from '../../utils';

import './SavedMovies.css';

export default function SavedMovies({ savedMovies, onCardDelete, onFormError }) {

  const [searchedMovies, setSearchedMovies] = useState(savedMovies);
  const [isSearched, setIsSearched] = useState(false);

  function handleFormSubmit(formData) {
    setIsSearched(true);
    const filtered = filterMovies(savedMovies, formData.flag, formData.text);
    setSearchedMovies(filtered);
  }

  return (
    <main className="saved-movies">
      <SearchForm onSubmit={handleFormSubmit} onError={onFormError} />
      <MoviesCardList
        cards={searchedMovies}
        isSearched={isSearched}
        isLoading={false}
        onCardButtonClick={onCardDelete}
      />
    </main>
  );
}
