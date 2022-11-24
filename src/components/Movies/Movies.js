import { useState } from 'react';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import { moviesApi, filterMovies, storage } from '../../utils';
import errorText from '../SearchForm/errors';

import '../Utility/Button/Button.css';
import './Movies.css';

export default function Movies({
  searchedMovies,
  saveSearchedMovies,
  onCardButtonClick,
  onFormError
}) {
  const allMovies = storage.getMovies();
  const [movies, setMovies] = useState(searchedMovies);

  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  function handleFormSubmit(formData) {
    storage.saveSearch({
      searchText: formData.text,
      searchFlag: formData.flag,
    });
    setIsSearched(true);
    if (allMovies.length === 0) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          storage.saveMovies(movies);
          const filtered = filterMovies(movies, formData.flag, formData.text);
          setMovies(filtered);
          saveSearchedMovies(filtered);
        })
        .catch(_ => {
          onFormError(errorText);
        })
        .finally(_ => {
          setIsLoading(false);
        })
    } else {
      const filtered = filterMovies(allMovies, formData.flag, formData.text);
      setMovies(filtered);
      saveSearchedMovies(filtered);
    }

  }

  return (
    <main className="movies">
      <SearchForm
        isStateful={true}
        onSubmit={handleFormSubmit}
        onError={onFormError}
      />
      <MoviesCardList
        cards={movies}
        isSearched={isSearched}
        isLoading={isLoading}
        onCardButtonClick={onCardButtonClick}
      />
    </main>
  );
}
