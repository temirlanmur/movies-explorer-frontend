import './MoviesCard.css';

const MOVIES_URL = 'https://api.nomoreparties.co';

export default function MoviesCard({ data }) {

  const thumbnailSrc = MOVIES_URL + data.image.url;

  let buttonClass = 'movies-card__like-button';
  if (data.isLiked) {
    buttonClass += ' movies-card__like-button_active';
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
        <button type="button" className={buttonClass}></button>
      </div>
    </article>
  );
}
