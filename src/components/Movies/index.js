import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm";
import MoviesCardList from "../MoviesCardList";
import Footer from "../Footer";
import { MoviesContext } from "../../contexts";
import "./index.css";

function Movies(props) {
  const movies = React.useContext(MoviesContext);

  const [subStr, setSubStr] = React.useState("");
  const [shortFilm, setShortFilm] = React.useState(false);
  const [filter, setFilter] = React.useState(movies);

  // React.useEffect(() => {

  //   setFilter(result);
  // }, [filter, subStr, shortFilm]);

  function handleSubStrChange(e) {
    setSubStr(e.target.value);
  }

  function handleShortFilmChange(e) {
    setShortFilm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("&&&&", subStr, shortFilm);

    // const result = filter.reduce(
    //   (arr, item) => {
    //     console.log("^^^^", item);
    //     if (item.nameRU.includes(subStr)) {
    //       if (shortFilm && item.duration <= 40) {
    //         return arr.push(item);
    //       }

    //       return arr.push(item);
    //     } else {
    //       return arr;
    //     }
    //   },
    //   [subStr, shortFilm],
    // );

    // setFilter(result);
  }

  return (
    <div className="page">
      <Header loggedIn={props.loggedIn} themeColor="light"></Header>
      <main className="content">
        <SearchForm onSubStrChange={handleSubStrChange} onShortFilmChange={handleShortFilmChange} />
        <MoviesCardList
          cards={movies}
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
