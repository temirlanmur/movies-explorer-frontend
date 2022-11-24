const shortDurationMin = 40;

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
  return movies.filter((movie) => movie.duration <= shortDurationMin);
}

export { filterOnKeyword, filterShort };
