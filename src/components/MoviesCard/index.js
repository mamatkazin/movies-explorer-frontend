import React from 'react';
import { baseUrl } from '../../utils/const';

import './index.css';

function MoviesCard(props) {
  // function handleCardClick() {
  //   props.onCardClick(props.card);
  // }

  function handleLikeClick() {
    // props.onCardLike(props.card);
  }

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  return (
    <li className='card movies__item'>
      <img
        className='card__image'
        src={props.card.image ? baseUrl + props.card.image.url : '#'}
        alt={props.card.nameRU}
        // onClick={handleCardClick}
      />
      <div className='card__row'>
        <h2 className='card__name'>{props.card.nameRU}</h2>
        <div className='button-like'>
          <button
            type='button'
            aria-label='Поставить лайк.'
            className={
              props.liked
                ? 'button button-like__image button-like__image_liked card__like'
                : 'button button-like__image card__like'
            }
            onClick={handleLikeClick}
          ></button>
        </div>
      </div>
      <p className='card__duration'>{getTimeFromMins(props.card.duration)}</p>
    </li>
  );
}

export default MoviesCard;
