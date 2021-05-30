import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm";
import MoviesCardList from "../MoviesCardList";
import Footer from "../Footer";
import "./index.css";

function Movies(props) {
  return (
    <div className="page">
      <Header loggedIn={props.loggedIn} themeColor="light"></Header>
      <main className="content">
        <SearchForm />
        <MoviesCardList
          cards={props.cards}
          liked={false}
          // onCardClick={props.onCardClick}
          onCardLike={props.onCardLike}
          onCardDelete={props.onCardDelete}
        />
        <button className="button button-movies">Ещё</button>
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
