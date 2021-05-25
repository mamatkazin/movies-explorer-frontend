import React from "react";
import MoviesCard from "../MoviesCard";
import "./index.css";

function MoviesCardList(props) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {console.log("!!!!!", props.cards)}
        {props.cards.length > 0 &&
          props.cards.map((card, i) => (
            <MoviesCard
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
