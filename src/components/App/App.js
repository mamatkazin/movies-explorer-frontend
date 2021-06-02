import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { CurrentUserContext, MoviesContext } from "../../contexts";
import { ShowError, HTTPError } from "../Error";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import Register from "../Register";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import Profile from "../Profile";
import Main from "../Main/Main";
import Logout from "../Logout/Logout";
import NotFound from "../NotFound";
import Preloader from "../Preloader/Preloader";
import { setFieldLike } from "../../utils";

import "./App.css";

function App() {
  const history = useHistory();

  const [waiting, setWaiting] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    mainApi
      .getUser()
      .then((data) => {
        setLoggedIn(true);
        setCurrentUser(data);
      })
      .catch((error) => {
        //setWaiting(false);

        if (error instanceof HTTPError) {
          setLoggedIn(false);
        } else {
          setErr({
            code: "Непредвиденная ошибка",
            text: error.message,
          });
        }
      });
  }, [loggedIn]);

  function handleMovies() {
    if (movies.length === 0) {
      setWaiting(true);

      moviesApi
        .getMovies()
        .then((allFilms) => {
          if (savedMovies.length === 0) {
            mainApi
              .getSavedMovies()
              .then((savedFilms) => {
                setSavedMovies(setFieldLike(allFilms, savedFilms));
                console.log("!!!!!", allFilms);
              })
              .catch((error) => {
                setErr({
                  code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
                  text: error.message,
                });
              });
          } else {
            setFieldLike(allFilms, savedMovies);
          }

          setMovies(allFilms);
          setWaiting(false);
        })
        .catch((error) => {
          setErr({
            code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
            text: error.message,
          });

          setWaiting(false);
        });
    }
  }

  function handleSavedMovies() {
    if (savedMovies.length === 0) {
      setWaiting(true);

      return mainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
          setWaiting(false);

          return data;
        })
        .catch((error) => {
          setErr({
            code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
            text: error.message,
          });

          setWaiting(false);

          return null;
        });
    }
  }

  function handleLike(card) {}

  function handleInsertMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  ) {
    setWaiting(true);

    return mainApi
      .getSavedMovies(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      )
      .then((data) => {
        setWaiting(false);

        return data;
      })
      .catch((error) => {
        setErr({
          code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
          text: error.message,
        });

        setWaiting(false);

        return null;
      });
  }

  function handleDeleteMovie(movieId) {
    setWaiting(true);

    return mainApi
      .deleteMovie(movieId)
      .then((data) => {
        setWaiting(false);

        return data;
      })
      .catch((error) => {
        setErr({
          code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
          text: error.message,
        });

        setWaiting(false);

        return null;
      });
  }

  function handleUpdateProfile(name, email) {
    setWaiting(true);

    mainApi
      .setUser(name, email)
      .then((data) => {
        setCurrentUser(data);
        setErr({ code: 200, text: "Данные успешно обновленны!" });

        setWaiting(false);
      })
      .catch((error) => {
        setErr({
          code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
          text: error.message,
        });

        setWaiting(false);
      });
  }

  function handleRegister(name, email, password) {
    setWaiting(true);

    return mainApi
      .signup(name, email, password)
      .then((data) => {
        history.push("/signin");
        setErr({ code: 200, text: "Вы успешно зарегистрировались!" });

        setWaiting(false);

        return true;
      })
      .catch((error) => {
        setErr({
          code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
          text: error.message,
        });

        setWaiting(false);

        return false;
      });
  }

  function handleLogin(email, password) {
    setWaiting(true);

    return mainApi
      .signin(email, password)
      .then((data) => {
        // setCurrentUser(data);
        setLoggedIn(true);
        setWaiting(false);

        history.push("/");

        return true;
      })
      .catch((error) => {
        setErr({
          code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
          text: error.message,
        });

        setWaiting(false);

        return false;
      });
  }

  function handleSignOut() {
    setWaiting(true);

    return mainApi
      .signout()
      .then(() => {
        setLoggedIn(false);
        setWaiting(false);

        history.push("/signin");

        return true;
      })
      .catch((error) => {
        setErr({
          code: error instanceof HTTPError ? error.code : "Непредвиденная ошибка",
          text: error.message,
        });

        setWaiting(false);

        return false;
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MoviesContext.Provider value={movies}>
        <Switch>
          <Route exact path="/">
            {/* {loggedIn ? (
            <Redirect to='/movies' />
          ) : (
            <Main loggedIn={loggedIn} />
          )} */}
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            onMovies={handleMovies}
            // onInsertMovie={handleInsertMovie}
            // onDeleteMovie={handleDeleteMovie}
            onLike={handleLike}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            onMovies={handleSavedMovies}
            onDeleteMovie={handleDeleteMovie}
            onLike={handleLike}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onUpdateProfile={handleUpdateProfile}
          />
          <Route path="/signin">
            {loggedIn ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
          </Route>
          <Route path="/signup">
            {loggedIn ? <Redirect to="/" /> : <Register onRegister={handleRegister} />}
          </Route>
          <Route path="/signout">{<Logout onSignOut={handleSignOut} />}</Route>
          <Route path="*">{loggedIn ? <NotFound /> : <Redirect to="/signin" />}</Route>
        </Switch>
        {waiting && <Preloader />}
        <ShowError err={err} />
      </MoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
