import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Footer from '../Footer';
import { MoviesContext } from '../../contexts';
import './index.css';

function Movies(props) {
  const movies = React.useContext(MoviesContext);

  const [subStr, setSubStr] = React.useState('');
  const [shortFilm, setShortFilm] = React.useState(false);
  const [filter, setFilter] = React.useState([]);

  React.useEffect(() => {
    props.onMovies();
  }, []);

  function handleSubStrChange(e) {
    setSubStr(e.target.value);
  }

  function handleShortFilmChange(e) {
    setShortFilm(!shortFilm);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log('&&&&', subStr, shortFilm, movies);
    let result = [];

    result = movies.reduce((arr, item) => {
      console.log('^^^^', item.nameRU.includes(subStr), arr);
      if (shortFilm) {
        if (item.nameRU.includes(subStr) && item.duration <= 50) {
          arr.push(item);
        }
      } else {
        if (item.nameRU.includes(subStr)) {
          arr.push(item);
        }
      }

      return arr;
    }, []);

    setFilter(result);
  }

  return (
    <div className='page'>
      {console.log('%%%', movies)}
      <Header loggedIn={props.loggedIn} themeColor='light'></Header>
      <main className='content'>
        <SearchForm
          onSubStrChange={handleSubStrChange}
          onShortFilmChange={handleShortFilmChange}
          onSubmit={handleSubmit}
          checked={shortFilm}
        />
        <MoviesCardList
          cards={filter}
          liked={false}
          // onCardClick={props.onCardClick}
          onCardLike={props.onCardLike}
          onCardDelete={props.onCardDelete}
        />
        <button className='button button-movies'>Ещё</button>
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
