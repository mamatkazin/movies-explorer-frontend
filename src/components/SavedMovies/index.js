import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm";
import MoviesCardList from "../MoviesCardList";
import Footer from "../Footer";
import { filteredMovies } from "../../utils";
import { SavedMoviesContext } from "../../contexts";
import "./index.css";

function SavedMovies(props) {
  const movies = React.useContext(SavedMoviesContext);

  const [subStr, setSubStr] = React.useState("");
  const [shortFilm, setShortFilm] = React.useState(false);
  const [filter, setFilter] = React.useState([]);
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    props.onMovies();
  }, []);

  React.useEffect(() => {
    const findArr = filteredMovies(movies, subStr, shortFilm);
    setFilter(findArr);
  }, [movies]);

  function handleSubStrChange(e) {
    setSubStr(e.target.value);
  }

  function handleShortFilmChange(e) {
    setShortFilm(!shortFilm);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const findArr = filteredMovies(movies, subStr, shortFilm);

    setNotFound(findArr.length === 0 ? true : false);

    setFilter(findArr);
  }

  // function handleLike(card) {
  //   props.onDeleteLike(card).then(() => {
  //     console.log("&&&&&&&&&");
  //     // filter.length = 0;
  //     // setCheck(!check);
  //     // //movies.length = 0;
  //     // const findArr = filteredMovies(movies, subStr, shortFilm);
  //     // setFilter([...[], ...findArr]);
  //   });
  // }

  return (
    <div className="page">
      <Header loggedIn={props.loggedIn} themeColor="light"></Header>
      <main className="content">
        <SearchForm
          onSubStrChange={handleSubStrChange}
          onShortFilmChange={handleShortFilmChange}
          onSubmit={handleSubmit}
          checked={shortFilm}
        />
        {notFound ? (
          <h2 className="content__not-found page__content">Ничего не найдено</h2>
        ) : (
          <MoviesCardList cards={filter} onLike={props.onLike} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
