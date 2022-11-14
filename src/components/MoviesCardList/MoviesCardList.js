import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

export default function MoviesCardList({ cards }) {
  return (
    <section className="movies-card-list">
      {cards.map((card) => (
        <MoviesCard key={card.id} data={card} />
      ))}
    </section>
  );
}
