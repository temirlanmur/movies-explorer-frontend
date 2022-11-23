import { useState } from 'react';

import Preloader from '../Utility/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

export default function MoviesCardList({
  cards,
  isSearched,
  isLoading,
  onCardButtonClick
}) {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const pageSize = (window.innerWidth <= 375) ? 5 : 7;
  const currentTotal = currentPageNumber * pageSize;
  const currentPage = cards.slice(0, currentTotal);
  const isLastPage = currentTotal >= cards.length;

  function loadNextPage() {
    setCurrentPageNumber(currentPageNumber + 1);
  }

  function renderCards() {
    if (isLoading) {
      return <Preloader />;
    }
    if (isSearched && cards.length === 0) {
      return <p className="movies-card-list__result-text">Ничего не найдено</p>
    }
    return currentPage.map((card) => (
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
      {!isLastPage && (
        <button
          className="button movies-card-list__button"
          onClick={loadNextPage}
        >
          Еще
        </button>
      )}

    </section>
  );
}
