import React from "react";
import { useMediaQuery } from "react-responsive";
import MoviesCard from "../MoviesCard";
import "./index.css";

function MoviesCardList(props) {
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section
      className={`movies page__content ${
        isMobile ? "page__content_width_xs" : isTablet ? "page__content_width_m" : ""
      }`}
    >
      {props.cards.length > 0 && (
        <ul className="movies__list">
          {props.cards.slice(props.offset[0], props.offset[1]).map((card, i) => (
            <MoviesCard
              key={card.id}
              card={card}
              // onInsertMovie={props.onInsertMovie}
              // onDeleteMovie={props.onDeleteMovie}
              onLike={props.onLike}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
