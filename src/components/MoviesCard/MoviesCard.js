import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './MoviesCard.css';

const MOVIES_URL = 'https://api.nomoreparties.co';

export default function MoviesCard({ data, onCardButtonClick }) {

  const { savedMovies } = useContext(CurrentUserContext);

  const isMainApiCard = Boolean(data.movieId);  // only MainApi movies have this property
                                                // movies coming from MoviesApi do not have it

  let
    isSaved = false,
    savedInstanceId = null,
    buttonClass = '',
    thumbnailSrc = '';

  if (isMainApiCard) {
    buttonClass = 'movies-card__delete-button';
    thumbnailSrc = data.image;
  } else {
    const savedInstance = savedMovies.find((m) => m.movieId === data.id);
    if (savedInstance) {
      isSaved = true;
      savedInstanceId = savedInstance.id;
    }
    buttonClass = isSaved
      ? 'movies-card__like-button movies-card__like-button_active'
      : 'movies-card__like-button';
    thumbnailSrc = MOVIES_URL + data.image.url;
  }

  function handleCardButtonClick(event) {
    if (isMainApiCard) {
      onCardButtonClick(data.id);  // card can only be deleted from the saved section
    } else {
      onCardButtonClick({ data, cardId: savedInstanceId });  // either save or delete
    }
  }

  return (
    <article className="movies-card">
      <a className="movies-card__thumbnail-link" href={data.trailerLink}>
        <img
          src={thumbnailSrc}
          alt="movie thumbnail"
          className="movies-card__thumbnail"
        />
      </a>
      <div className="movies-card__info">
        <p className="movies-card__name">{data.nameRU}</p>
        <p className="movies-card__duration">{data.duration} мин.</p>
        <button
          type="button"
          className={buttonClass}
          onClick={handleCardButtonClick}>
        </button>
      </div>
    </article>
  );
}
