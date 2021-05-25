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
      <main className="content page__content">
        <SearchForm />
        <MoviesCardList
          cards={props.cards}
          // onCardClick={props.onCardClick}
          onCardLike={props.onCardLike}
          onCardDelete={props.onCardDelete}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
