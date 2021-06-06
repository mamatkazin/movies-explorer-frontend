import React from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../Header/Header";
import SearchForm from "../SearchForm";
import MoviesCardList from "../MoviesCardList";
import Footer from "../Footer";
import { filteredMovies } from "../../utils";
import { MoviesContext } from "../../contexts";
import "./index.css";

function Movies(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1279px)" });

  const movies = React.useContext(MoviesContext);

  const [subStr, setSubStr] = React.useState("");
  const [shortFilm, setShortFilm] = React.useState(false);
  const [filter, setFilter] = React.useState([]);
  const [notFound, setNotFound] = React.useState(false);
  const [buttonVisible, setButtonVisible] = React.useState(true);
  const [offset, setOffset] = React.useState(isMobile ? [0, 2] : isTablet ? [0, 3] : [0, 4]);

  React.useEffect(() => {
    props.onMovies();

    const storageFilter = JSON.parse(localStorage.getItem("storageFilter"));

    if (storageFilter) {
      setSubStr(storageFilter.subStr);
      setShortFilm(storageFilter.shortFilm);
      setFilter(storageFilter.findArr);
    }
  }, []);

  React.useEffect(() => {
    if (subStr) {
      const findArr = filteredMovies(movies, subStr, shortFilm);
      setFilter(findArr);

      localStorage.setItem("storageFilter", JSON.stringify({ findArr, subStr, shortFilm }));
    }
  }, [movies]);

  React.useEffect(() => {
    if (filter && offset[1] < filter.length) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  }, [offset, filter]);

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
    setOffset([0, isMobile ? 2 : isTablet ? 3 : 4]);
    setFilter(findArr);

    localStorage.setItem("storageFilter", JSON.stringify({ findArr, subStr, shortFilm }));
  }

  function handleClick(e) {
    const offsetEnd = isMobile ? offset[1] + 2 : isTablet ? offset[1] + 3 : offset[1] + 4;

    setOffset([offset[0], offsetEnd]);

    if (offsetEnd >= filter.length) {
      setButtonVisible(false);
    }
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
          <>
            <MoviesCardList cards={filter} offset={offset} onLike={props.onLike} />
            {buttonVisible && (
              <button className="button button-movies" type="button" onClick={handleClick}>
                Ещё
              </button>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
