import { useState } from 'react';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';

import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies } from './utils';

import '../Utility/Button/Button.css';
import './Movies.css';

import cards from './data';

export default function Movies({ onFormError }) {

  const [movies, setMovies] = useState([]);

  function handleFormSubmit(formData) {
    const searchText = formData.text;
    const shortOnly = formData.flag;

    moviesApi.getMovies()
      .then((movies) => {
        const filtered = filterMovies(movies, shortOnly, searchText);
        setMovies(filtered);
      })
      .catch((error) => {
        onFormError('Во время запроса произошла ошибка');
      })
  }

  return (
    <main className="movies">
      <SearchForm onSubmit={handleFormSubmit} onError={onFormError} />
      <MoviesCardList cards={movies} isLoading={false} />
      <button type="button" className="button movies__button">
        Ещё
      </button>
    </main>
  );
}
