import { CONSTS } from '../constants';

function filterOnKeyword(movies, searchText) {
  const keyword = searchText.toLowerCase();

  return movies.filter((movie) =>
    (
      movie.nameRU.toLowerCase().includes(keyword) ||
      movie.nameEN.toLowerCase().includes(keyword)
    )
  );
}

function filterShort(movies) {
  return movies.filter((movie) => movie.duration <= CONSTS.SHORT_DURATION_MIN);
}

export { filterOnKeyword, filterShort };
