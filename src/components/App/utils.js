const shortDurationMin = 40;

function filterMovies(movies, shortOnly, searchText) {
  let filtered;

  // Filter based on duration
  if (shortOnly) {
    filtered = movies.filter((movie) => movie.duration <= shortDurationMin);
  } else {
    filtered = movies.filter((movie) => movie.duration > shortDurationMin);
  }

  // Filter based on keyword
  const keyword = searchText.toLowerCase();

  return filtered.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().includes(keyword) ||
      movie.nameEN.toLowerCase().includes(keyword)
    );
  });
}

export { filterMovies };
