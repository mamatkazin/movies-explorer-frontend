import { moveDuration } from "./const";

export function filteredMovies(movies, subStr, shortFilm) {
  let result = [];

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

  return result;
}

export function setFieldLike(movies, savedMovies) {
  movies.map((current) => {
    current.liked = savedMovies.find((item) => item.id === current.id) ? true : false;

    return current;
  });

  // return movies;
}
