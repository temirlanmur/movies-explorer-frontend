import Preloader from '../Utility/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

export default function MoviesCardList({
  cards,
  isSearched,
  isLoading,
  onCardButtonClick
}) {

  function renderCards() {
    if (isLoading) {
      return <Preloader />;
    }
    if (isSearched && cards.length === 0) {
      return <p className="movies-card-list__result-text">Ничего не найдено</p>
    }
    return cards.map((card) => (
      <MoviesCard
        key={card.id}
        data={card}
        onCardButtonClick={onCardButtonClick}
      />
    ));
  }

  return (
    <section className="movies-card-list">
      { renderCards() }
    </section>
  );
}
