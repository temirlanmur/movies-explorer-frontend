import SearchForm from '../SearchForm/SearchForm';

import '../Utility/Button/Button.css';
import './Movies.css';

export default function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <button className="button movies__button">
        Ещё
      </button>
    </main>
  );
}
