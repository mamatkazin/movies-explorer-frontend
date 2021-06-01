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
