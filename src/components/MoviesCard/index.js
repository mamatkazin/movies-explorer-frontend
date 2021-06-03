import React from "react";
import { baseUrl } from "../../utils/const";

import "./index.css";

function MoviesCard(props) {
  // const [liked, setLiked] = React.useState(props.card.liked);

  // React.useEffect(() => {
  //   console.log("синим", props.card.liked);
  //   console.log("синим", liked);
  //   //setLiked(props.card.liked);
  // });

  // function handleCardClick() {
  //   props.onCardClick(props.card);
  // }

  function handleLikeClick() {
    props.onLike(props.card);
  }

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + "ч " + minutes + "м";
  }

  return (
    <li className="card movies__item">
      <img
        className="card__image"
        src={
          typeof props.card.liked === "undefined"
            ? props.card.image
            : props.card.image
            ? baseUrl + props.card.image.url
            : "#"
        }
        alt={props.card.nameRU}
        // onClick={handleCardClick}
      />
      <div className="card__row">
        <h2 className="card__name">{props.card.nameRU}</h2>
        <div
          className={`button-like ${typeof props.card.liked !== "undefined" && "button-like_new"}`}
        >
          <button
            type="button"
            aria-label="Поставить лайк."
            className={
              typeof props.card.liked === "undefined"
                ? "button card__like"
                : props.card.liked
                ? "button button-like__image button-like__image_liked"
                : "button button-like__image"
            }
            onClick={handleLikeClick}
          ></button>
        </div>
      </div>
      <p className="card__duration">{getTimeFromMins(props.card.duration)}</p>
    </li>
  );
}

export default MoviesCard;
