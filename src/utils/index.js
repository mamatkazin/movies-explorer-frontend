import { moveDuration } from "./const";

export function filteredMovies(movies, subStr, shortFilm) {
  let result = [];

  if (movies && movies.length > 0 && subStr !== "") {
    result = movies.reduce((arr, item) => {
      if (shortFilm) {
        if (item.nameRU.includes(subStr) && item.duration <= moveDuration) {
          arr.push(item);
        }
      } else {
        if (item.nameRU.includes(subStr)) {
          arr.push(item);
        }
      }

      return arr;
    }, []);
  }

  return result;
}

export function setFieldLike(movies, savedMovies) {
  if (savedMovies && movies) {
    movies.map((current) => {
      const movie = savedMovies.find((item) => item.movieId === current.id);
      if (movie) {
        current.liked = true;
        current.savedId = movie._id;
      } else {
        current.liked = false;
      }

      return current;
    });
  }

  return movies;
}
