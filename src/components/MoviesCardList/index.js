import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MoviesCard from '../MoviesCard';
import './index.css';

function MoviesCardList(props) {
  const isTablet = useMediaQuery({ query: '(max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section
      className={`movies page__content ${
        isMobile
          ? 'page__content_width_xs'
          : isTablet
          ? 'page__content_width_m'
          : ''
      }`}
    >
      <ul className='movies__list'>
        {props.cards.length > 0 &&
          props.cards.slice(0, 16).map((card, i) => (
            <MoviesCard
              key={card.id}
              card={card}
              liked={props.liked}
              // onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
