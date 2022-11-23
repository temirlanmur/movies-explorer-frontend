import { useState } from 'react';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import { moviesApi, filterMovies, storage } from '../../utils';
import errorText from '../SearchForm/errors';

import '../Utility/Button/Button.css';
import './Movies.css';

export default function Movies({
  onCardButtonClick,
  onFormError
}) {
  const [movies, setMovies] = useState(storage.getSearchedMovies());

  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  function handleFormSubmit(formData) {
    setIsSearched(true);
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        const filtered = filterMovies(movies, formData.flag, formData.text);
        storage.saveSearch({
          searchText: formData.text,
          searchFlag: formData.flag,
          searchedMovies: filtered
        });
        setMovies(filtered);
      })
      .catch(_ => {
        onFormError(errorText);
      })
      .finally(_ => {
        setIsLoading(false);
      })
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
