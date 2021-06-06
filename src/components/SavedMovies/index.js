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
    const storageFilter = JSON.parse(localStorage.getItem("storageSavedFilter"));

    if (storageFilter) {
      setSubStr(storageFilter.subStr);
      setShortFilm(storageFilter.shortFilm);
      setFilter(storageFilter.findArr);
    }
  }, []);

  React.useEffect(() => {
    let findArr;

    if (movies.length === 0) {
      props.onMovies();
    } else {
      if (subStr) {
        findArr = filteredMovies(movies, subStr, shortFilm);
        setFilter(findArr);

        localStorage.setItem("storageSavedFilter", JSON.stringify({ findArr, subStr, shortFilm }));
      }
    }
  }, [movies]);

  function handleSubStrChange(e) {
    setSubStr(e.target.value);
  }

  function handleShortFilmChange(e) {
    setShortFilm(!shortFilm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onMovies().then((data) => {
      const findArr = filteredMovies(data, subStr, shortFilm);

      setNotFound(findArr.length === 0 ? true : false);

      setFilter(findArr);
      localStorage.setItem("storageSavedFilter", JSON.stringify({ findArr, subStr, shortFilm }));
    });
  }

  return (
    <div className="page">
      <Header loggedIn={props.loggedIn} themeColor="light"></Header>
      <main className="content">
        <SearchForm
          onSubStrChange={handleSubStrChange}
          onShortFilmChange={handleShortFilmChange}
          onSubmit={handleSubmit}
          checked={shortFilm}
          subStr={subStr}
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
