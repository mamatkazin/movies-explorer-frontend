import { HTTPError } from "../components/Error";
import { baseUrl } from "./const";

class MoviesApi {
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

  getMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers,
      method: "GET",
    }).then(this._getResponseData);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: baseUrl + "/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
