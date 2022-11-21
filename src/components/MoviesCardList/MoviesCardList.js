import Preloader from '../Utility/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

export default function MoviesCardList({ cards, isLoading }) {

  function renderCards() {
    if (isLoading) {
      return <Preloader />;
    }
    return cards.map((card) => (
      <MoviesCard key={card.id} data={card} />
    ));
  }

  return (
    <section className="movies-card-list">
      {renderCards()}
    </section>
  );
}
