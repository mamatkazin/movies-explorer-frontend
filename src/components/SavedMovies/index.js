import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Footer from '../Footer';
import { filteredMovies } from '../../utils';
import './index.css';

function SavedMovies(props) {
  const [subStr, setSubStr] = React.useState('');
  const [shortFilm, setShortFilm] = React.useState(false);
  const [filter, setFilter] = React.useState([]);
  const [offset, setOffset] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    props.onMovies().then((data) => {
      setMovies(data);
      setOffset([0, data.length]);
    });
  }, []);

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

  return (
    <div className='page'>
      <Header loggedIn={props.loggedIn} themeColor='light'></Header>
      <main className='content'>
        <SearchForm
          onSubStrChange={handleSubStrChange}
          onShortFilmChange={handleShortFilmChange}
          onSubmit={handleSubmit}
          checked={shortFilm}
        />
        {notFound ? (
          <h2 className='content__not-found page__content'>
            Ничего не найдено
          </h2>
        ) : (
          <MoviesCardList
            liked={true}
            cards={filter}
            offset={offset}
            onDeleteMovie={props.onDeleteMovie}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
