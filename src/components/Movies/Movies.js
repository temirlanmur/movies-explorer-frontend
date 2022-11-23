import { useState } from 'react';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import { moviesApi, filterMovies } from '../../utils';
import errorText from '../SearchForm/errors';

import '../Utility/Button/Button.css';
import './Movies.css';

export default function Movies({
  movies,
  onSearch,
  onCardButtonClick,
  onFormError
}) {

  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  function handleFormSubmit(formData) {
    setIsSearched(true);
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        const filtered = filterMovies(movies, formData.flag, formData.text);
        onSearch(filtered);
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
      <SearchForm onSubmit={handleFormSubmit} onError={onFormError} />
      <MoviesCardList
        cards={movies}
        isSearched={isSearched}
        isLoading={isLoading}
        onCardButtonClick={onCardButtonClick}
      />
    </main>
  );
}
