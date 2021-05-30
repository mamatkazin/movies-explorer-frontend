import { HTTPError } from '../components/Error';
import { mainApiUrl } from './const';

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return res.json().then((data) => {
        throw new HTTPError(res.status, data.message || data.error);
      });
    }

    return res.json();
  }

  //   # возвращает информацию о пользователе (email и имя)
  // GET /users/me

  // # обновляет информацию о пользователе (email и имя)
  // PATCH /users/me

  // # возвращает все сохранённые пользователем фильмы
  // GET /movies

  // # создаёт фильм с переданными в теле
  // # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
  // POST /movies

  // # удаляет сохранённый фильм по id
  // DELETE /movies/movieId

  getUser() {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers,
      credentials: 'include',
      method: 'GET',
    }).then(this._getResponseData);
  }

  setUser(name, email) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._getResponseData);
  }

  getSavedMovies() {
    return fetch(this._baseUrl + '/movies', {
      headers: this._headers,
      credentials: 'include',
      method: 'GET',
    }).then(this._getResponseData);
  }

  saveMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN
  ) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailer: trailer,
        thumbnail: thumbnail,
        owner: owner,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN,
      }),
    }).then(this._getResponseData);
  }

  deleteMovie(movieId) {
    return fetch(this._baseUrl + '/movies/' + movieId, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  signup(name, email, password) {
    return fetch(this._baseUrl + '/signup', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._getResponseData);
  }

  signin(email, password) {
    return fetch(this._baseUrl + '/signin', {
      headers: this._headers,
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._getResponseData);
  }

  signout() {
    return fetch(this._baseUrl + '/signout', {
      headers: this._headers,
      credentials: 'include',
      method: 'GET',
    }).then(this._getResponseData);
  }
}

const mainApi = new MainApi({
  baseUrl: mainApiUrl,
  // baseUrl: "http://172.20.12.52:4000/",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
