import './MoviesCard.css';

export default function MoviesCard({ data }) {

  let buttonClass = 'movies-card__like-button';
  if (data.isLiked) {
    buttonClass += ' movies-card__like-button_active';
  }

  return (
    <article className="movies-card">
      <img
        src={data.thumbnail}
        alt="movie thumbnail"
        className="movies-card__thumbnail"
      />
      <div className="movies-card__info">
        <p className="movies-card__name">{data.nameRU}</p>
        <p className="movies-card__duration">{data.duration}</p>
        <button className={buttonClass}></button>
      </div>
    </article>
  );
}
