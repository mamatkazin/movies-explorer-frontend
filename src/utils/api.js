import { HTTPError } from "../components/Error";
import { baseUrl } from "./const";

class Api {
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

  // getCurrentUser() {
  //   return fetch(this._baseUrl + "users/me", {
  //     headers: this._headers,
  //     credentials: "include",
  //     method: "GET",
  //   }).then(this._getResponseData);
  // }

  // setUser(name, about) {
  //   return fetch(this._baseUrl + "users/me", {
  //     method: "PATCH",
  //     credentials: "include",
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: name,
  //       about: about,
  //     }),
  //   }).then(this._getResponseData);
  // }

  // setAvatar(avatar) {
  //   return fetch(this._baseUrl + "users/me/avatar", {
  //     method: "PATCH",
  //     credentials: "include",
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       avatar: avatar,
  //     }),
  //   }).then(this._getResponseData);
  // }

  // newCard(name, link) {
  //   return fetch(this._baseUrl + "cards", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: name,
  //       link: link,
  //     }),
  //   }).then(this._getResponseData);
  // }

  // deleteCard(cardId) {
  //   return fetch(this._baseUrl + "cards/" + cardId, {
  //     method: "DELETE",
  //     credentials: "include",
  //     headers: this._headers,
  //   }).then(this._getResponseData);
  // }

  // setLike(cardId) {
  //   return fetch(this._baseUrl + "cards/" + cardId + "/likes", {
  //     method: "PUT",
  //     credentials: "include",
  //     headers: this._headers,
  //   }).then(this._getResponseData);
  // }

  // deleteLike(cardId) {
  //   return fetch(this._baseUrl + "cards/" + cardId + "/likes", {
  //     method: "DELETE",
  //     credentials: "include",
  //     headers: this._headers,
  //   }).then(this._getResponseData);
  // }

  // signup(email, password) {
  //   return fetch(this._baseUrl + "signup", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   }).then(this._getResponseData);
  // }

  // signin(email, password) {
  //   return fetch(this._baseUrl + "signin", {
  //     headers: this._headers,
  //     credentials: "include",
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   }).then(this._getResponseData);
  // }

  // signout() {
  //   return fetch(this._baseUrl + "signout", {
  //     headers: this._headers,
  //     credentials: "include",
  //     method: "GET",
  //   }).then(this._getResponseData);
  // }
}

const api = new Api({
  baseUrl: baseUrl + "/beatfilm-movies",
  // baseUrl: "https://api.mamatkazin.nomoredomains.icu/",
  // baseUrl: "http://172.20.12.52:4000/",
  headers: {
    // authorization: "8f00d36b-aec0-4f68-9304-edc80987adcb",
    "Content-Type": "application/json",
  },
});

export default api;
