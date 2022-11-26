import { useState } from 'react';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import { moviesApi, storage, filterOnKeyword, filterShort } from '../../utils';
import errorText from '../SearchForm/errors';

import '../Utility/Button/Button.css';
import './Movies.css';

export default function Movies({
  onCardButtonClick,
  onFormError
}) {
  const allMovies = storage.getMovies();
  const searchedMovies = storage.getLastSearch();
  const [movies, setMovies] = useState(searchedMovies);

  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  function handleFormSubmit({ text, flag }) {
    setIsSearched(true);
    storage.saveSearch({ searchText: text, searchFlag: flag });
    if (allMovies.length === 0) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          storage.saveMovies(movies);
          const filtered = filterOnKeyword(movies, text);
          storage.saveLastSearch(filtered);
          setMovies(flag ? filterShort(filtered) : filtered);
        })
        .catch(_ => {
          onFormError(errorText);
        })
        .finally(_ => {
          setIsLoading(false);
        })
    } else {
      const filtered = filterOnKeyword(allMovies, text);
      setMovies(flag ? filterShort(filtered) : filtered);
      storage.saveLastSearch(filtered);
    }
  }

  function handleCheckbox(flag) {
    storage.saveSearchFlag(flag);
    const movies = flag ? filterShort(searchedMovies) : searchedMovies;
    setMovies(movies.slice());
  }

  return (
    <main className="movies">
      <SearchForm
        isStateful={true}
        onSubmit={handleFormSubmit}
        onCheckbox={handleCheckbox}
        onError={onFormError}
      />
      <MoviesCardList
        cards={storage.getSearchFlag() ? filterShort(movies) : movies}
        isSearched={isSearched}
        isLoading={isLoading}
        onCardButtonClick={onCardButtonClick}
      />
    </main>
  );
}
