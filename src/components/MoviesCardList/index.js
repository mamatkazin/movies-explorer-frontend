import React from "react";
import MoviesCard from "../MoviesCard";
import "./index.css";

function MoviesCardList(props) {
  return (
    <section className="movies page__content">
      <ul className="movies__list">
        {props.cards.length > 0 &&
          props.cards.slice(0, 16).map((card, i) => (
            <MoviesCard
              key={card._id}
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
